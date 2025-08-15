"use client";

import { login } from "@/lib/actions/auth";

export const SignInButton = () => {
  return (
    <>
      <button
        onClick={() => login()}
        className="mt-1.5 cursor-pointer  bg-blue-500 text-xl"
      >
        Sign In with google
      </button>
    </>
  );
};
