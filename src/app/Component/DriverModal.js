"use client";
import React, { useState , useEffect} from "react";

function DriverModal({ isOpen, isClose }) {
  if (!isOpen) return null;

  let [formdata, setFormdata] = useState({
    userid: "",
    username: "",
    VehicleNumber: "",
    LicenseNumber: "",
    ContactNumber: "",
  });

  const [datadriver, setDataDriver] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const handleinput = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  useEffect(() => {
    fetch("/api/UserDrop")
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
      const response = await fetch("/api/driver", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      console.log(response, "driver response");
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
                    htmlFor="userid"
                    className="block font-bold text-gray-900"
                  >
                    User Id
                  </label>
                  <input
                    id="userid"
                    name="userid"
                    type="text"
                    value={formdata.userid}
                    onChange={handleinput}
                    placeholder="Enter userid"
                    className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                                      required
                                      disabled
                  />
                </div>
                <div>
                  <label
                    htmlFor="username"
                    className="block font-bold text-gray-900"
                  >
                    User name
                  </label>
                  <select
                    name="username"
                    id="username"
                                      value={formdata.username}
                                      onChange={handleinput}
                    placeholder="Enter username"
                    className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                    required
                                  >
                                      <option>Select driver id</option>
                                      {datadriver.map((data) => (
                                          <option key={data.username} value={data.username}>{ data.username}</option>
                                      ))}
                    
                  </select>
                  {/* <input
                    id="username"
                    name="username"
                    type="text"
                    value={formdata.username}
                    onChange={handleinput}
                    placeholder="Enter username"
                    className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                    required
                  /> */}
                </div>
                <div>
                  <label
                    htmlFor="VehicleNumber"
                    className="block font-bold text-gray-900"
                  >
                    VehicleNumber
                  </label>
                  <input
                    id="VehicleNumber"
                    name="VehicleNumber"
                    type="text"
                    value={formdata.VehicleNumber}
                    onChange={handleinput}
                    placeholder="Enter VehicleNumber"
                    className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="LicenseNumber"
                    className="block font-bold text-gray-900"
                  >
                    LicenseNumber
                  </label>
                  <input
                    id="LicenseNumber"
                    name="LicenseNumber"
                    type="text"
                    value={formdata.LicenseNumber}
                    onChange={handleinput}
                    placeholder="Enter LicenseNumber"
                    className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="ContactNumber"
                    className="block font-bold text-gray-900"
                  >
                    ContactNumber
                  </label>
                  <input
                    id="ContactNumber"
                    type="text"
                    name="ContactNumber"
                    value={formdata.ContactNumber}
                    onChange={handleinput}
                    placeholder="Enter ContactNumber"
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

export default DriverModal;
