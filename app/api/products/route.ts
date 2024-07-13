import { NextResponse, NextRequest } from "next/server";
import axios from "axios";

export async function GET(request: NextRequest) {
  const apiKey = process.env.NEXT_PUBLIC_TIMBU_CLOUD_API_EKY;
  const appId = process.env.NEXT_PUBLIC_TIMBU_CLOUD_APP_ID;
  const organizationId = process.env.NEXT_PUBLIC_TIMBU_CLOUD_ORGANIZATION_ID;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  // Extract page and size from the request URL
  const url = new URL(request.url);
  const page = url.searchParams.get("page") || "1"; // Default to page 1 if not provided
  const size = url.searchParams.get("size") || "10"; // Default to 10 items per page if not provided

  try {
    const response = await axios.get(
      `${baseUrl}/products?organization_id=${organizationId}&reverse_sort=false&page=${page}&size=${size}&Appid=${appId}&Apikey=${apiKey}`
    );

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json((error as any).response.data, {
      status: (error as any).response.status,
    });
  }
}
