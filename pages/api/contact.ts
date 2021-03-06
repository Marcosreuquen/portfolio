import type { NextApiRequest, NextApiResponse } from "next";
import { validateBodySchema } from "controllers/yupValidator";
import { sendContactEmail } from "controllers/email";
import * as yup from "yup";

const bodySchema = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    name: yup.string().required(),
    comments: yup.string().required(),
  })
  .noUnknown(true)
  .strict();

async function contact(req: NextApiRequest, res: NextApiResponse) {
  const mailSended = await sendContactEmail(req.body);
  if (mailSended instanceof Error) res.status(400).send({ ok: false });
  res.status(200).send({ ok: true });
}

//name, comment, email
export default validateBodySchema(bodySchema, contact);
