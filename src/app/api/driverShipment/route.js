import pool from "@/database/db";
import { NextResponse } from "next/server";

//--GET SHIPMENTS---//
export async function GET() {
  const query = "SELECT * FROM shipments where driver";
  const result = await pool.query(query);
  const shipments = result.rows;
  console.log(shipments, "shipmentreceived");
  return NextResponse.json(shipments);
}