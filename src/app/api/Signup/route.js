import { NextRequest, NextResponse } from "next/server";
import pool from "../../../database/db";



//signup
export async function POST(request) {
  let data = await request.json();
  console.log(data , "request data");
  try {
    const { VehicleNumber, LicenseNumber, ContactNumber } =  data
    const { username, userpassword, useremail, Role } = data;
    console.log(VehicleNumber , LicenseNumber, "not working")
        const query1 =
      `INSERT INTO drivers ( vehiclenumber , licensenumber, contactnumber) VALUES ('${VehicleNumber}', '${LicenseNumber}', ${+ContactNumber})`;
    // const valuesdt = [ VehicleNumber, LicenseNumber, Number(ContactNumber)];
    const rowsdt = await pool.query(query1);
    // console.log(query1)
    // console.log(rowsdt)
    const countdt = rowsdt.rowCount;
    if (countdt === 1) {
      const query2 = `SELECT driverid FROM drivers where vehicleNumber = '${VehicleNumber}'`;
      console.log(query2)
      const resultsel = await pool.query(query2);
      const driverdata = resultsel.rows;
      const dt = driverdata[0].driverid
      const query =
        "INSERT INTO users ( username,password, email ,role,driverid ) VALUES ($1, $2, $3, $4,$5)";
      const values = [username, userpassword, useremail, Role, dt];
      const rows = await pool.query(query, values);
      const count = rows.rowCount;

      if (count === 1) {
        console.log("Successfully registered");
        return NextResponse.json(
          { message: "Data inserted successfully" },
          { status: 200 }
        );
      }
    }

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 200 }
    );


  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

