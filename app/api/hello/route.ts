// import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//     name: string
// }

// export default function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<Data>

// ) {
//     res.status(200).json({ name: 'John Doe' })
// }

// app/api/hello/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest): Promise<NextResponse> {
  const response = { name: "John Does" };
  return NextResponse.json(response); // Automatically sets the Content-Type header
}
