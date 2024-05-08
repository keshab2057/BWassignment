import React from "react";
import { Input, Button, Chip } from "@nextui-org/react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div
        className="text-red-800 text-6xl text-align: center	w-72 m-10
"
      >
        REGISTER
      </div>

      <div className="flex justify-center items-center">
        <div>
          <Input className="m-2" label="Full Name" />
          <Input className="m-2" type="email" label="Email" />
          <Input className="m-2" type="password" label="Password" />
          <Input className="m-2" label="Address" />
          <Button
            radius="full"
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg m-2"
          >
            Register
          </Button><br></br>
          Already have an account? <Link href="/"> Login </Link>instead!!
         
        </div>
      </div>
    </>
  );
};

export default page;
