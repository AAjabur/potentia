import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import validator from "validator"

const prisma = new PrismaClient();

type ResponseData = {}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method == "POST") {
    try {
      const { email } = req.body;
      if (validator.isEmail(email)){
        const newContact = await prisma.contact.create({
          data: {
            email: email
          }
        });
        
        console.log("valid email");
        res.status(201).send({email: newContact.email});
      }
      else {
        console.log("invalid email");
        res.status(400).send({message: "Invalid Email"})
      }

    } catch (err){
      return res.status(400).send({message: err})
    }
  }
  else {
    return res.status(405).json({ message: "Method not allowed" })
  }
}