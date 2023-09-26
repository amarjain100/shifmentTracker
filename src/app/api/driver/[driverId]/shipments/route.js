import { NextResponse } from "next/server";
import pool from "../../../../database/db";


export async function GET(request , {params}) {
    console.log(params);
    return NextResponse.json({
        message: "user tasks"
    })
}