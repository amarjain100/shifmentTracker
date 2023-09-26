import pool from "@/database/db";
import { NextResponse } from "next/server";

//--GET SHIPMENTS---//
export async function GET() {
  const query = "SELECT * FROM shipments";
  const result = await pool.query(query);
  const shipments = result.rows;
  console.log(shipments, "shipmentreceived");
  return NextResponse.json(shipments);
}

//-----POST OR ADD SHIPMENTS-------//
export async function POST(request) {
    let data = await request.json();
    console.log(data);
  try {
    const {
      
      customername,
      destinationaddress,
      shipmentstatus,
      assigneddriverid,
      planneddeliverydate,
      actualdeliverydate,
    } = data;
    const query =
      "INSERT INTO shipments (  customername, destinationaddress, shipmentstatus ,assigneddriverid, planneddeliverydate,actualdeliverydate) VALUES ($1, $2, $3, $4, $5, $6)";
    const values = [
      
      customername,
      destinationaddress,
      shipmentstatus,
      assigneddriverid,
      planneddeliverydate,
      actualdeliverydate,
    ];
    const rows = await pool.query(query, values);
      const count = rows.rowCount;
      console.log(count)
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
  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
export async function PUT() {

}
export function DELETE() {}
