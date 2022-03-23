import Swal from "sweetalert2";
import type { SweetAlertIcon } from "sweetalert2";

export type cmd_content_type =
  | "works"
  | "services"
  | "aboutme"
  | "testimonials";

export type localeString = "es" | "en";

export const contentFetcher = async (
  type: cmd_content_type,
  locale: localeString
) => {
  const url = `https://cdn.contentful.com/spaces/c46xwnyuulfo/environments/master/entries?access_token=QEiYcc0Jw2mqa7DQKtErqg5yrRIocdRHjwCAiyz1SMc&content_type=${type}&locale=${locale}`;
  try {
    const content = await (await fetch(url)).json();
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

export async function uploadTestimonial(message: any) {
  const res = await fetch("/api/testimonial", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(message),
  });
  console.log(res);
  return res;
}

export function fire(title: string, icon: SweetAlertIcon) {
  Swal.fire({
    title,
    icon,
    background: "#2e2e2e",
    color: "#f1f1f1",
    timer: 3000,
    showConfirmButton: false,
    timerProgressBar: true,
  });
}
