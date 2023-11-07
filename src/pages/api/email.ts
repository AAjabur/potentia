import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

type ResponseData = {}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method == "POST") {
    try {
      console.log(req.body);
      const { email } = req.body;
      const newContact = await prisma.contact.create({
        data: {
          email: email
        }
      });

      res.status(201).send({email: newContact.email});
    } catch (err){
      return res.status(400).send({message: err})
    }
  }
  else {
    return res.status(405).json({ message: "Method not allowed" })
  }
}