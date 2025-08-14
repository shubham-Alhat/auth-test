## Implement auth in nextjs

1. install the auth package

```bash
npm install next-auth@beta
```

2. run the following cmd.

- It will generate `.env.local` and inside it variable `AUTH_SECRET`.

```bash
npx auth secret
```

3. Create OAuth app in github and copy envs from and paste it in `.env.local` file. Note- **The env variables name should be `AUTH_GITHUB_ID` and `AUTH_GITHUB_SECRET`.**

4. Create `api/auth/[...nextauth]/route.ts`.

5. Create a `auth.ts` file in root of application.

_auth.ts_

```typescript
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [GitHub],
});
```

6. In `api/auth/[...nextauth]/route.ts`.

_route.ts_

```typescript
import { handlers } from "../../../../../auth";

export const { GET, POST } = handlers;
```

7. Just create UI where user will click to login and logout. but here comes problem. **signIn and signOut are server functions and `onClick` is client component. Nextjs will throw error here.**

_refer this video -_ [video](https://www.youtube.com/watch?v=n-fVrzaikBQ) - On 10:01 timestamp.

8. Create `src/lib/actions/auth.ts`.

_auth.ts_

```typescript
"use server";

import { signIn, signOut } from "../../../auth";

export const login = async () => {
  await signIn("github", { redirectTo: "/" });
};

export const logout = async () => {
  await signOut({ redirectTo: "/" });
};
```

9. In home page. i.e `app/page.tsx` add the below code

```javascript
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
```

---

#### Now just click button and you will done.

---
