'use client'
import { auth } from "../../../app/firebase/config";
import { useForm } from "../../hooks/useForm";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const { formState, onInputChange, onResetForm } = useForm({
    email: "",
    password: "",
  });

  const router = useRouter();

  const HandleLogin = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        formState.email,
        formState.password
      );
      router.push("/dashboard/vendors");
      onResetForm();
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <form className="flex flex-col w-1/2" onSubmit={HandleLogin}>
      <div className="mb-4 flex flex-col">
        <label
          className="uppercase font-bold text-sm text-main"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="rounded p-2 bg-slate-100"
          type="text"
          name="email"
          id="email"
          required
          autoComplete="on"
          onChange={onInputChange}
          value={formState.email}
        />
      </div>

      <div className="mb-8 flex flex-col">
        <label
          className="font-bold uppercase text-sm text-main"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="rounded p-2 bg-slate-100"
          type="password"
          id="password"
          name="password"
          required
          onChange={onInputChange}
          value={formState.password}
        />
      </div>

      <button
        className="bg-main hover:bg-secondary font-bold p-3 rounded text-white hover:bg-maindark hover:duration-300 duration-300"
        type="submit"
      >
        Log In
      </button>
    </form>
  );
};
