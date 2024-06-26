import React from "react";
import { Input, Button, Chip, link } from "@nextui-org/react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div
        className="text-red-800 text-6xl text-align: center 	w-72 m-10
"
      >
        LOGIN
      </div>

      <div className="flex justify-center items-center">
        <div>
          <Input className="m-2" type="email" label="Email" />
          <Input className="m-2" type="password" label="Password" />
          <Button
            as={Link}
            href="/home"
            radius="full"
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg m-2"
          >
            Login
          </Button>
          <br></br>
          Don't have an account yet? <Link href="/register">Sign Up </Link>
          instead!!
        </div>
      </div>
    </>
  );
};

export default page;
