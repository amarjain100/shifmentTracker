"use client";
import React, { useState, useEffect } from "react";
import { Sidebar } from "../Component/Sidebar";
import Layout from "../Component/Layout";
import { CardTwo } from "../Component/CardTwo";
import Image from "next/image"

function MyShipment() {
  const [data, setData] = useState([]);
    const [Driverdata, setDriverData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false)
      useEffect(() => {
    fetch("/api/shipments")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
    //   console.log(data , "shipment data")
  }, []);
    return (
        <Layout>
                  <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Drivers</h2>
            <p className="mt-1 text-sm text-gray-900">
              List of assigned. You can update
              existing ones.
            </p>
          </div>

        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-sky-900">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-white"
                      >
                        <span>Id</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-white"
                      >
                        Customer
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-white"
                      >
                        Destination Address
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-white"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-white"
                      >
                        Assigned Driver
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-white"
                      >
                        Planned Date
                      </th>{" "}
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
                      <tr key={data.shipmentid}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-md font-medium text-black">
                                {data.shipmentid}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-md text-black ">
                            {data.customername}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-md text-black">
                          {data.destinationaddress}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          {data.shipmentstatus}

                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-md text-black">
                          {data.assigneddriverid}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-md text-black">
                          {data.planneddeliverydate}
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
    )
}
export default MyShipment;
