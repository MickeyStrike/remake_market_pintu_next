import { NextResponse } from 'next/server'
import axios, { AxiosError } from 'axios'

export async function GET() {
  try {
    const { data } = await axios.get('https://api.pintu.co.id/v2/wallet/supportedCurrencies')
 
  return NextResponse.json({ ... data })
  
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