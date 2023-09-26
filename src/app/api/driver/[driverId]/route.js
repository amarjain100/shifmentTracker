import { NextResponse } from "next/server";
import pool from "../../../../database/db";

export function DELETE(request, { params }) {
  console.log(request);
  console.log(params);

  return NextResponse.json({
    message: "testing delete",
  });
}

//// get single driver
export async function GET(request, { params }) {
  console.log(params);
  const { driverId } = params;
  const query = "SELECT * FROM shipments  WHERE assigneddriverid = $1";
  const result = await pool.query(query, [driverId]);
  const user = result.rows;
  console.log(user, "userreceived");
  return NextResponse.json(user);
}

// update single driver
export async function PUT(request, { params }) {
    let data = await request.json();
    console.log(data)
  try {
    const { driverId } = params;
      const { username, email,password } = data;
      console.log(username)
    const query =
      "UPDATE users SET username = $1, email = $2, password=$3 WHERE userid = $4;";
    const result = await pool.query(query, [username, email, password, driverId]);
    const count = result.rowCount;
    console.log(count);
    if (count === 1) {
      console.log("Successfully updated");
      return NextResponse.json(
        { message: "Data updated successfully" },
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
