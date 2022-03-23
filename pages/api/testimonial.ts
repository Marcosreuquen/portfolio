import type { NextApiRequest, NextApiResponse } from "next";
import { uploadTestimonial } from "controllers/contentful";
import { validateBodySchema } from "controllers/yupValidator";
import * as yup from "yup";

const bodySchema = yup
  .object()
  .shape({
    linkedin: yup.string().required(),
    name: yup.string().required(),
    comments: yup.string().required(),
  })
  .noUnknown(true)
  .strict();

async function testimonial(req: NextApiRequest, res: NextApiResponse) {
  const mailSended = await uploadTestimonial(req.body);
  if (mailSended instanceof Error) res.status(400).send({ ok: false });
  res.status(200).send({ ok: true });
}

export default validateBodySchema(bodySchema, testimonial);
