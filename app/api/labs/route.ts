import { NextResponse } from 'next/server'
import { getLabExercises } from '@/lib/cosmic'

export async function GET() {
  try {
    const labs = await getLabExercises()
    return NextResponse.json(labs)
  } catch (error) {
    console.error('Error fetching labs:', error)
    return NextResponse.json([], { status: 500 })
  }
}