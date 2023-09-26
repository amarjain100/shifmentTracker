"use client";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

function Modal({ isOpen, isClose }) {
  // if (!isOpen) return null;
  const [datadriver, setDataDriver] = useState([]);
  const [isLoading, setLoading] = useState(true);
  let [formdata, setFormdata] = useState({
    customername: "",
    Destinationaddress: "",
    shipmentstatus: "",
    assigneddriverid: "",
    planneddeliverydate: "",
    actualdeliverydate: "",
    // vehiclenumber: "",
    // licensenumber: "",
    // contactnumber: "",
  });

  const handleinput = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  useEffect(() => {
    fetch("/api/DriverDrop")
      .then((res) => res.json())
      .then((data) => {
        setDataDriver(data);
        setLoading(false);
      });
    //   console.log(data , "Driver data")
  }, []);
  const SubimitData = async () => {
    try {
      const userData = formdata;

      console.log(userData, "user data");
      const response = await fetch("/api/shipments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      console.log(response, "shipment response");
      if (response.status === 201) {
        const data = await JSON.stringify(response);
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Registered Successfully",
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
    <div className="  items-center justify-center ">
      <div className="modal-container">
        <div className="modal-content">
          <div className="flex flex-row items-center justify-center w-full shadow-2xl px-4 py-4 shadow-zinc-800">
            <div className="w-full max-w-md space-y-8">
              <button
                className="modal-close ml-auto text-red-600 text-lg"
                onClick={isClose}
              >
                close
              </button>
              <div className="mt-8 space-y-2">
                <div>
                  <label
                    htmlFor="customername"
                    className="block font-bold text-gray-900"
                  >
                    customername
                  </label>
                  <input
                    id="customername"
                    name="customername"
                    type="text"
                    value={formdata.customername}
                    onChange={handleinput}
                    placeholder="Enter customername"
                    className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="Destinationaddress"
                    className="block font-bold text-gray-900"
                  >
                    Destinationaddress address
                  </label>
                  <input
                    id="Destinationaddress"
                    name="Destinationaddress"
                    type="text"
                    value={formdata.Destinationaddress}
                    onChange={handleinput}
                    placeholder="Enter Destinationaddress"
                    className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="shipmentstatus"
                    className="block font-bold text-gray-900"
                  >
                    shipmentstatus
                  </label>
                  <select
                    name="shipmentstatus"
                    id="shipmentstatus"
                    value={formdata.shipmentstatus}
                    onChange={handleinput}
                    placeholder="Enter shipmentstatus"
                    className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                    required
                  >
                    <option value="pending">Pending</option>
                    <option value="intransit">In-transit</option>
                    <option value="delivered">delivered</option>
                  </select>

                </div>
                <div>
                  <label
                    htmlFor="assigneddriverid"
                    className="block font-bold text-gray-900"
                  >
                    Assigned driver
                  </label>
                  <select
                    name="assigneddriverid"
                    id="assigneddriverid"
                    value={formdata.assigneddriverid}
                    onChange={handleinput}
                    placeholder="Enter assigneddriverid"
                    className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                    required
                  >
                    <option>Select driver id</option>
                    {datadriver.map((data) => (
                      <option key={data.driverid} value={data.driverid}>
                        {data.driverid}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="planneddeliverydate"
                    className="block font-bold text-gray-900"
                  >
                    Planned Date
                  </label>
                  <input
                    id="planneddeliverydate"
                    type="text"
                    name="planneddeliverydate"
                    value={formdata.planneddeliverydate}
                    onChange={handleinput}
                    placeholder="Enter Date"
                    className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="actualdeliverydate"
                    className="block font-bold text-gray-900"
                  >
                    Actual Delivery Date
                  </label>
                  <input
                    id="actualdeliverydate"
                    type="text"
                    name="actualdeliverydate"
                    value={formdata.actualdeliverydate}
                    onChange={handleinput}
                    placeholder="Enter Date"
                    className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                    required
                  />
                </div>
                {/* <div>
                  <label
                    htmlFor="shipmentstatus"
                    className="block font-bold text-gray-900"
                  >
                    Status
                  </label>
                  <input
                    id="Status"
                    type="text"
                    name="Status"
                    value={formdata.Status}
                    onChange={handleinput}
                    placeholder="Enter Status"
                    className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                    required
                  />
                </div> */}
                {/* 
                <div>
              <label htmlFor="vehiclenumber" className="block font-bold text-gray-900">
                vehiclenumber
              </label>
              <input
                id="vehiclenumber"
                              type="text"
                              name="vehiclenumber"
                              value={formdata.vehiclenumber}
                              onChange={handleinput}
                placeholder="Enter vehicle no"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>  
                      <div>
              <label htmlFor="licenseenumber" className="block font-bold text-gray-900">
                licensenumber
              </label>
              <input
                id="licensenumber"
                              type="text"
                              name="licensenumber"
                              value={formdata.licensenumber}
                              onChange={handleinput}
                placeholder="Enter vehicle no"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
                      </div>  
                        <div>
              <label htmlFor="contactnumber" className="block font-bold text-gray-900">
                contactnumber
              </label>
              <input
                id="contactnumber"
                              type="number"
                              name="contactnumber"
                              value={formdata.contactnumber}
                              onChange={handleinput}
                placeholder="Enter vehicle no"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>           */}
                <div>
                  <button
                    type="submit"
                    onClick={SubimitData}
                    className="w-full px-4 py-3 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
