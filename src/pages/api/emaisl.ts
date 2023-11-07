import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method == "POST") {
    res.status(201).send({})
  }
}