import { NextResponse } from 'next/server'
import { getLearningModules } from '@/lib/cosmic'

export async function GET() {
  try {
    const modules = await getLearningModules()
    return NextResponse.json(modules)
  } catch (error) {
    console.error('Error fetching modules:', error)
    return NextResponse.json([], { status: 500 })
  }
}