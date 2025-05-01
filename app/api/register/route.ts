import bcrypt from 'bcrypt'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';
import prismadb from "../../../lib/prismadb";

export async function POST(request: Request) {
   
    try {
        const {email, name, password} = await request.json();

        // checking if email exists before registering
        const exisitingUser = await prismadb.user.findUnique({
            where: {
                email,
            }
        });

        // if existinguser is true, return error message
        if (exisitingUser) {
           return NextResponse.json({error: 'Email taken'}, {status: 422})
        }

        // hash user password using bcrypt
        const hashedPassword = await bcrypt.hash(password, 12);

        // creating new user with the details sent and validated
        const user = await prismadb.user.create({
            data: {
                email, name, hashedPassword, image: '', emailVerified: new Date(),
            }

            
        })


        // returing a successful response of user details
        return NextResponse.json(user, {status: 200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({error: "Something went wrong"}, {status: 400});
    }
}