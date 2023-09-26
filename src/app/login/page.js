"use client";
import React, { useState,useEffect } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import Image from 'next/image';


export default function Login() {
  const router = useRouter();
  let [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const sessionData = sessionStorage.getItem("user");
    console.log(sessionData,"sessionData")
    if (sessionData!= null) { 
      if (sessionData.data.role == "admin") {
        router.push("/AdminDashboard")
      } else {
        router.push("/DriverDashboard")
      }
    }
  },[null])

  const handleinput = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const SubimitData = async () => {
    try {

      const loginData = formdata;

      console.log(loginData , "login data");
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
        redirect:'follow'
      });
  const result = await response.text();
  const arr = JSON.parse(result);
      console.log(arr.data.role, "arrr");
      
      sessionStorage.setItem("user",JSON.stringify(arr))
      if (arr.status == 201) {

        // const data = JSON.stringify(response);
        console.log((arr.data.role).length, "not");
      const role = arr.data.role
        if (role == "admin") {
          console.log("roleeeee")
          router.push('/AdminDashboard');
        }
        else {
          router.push('/DriverDashboard');
        }
      } else {
        // Handle authentication error
        // alert('Authentication failed');
        console.log("not login");
        // router.push('/authfail');
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
    // console.log(formdata)
  };


  return (
    <div className="bg-slate-500">
    <div className="flex flex-col items-center md:flex-row md:h-screen">
      <div className="flex items-center justify-center w-full md:w-1/2">
        <Image src="/—Pngtree—location delivery 3d illustration_13162135.png" alt="Login Image" width={800} height={600} />
      </div>
      <div className="flex flex-col items-center justify-center w-full md:w-1/4 shadow-2xl px-4 py-4 shadow-zinc-800">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-2xl font-bold">Welcome back!</h1>
            <p className="mt-2 text-black-600">
                         Don't have an Account?
                      <Link href="/Registration" className="text-3xl font-bold hover:text-white"> signup</Link>
                      </p>
          </div>
          <div className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="block font-bold text-gray-900">
                Email address
              </label>
              <input
                id="email"
                name="email"
                value={formdata.email}
                onChange={handleinput}
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block font-bold text-gray-900"
              >
                Password
              </label>
              <input
                name="password"
                value={formdata.password}
                onChange={handleinput}
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                onClick={SubimitData}
                className="w-full px-4 py-3 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
}