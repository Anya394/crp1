import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const userData = req.cookies.get("user")?.value;
  try {
    // Пробуем распарсить JSON, если кука содержит JSON-строку
    const parsedData = userData ? JSON.parse(userData) : null;
    return Response.json(parsedData);
  } catch (e) {
    // Если не JSON, возвращаем как есть
    return Response.json(userData || null);
  }
}