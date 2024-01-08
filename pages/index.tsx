import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next";

export default function Page() {
  const { data } = useSession();

  return (
    <div>
      <div className="text-2xl text-center">{data?.user?.email}</div>
      <div className="text-2xl text-center">{JSON.stringify(data)}</div>

      {data?.user ? (
        <Button onClick={() => signOut()} variant={"destructive"}>
          Logout
        </Button>
      ) : (
        <Button onClick={() => signIn("google", { redirect: false })}>
          Login
        </Button>
      )}
    </div>
  );
}
