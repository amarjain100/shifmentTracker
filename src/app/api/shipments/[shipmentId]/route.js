import pool from "../../../../database/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  console.log(params);
  const { shipmentId } = params;
  const query = "SELECT * FROM shipments  WHERE shipmentId = $1";
  const result = await pool.query(query, [shipmentId]);
  const shipment = result.rows;
  console.log(shipment, "shipmentreceived");
  return NextResponse.json(shipment);
}

export async function PUT(request , {params}) {
    let data = await request.json();
    console.log(data)
  try {
      const { shipmentId } = params;
      console.log(shipmentId)
    const {
      customername,
      destinationaddress,
      shipmentstatus,
      assigneddriverid,
      planneddeliverydate,
      actualdeliverydate,
      } = data;
    const query =
      "UPDATE shipments SET customername = $1, destinationaddress = $2, shipmentstatus = $3, assigneddriverid = $4, planneddeliverydate = $5, actualdeliverydate = $6 WHERE shipmentId = $7";
    const result = await pool.query(query, [
      customername,
      destinationaddress,
      shipmentstatus,
      assigneddriverid,
      planneddeliverydate,
      actualdeliverydate,
      shipmentId,
    ]);
            console.log(result )

    const count = result.rowCount;
    console.log(count);
    if (count === 1) {
      console.log("Successfully updated");
      return NextResponse.json(
        { message: "Shipment updated successfully" },
        { status: 200 }
      );
    } else {
      console.log("else");
      return NextResponse.json(
        { message: "Updating More rows" },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
