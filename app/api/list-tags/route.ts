import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from 'next/server'
import axios, { AxiosError } from 'axios'

export async function GET() {
  try {
    const response = await axios.get('https://content.pintu.co.id/market-tags?language.name=ID&_sort=order:ASC')
 
  return NextResponse.json(response.data)
  
  } catch (err) {
    const error = err as AxiosError
    const error_response = {
      status: 400,
      message: error.message,
    };
    return new NextResponse(JSON.stringify(error_response), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}