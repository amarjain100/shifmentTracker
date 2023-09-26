"use client";

import React, { useState } from "react";
import Image from 'next/image';
import Link from "next/link";
export default function Registration() {
  // let [name, setName] = useState('');

  let [formdata, setFormdata] = useState({
    username: "",
    useremail: "",
    userpassword: "",
    Role:"",
    VehicleNumber: "",
    LicenseNumber: "",
    ContactNumber: "",
  });

  const handleinput = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const SubimitData = async () => {
    try {
      // if(password !== retypepassword){
      //     return
      // }
      // const driverId = null;

      const userData = formdata;

      console.log(userData , "user data");
      const response = await fetch("/api/Signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      console.log(response, "response");
      if (response.status === 201) {
        const data = await JSON.stringify(response);
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Registered Successfully",
          text: `Your UserId is '${data[0]}' and Password is '${data[1]}'`,
        });
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
              <p className="mt-2 text-black-600">Already have an account?
                <Link href="/login" className="text-3xl font-bold hover:text-white"> login</Link>
              </p>
            
          </div>
          <div className="mt-8 space-y-6">
            <div>
              <label htmlFor="name" className="block font-bold text-gray-900">
                Name
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={formdata.username}
                onChange={handleinput}
                placeholder="Enter your name"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-bold text-gray-900">
                Email address
              </label>
              <input
                id="useremail"
                name="useremail"
                type="email"
                value={formdata.useremail}
                onChange={handleinput}
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
                id="userpassword"
                type="password"
                name="userpassword"
                value={formdata.userpassword}
                onChange={handleinput}
                placeholder="Enter your password"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <div>
              <label htmlFor="Role" className="block font-bold text-gray-900">
                Role
              </label>
              <input
                id="Role"
                              type="text"
                              name="Role"
                              value={formdata.Role}
                              onChange={handleinput}
                placeholder="Enter vehicle no"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <div>
              <label htmlFor="VehicleNumber" className="block font-bold text-gray-900">
                VehicleNumber
              </label>
              <input
                id="VehicleNumber"
                              type="text"
                              name="VehicleNumber"
                              value={formdata.VehicleNumber}
                              onChange={handleinput}
                placeholder="Enter vehicle no"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>  
                      <div>
              <label htmlFor="licenseenumber" className="block font-bold text-gray-900">
                LicenseNumber
              </label>
              <input
                id="LicenseNumber"
                              type="text"
                              name="LicenseNumber"
                              value={formdata.LicenseNumber}
                              onChange={handleinput}
                placeholder="Enter vehicle no"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
                      </div>  
                        <div>
              <label htmlFor="ContactNumber" className="block font-bold text-gray-900">
                ContactNumber
              </label>
              <input
                id="ContactNumber"
                              type="number"
                              name="ContactNumber"
                              value={formdata.ContactNumber}
                              onChange={handleinput}
                placeholder="Enter vehicle no"
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
