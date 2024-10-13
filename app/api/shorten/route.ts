import { NextResponse, NextRequest } from 'next/server';
import { nanoid } from 'nanoid';
import prisma from '@/lib/db';

export async function POST(request: NextRequest)
{
    // Parse the JSON body
    const { url } = await request.json();
    // Generate a random 8-character string
    const shortCode = nanoid(8);

    // Create a new URL in the database
    const shortenedUrl = await prisma.url.create({
        data: {
            originalUrl: url,
            shortCode
        }
    });

    return NextResponse.json({ shortCode: shortenedUrl.shortCode })
}
