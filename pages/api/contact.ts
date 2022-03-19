import type { NextApiRequest, NextApiResponse } from "next";
import { sendContactEmail } from "controllers/email";

export default async function contact(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mailSended = await sendContactEmail(req.body);
  if (mailSended instanceof Error) res.status(400).send({ ok: false });
  res.status(200).send({ ok: true });
}
