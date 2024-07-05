import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(_req: NextRequest) {
    try {
        const skills = await prisma.skill.findMany();
        if (skills.length > 0) {
            return NextResponse.json(skills, { status: 200 });
        } else {
            return NextResponse.json({ message: 'No skills found' }, { status: 404 });
        }
    } catch (error) {
        console.error('Error fetching skills:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        if(body) {
            await prisma.skill.create({
                data: body
            });
            return NextResponse.json({msg: "Skill created"}, {status: 201});
        }
    } catch (error) {
        console.error('Error creating skills:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
