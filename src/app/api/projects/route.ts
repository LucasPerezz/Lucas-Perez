import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface Skill {
    name: string,
    image: string,
    category: string
}


interface Projects {
    name: string,
    image: string,
    description: string,
    category: string,
    github?: string,
    demo: string,
    skills: Skill[]
}


const prisma = new PrismaClient();

export async function GET(_req: NextRequest) {
    try {
        const projects = await prisma.project.findMany();
        if(projects.length > 0) {
            return NextResponse.json(projects, {status: 200});
        } else {
            return NextResponse.json({msg: "Projects are empty"});
        }
    } catch (error) {
        console.error('Error fetching skills:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    } finally {
        prisma.$disconnect();
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const project = await prisma.project.create({
            data: body
        });
        return NextResponse.json(project, { status: 201 });
    } catch (error) {
        console.error('Error creating project', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}