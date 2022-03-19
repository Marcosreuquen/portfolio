export type cmd_content_type =
  | "works"
  | "services"
  | "aboutme"
  | "testimonials";

export const contentFetcher = async (type: cmd_content_type) => {
  const url =
    "https://cdn.contentful.com/spaces/c46xwnyuulfo/environments/master/entries?access_token=QEiYcc0Jw2mqa7DQKtErqg5yrRIocdRHjwCAiyz1SMc&content_type=";
  try {
    const content = await (await fetch(url + type)).json();
    if (content.status < 500 && content.status > 399) throw new Error(content);
    return content;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export async function sendMail(message: any) {
  return await fetch("/api/contact", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(message),
  });
}
