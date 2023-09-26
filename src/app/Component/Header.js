"use client";

import Link from "next/link";

// import React from "react";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

const Header = ({ value }) => {
  const router = useRouter();
  console.log("compo hai");
  const SubimitData = async () => {
    sessionStorage.clear();
    router.push("/login");
  };

  let [data, setData] = useState("");

  useEffect(() => {
    const sessionData = sessionStorage.getItem("user");
    console.log(sessionData)

    data = JSON.parse(sessionData);
    //   setData(data.data)
    // console.log(data.data,"trtrtrt");
    // console.log("sessionData")
    console.log(data.data, ";;;;;;;");
    setData(data.data);
  }, []);
  return (
    <nav className="bg-sky-600 h-16 py-2 px-36 flex justify-between items-center">
      <div className="brand">
        <div className="text-2xl text-white">
          <h1>User Id :{data.UserId}</h1>
        </div>
        <h1 className="text-2xl font-bold">
          <Link href={"/"} className="hover:text-white">
            Admin Workflow
          </Link>
        </h1>
      </div>

      <div>
        <ul className="flex space-x-4 ">
          <div className="flex grow justify-end">
            <input
              className="flex h-8 w-[250px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Serach"
            />
          </div>

          <li>
            <button onClick={SubimitData} className="text-bold text-xl">
              logout
            </button>
          </li>
          <div className="text-2xl text-white">
            <h1>{data.username}</h1>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
