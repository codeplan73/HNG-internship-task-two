import { NextResponse, NextRequest } from "next/server";
import axios from "axios";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const apiKey = process.env.NEXT_PUBLIC_TIMBU_CLOUD_API_EKY;
  const appId = process.env.NEXT_PUBLIC_TIMBU_CLOUD_APP_ID;
  const organizationId = process.env.NEXT_PUBLIC_TIMBU_CLOUD_ORGANIZATION_ID;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    const response = await axios.get(
      `${baseUrl}/products/${params.id}?organization_id=${organizationId}&reverse_sort=false&page=1&size=10&Appid=${appId}&Apikey=${apiKey}&&currency_code=USD`
    );

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json((error as any).response.data, {
      status: (error as any).response.status,
    });
  }
}
