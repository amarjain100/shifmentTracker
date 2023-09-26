import { NextRequest, NextResponse } from "next/server";
import pool from "../../../database/db";

// export function GET(request) {
//     console.log(request)
//     const drivers = [{
//         name: "amar",
//         age: 24,
//         sex: "male"
//     },
//     {
//         name: "sakshi",
//         age: 23,
//         sex: "female"
//     },{
//         name: "anubhav",
//         age: 26,
//         sex: "male"
//         }]
//     return NextResponse.json(drivers)
// }


///GET MULTIPLE DRIVER
export async function GET() {
  const query = "SELECT * FROM drivers";
  const result = await pool.query(query);
  const user = result.rows;
  console.log(user, "driverreceived");
  return NextResponse.json(user);
}

// ADD DRIVERS
export async function POST(request) {
  let data = await request.json();
  console.log(data);
  try {
    //       await request
    // .json()
    //           .then(async (result) => {
      const { VehicleNumber , LicenseNumber, ContactNumber } = data;
    //   if(data.values)
    const query =
      "INSERT INTO drivers ( VehicleNumber , LicenseNumber, ContactNumber) VALUES ($1, $2, $3)";
    const values = [VehicleNumber , LicenseNumber, ContactNumber];
    const rows = await pool.query(query, values);
    const count = rows.rowCount;

    if (count === 1) {
      console.log("Successfully registered");
      return NextResponse.json(
        { message: "Data inserted successfully" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 200 }
    );

    // })
    // .catch((error) => {
    // //   NextResponse.json({ error: "Error on '/api/register': " + err ,status:400})
    // });
  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export function DELETE(request) {
  console.log("deleted !!!");
  return NextResponse.json(
    {
      message: "deleted !!",
      status: true,
    },
    { status: 201, statusText: "hey changed text" }
  );
}
export function PUT() {}
