import * as contentful from "contentful-management";

const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_API_KEY || "",
});

export function uploadTestimonial({
  name,
  linkedin,
  comments,
}: {
  name: string;
  linkedin: string;
  comments: string;
}) {
  return client
    .getSpace("c46xwnyuulfo")
    .then((space: any) => space.getEnvironment("master"))
    .then((environment: any) =>
      environment.createEntry("testimonials", {
        fields: {
          name: {
            en: name,
          },
          ref: {
            en: linkedin,
          },
          quote: {
            en: comments,
          },
        },
      })
    )
    .then((entry: any) => {
      return entry;
    })
    .catch(console.error);
}
