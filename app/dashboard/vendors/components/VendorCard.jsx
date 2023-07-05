import { getDownloadURL, ref } from "firebase/storage";
import Link from "next/link";
import { useEffect, useState } from "react";
import { storage } from "../../../firebase/config";

export const VendorCard = ({ id ,name, company, email, phone, tax, comercialCar, generalLiability, driversLicense, workersInsurance  }) => {

    return (
        <div className="bg-main p-4 rounded drop-shadow-lg">
            <p className="font-bold text-white">Name: <span className="font-normal">{name}</span></p>
            <p className="font-bold text-white">Company: <span className="font-normal">{company}</span></p>
            <p className="font-bold text-white">Email: <span className="font-normal">{email}</span></p>
            <p className="font-bold text-white">Phone: <span className="font-normal">{phone}</span></p>
            <p className="font-bold text-white">Tax: <span className="font-normal">{tax}</span></p>
            <div className="flex flex-col">
            <a className="text-white underline font-bold" target="__blank" href={comercialCar}>COMERCIAL CAR INSURANCE</a>
            <a className="text-white underline font-bold" target="__blank" href={generalLiability}>GENERAL LIABILITY INSURANCE</a>
            <a className="text-white underline font-bold" target="__blank" href={driversLicense}>DRIVERS LICENSE</a>
            <a className="text-white underline font-bold" target="__blank" href={workersInsurance}>WORKERS COMP INSURANCE</a>
            </div>
        </div>
    )
}
