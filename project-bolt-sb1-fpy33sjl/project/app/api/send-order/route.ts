import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import { sendOrderEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { clientName, email, phone, vinPlate, vehicleType, plan, price } = data;

    if (!clientName || !email || !phone || !vinPlate || !vehicleType || !plan || !price) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const connection = await pool.getConnection();

    try {
      await connection.execute(
        "INSERT INTO orders (client_name, email, phone, vin_plate, vehicle_type, plan, price, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, NOW())",
        [clientName, email, phone, vinPlate, vehicleType, plan, price]
      );
    } finally {
      connection.release();
    }

    const emailSent = await sendOrderEmail(
      clientName,
      email,
      phone,
      vinPlate,
      vehicleType,
      plan,
      Number(price)
    );

    return NextResponse.json({
      success: true,
      emailSent,
      message: "Order saved successfully.",
    });
  } catch (error) {
    console.error("Error in send-order route:", error);
    return NextResponse.json(
      { error: String(error), stack: (error as any)?.stack },
      { status: 500 }
    );
  }
}
