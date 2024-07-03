import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-screen grid place-content-center">
      <SignUp forceRedirectUrl="/newuser" />
    </div>
  );
}
