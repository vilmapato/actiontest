import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from '../../../prisma/client';

const createUserSchema = z.object({
    name: z.string().min(1).max(255),
    email: z.string().min(1).max(255),
})
export async function POST(request:NextRequest) {
    const body =await request.json() as { name: string, email: string };
    const validation = createUserSchema.safeParse(body)
    if (!validation.success) 
        return NextResponse.json(validation.error.errors, {status : 400})

    const newUser = await prisma.user.create({
        data: { name: body.name, email: body.email}
    })
    
}
