'use client'

import { doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase/config";
import { createDoc } from "../../firebase/fetch";
import { useForm } from "../../hooks/useForm"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";

export const VendorsForm = () => {

    const { formState, onInputChange, onResetForm } = useForm({
        name: "",
        company: "",
        tax: "",
        phone: "",
        email: "",
    });

    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const [images, setImages] = useState({
        inputKey: Date.now(),
    });

    // Handles input change event and updates state
    const handleImages = ({ target }) => {
        const { name, files } = target;
        setImages({
            ...images,
            [name]: files[0]
        });
    }

    const handleForm = async (e) => {
        e.preventDefault();
        let temporalUrls;
        setLoading(true);
        try {
            const response = await createDoc("vendors", formState);
            if (!response) throw new Error("HTTP:Error");
            for (const [key, value] of Object.entries(images)) {
                if (key != 'inputKey') {
                    const starsRef = ref(storage, `/pictures/${response}/${key}`);
                    await uploadBytesResumable(starsRef, value);
                    const url = await getDownloadURL(starsRef);
                    temporalUrls = { ...temporalUrls, [key]: url };
                }
            }

            const vendorsRef = doc(db, "vendors", response);
            await updateDoc(vendorsRef, {
                ...temporalUrls
            });

            setLoading(false);
            onResetForm();
            setSuccess(true);
            setImages({
                inputKey: Date.now(),
            })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            {
                success && <div className="w-full bg-green-700 py-4 rounded px-2 text-lg font-bold text-white mb-4">Your form has been submitted successfully!</div>
            }
            <form className="my-6" onSubmit={handleForm}>
                <div className="flex flex-wrap ">
                    <div className="w-full md:w-1/2 mb-6 md:pr-3 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                            Full Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            name="name"
                            type="text"
                            placeholder="Jane"
                            minLength={2}
                            required
                            value={formState.name}
                            onChange={onInputChange}
                            id="name"
                        />
                    </div>

                    <div className="w-full md:w-1/2 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="company">
                            Company Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            name="company"
                            type="text"
                            placeholder="Blessed Solutions Plumbing"
                            minLength={2}
                            required
                            value={formState.company}
                            onChange={onInputChange}
                            id="company"
                        />
                    </div>

                    <div className="w-full md:w-1/2 mb-6 md:pr-3 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tax">
                            Tax ID
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            name="tax"
                            type="text"
                            placeholder="Tax ID"
                            minLength={2}
                            required
                            value={formState.tax}
                            onChange={onInputChange}
                            id="tax"
                        />
                    </div>

                    <div className="w-full md:w-1/2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                            Phone
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="phone"
                            type="tel"
                            placeholder="+1 (321) 316-1476"
                            minLength={8}
                            required
                            value={formState.phone}
                            onChange={onInputChange}
                            id="phone"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap mb-6">
                    <div className="w-full ">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                            E-mail
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="email"
                            type="email"
                            placeholder="janedoe@mail.com"
                            required
                            value={formState.email}
                            onChange={onInputChange}
                            id="email"
                        />
                    </div>

                    <div className="w-full md:w-1/2 mb-6 md:pr-3 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="workersInsurance">
                            Workers comp insurance
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            name="workersInsurance"
                            type="file"
                            accept="jpeg"
                            id="workersInsurance"
                            key={images.inputKey}
                            onChange={handleImages}
                            required
                        />
                    </div>

                    <div className="w-full md:w-1/2 mb-6  md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="driversLicense">
                            Drivers license
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            name="driversLicense "
                            type="file"
                            accept="jpeg"
                            id="driversLicense"
                            onChange={handleImages}
                            key={`d-${images.inputKey}`}
                            required
                        />
                    </div>

                    <div className="w-full md:w-1/2 mb-6 md:pr-3 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="generalLiability">
                            General liability insurance
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            name="generalLiability"
                            type="file"
                            accept="jpeg"
                            id="generalLiability"
                            onChange={handleImages}
                            key={`g-${images.inputKey}`}
                            required
                        />
                    </div>

                    <div className="w-full md:w-1/2 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="comercialCar">
                            Comercial car insurance
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            name="comercialCar"
                            type="file"
                            accept="jpeg"
                            id="comercialCar"
                            onChange={handleImages}
                            key={`c-${images.inputKey}`}
                            required
                        />
                    </div>
                </div>



                <div className="md:flex md:items-center">
                    <div className="md:w-1/3">
                        {
                            loading
                                ? <div
                                    className="inline-block h-8 w-8 animate-spin rounded-full border-main border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                    role="status">
                                    <span
                                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                    >Loading...</span>
                                </div>
                                : <button className="w-full lg:w-40 py-4 px-2 bg-main text-white font-bold rounded flex text-lg items-center justify-center uppercase mt-6 hover:bg-secondary duration-300"
                                    type="submit"
                                >
                                    Send
                                </button>
                        }
                    </div>
                    <div className="md:w-2/3"></div>
                </div>
            </form>
        </>

    )
}

