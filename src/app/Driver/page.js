"use client";
import React, { useState, useEffect } from "react";
import { Sidebar } from "../Component/Sidebar";
import Layout from "../Component/Layout";
import { CardTwo } from "../Component/CardTwo";
import DriverModalModal from "../Component/DriverModal"
import Image from "next/image";





function Driver() {
  const [data, setData] = useState([]);
  const [datadriver, setDataDriver] = useState([]);
  const [isLoading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
     setModalOpen(false)
  }

  useEffect(() => {
    fetch("/api/driver")
      .then((res) => res.json())
      .then((data) => {
        setDataDriver(data);
        setLoading(false);
      });
    //   console.log(data , "Driver data")
  }, []);



  return (
    <Layout>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Drivers</h2>
            <p className="mt-1 text-sm text-gray-900">
              List of all drivers. You can add new , edit
              or delete existing ones.
            </p>
          </div>
          <div>
            <button
              type="button"
              onClick={openModal}
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add new driver
            </button>
          </div>
        </div>
        <DriverModalModal isOpen={modalOpen} isClose={closeModal} />
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-sky-900" >
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-white"
                      >
                        <span>Driver Id</span>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-white"
                      >
                        Vehicle Number
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-white"
                      >
                        License Number
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-white"
                      >
                        Contact Number
                      </th>
                         <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-white"
                      >
                        Edit
                      </th>

                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-sky-200">
                    {data.map((data) => (
                      <tr key={data.driverid}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {data.driverid}
                              </div>  
                            </div>  
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">
                            {data.vehiclenumber}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {data.licensenumber}
                        </td>

                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {data.contactnumber}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-md text-black">
                          <button>
                            {" "}
                            <Image
                              src="/icons8-edit-64.png"
                              alt="Image"
                              width={20}
                              height={20}
                            />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Driver;
