import { NextRequest, NextResponse } from "next/server";
import pool from "../../../database/db";




///GET MULTIPLE  driver
export async function GET() {
    const query = `SELECT * FROM drivers `;
  const result = await pool.query(query);
  const user = result.rows;
  console.log(user, "driverreceived");
  return NextResponse.json(user);
}
