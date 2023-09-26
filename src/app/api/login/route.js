import { NextRequest, NextResponse } from "next/server";
import pool from "../../../database/db";




// login
export async function POST(request) {
  let data = await request.json();
  console.log(data);
  try {

      const { email,password} = data;
    
    const query =
      "SELECT * FROM users where email=$1 and password=$2 ";
    const values = [ email , password];
      const rows = await pool.query(query, values);
      const user = rows.rows;
      // console.log(rows)
      console.log(user , "server user")
    const count = user.length;
    console.log(count)
// console.log({username:user[0].username,role:user[0].role},"kokok")
    if (count >= 1) {
      console.log({username:user[0].email,role:user[0].role});
return NextResponse.json(
              {
                data: {UserId:user[0].userid,username:user[0].username,role:user[0].role,DriverId:user[0].driverid},
                result: "Login Successfully",
                success: true,
                status:201
  },

          
   ) }

  } catch (error) {
    console.error("Error login user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

