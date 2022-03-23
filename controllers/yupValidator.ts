import type { NextApiRequest, NextApiResponse } from "next";

export function validateBodySchema(schema: any, cb: Function) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    try {
      await schema.validate(req.body);
      cb(req, res);
    } catch (error) {
      res.status(422).send({ field: "body", message: error });
    }
  };
}
