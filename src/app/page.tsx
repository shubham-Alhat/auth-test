"use client";
import { login } from "@/lib/actions/auth";

export default function Home() {
  return (
    <>
      <div className="w-full flex justify-center items-center mt-7 text-blue-400 text-4xl">
        Hello World
      </div>
      <div className="mt-5 w-full flex justify-center flex-col">
        You are not signIn
        <br />
        {"   "}
      </div>
      <button
        onClick={() => login()}
        className="mt-1.5 cursor-pointer  bg-blue-500 text-xl"
      >
        Sign In with github
      </button>
    </>
  );
}
