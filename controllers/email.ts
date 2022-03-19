import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function sendContactEmail(message: any) {
  return await sgMail.send({
    to: "marcosreuquendiaz@gmail.com", // Change to your recipient
    from: "marcosreuquendiaz@gmail.com", // Change to your verified sender
    subject: `Contacto nuevo en web Marcos Reuquén`,
    html: `
    <!DOCTYPE html>
    <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
        <style type="text/css">
          body,
          p,
          div {
            font-family: arial, helvetica, sans-serif;
            font-size: 14px;
          }
          body {
            color: #000000;
          }
          body a {
            color: #1188e6;
            text-decoration: none;
          }
          p {
            margin: 0;
            padding: 0;
          }
        </style>
      </head>
      <body>
        <div
          style="
            background-color: #5c63d7;
            font-family: courier, monospace;
            font-size: 60px;
            height: 100px;
          "
        ></div>
        <div>
          <h1 style="text-align: center">Nuevo mensaje de:</h1>
          <h2 style="text-align: center">${message.name}</h2>
        </div>
        <div>
          <h1 style="text-align: center; margin-top: 50px; margin-bottom: 50px">
            <span
              style="
                color: #5c63d7;
                font-family: Roboto, monospace;
                font-size: 60px;
                font-weight: 700;
              "
            >
              <strong>${message.comments}</strong>
              <div
              style="
                color: #5c63d7;
                font-family: Roboto, monospace;
                font-size: 20px;
                font-weight: 400;
              "
              >
              </div>
              <a href="mailto:${message.email}">Responder</a>
            </span>
          </h1>
        </div>
        <div
          style="
            background-color: #5c63d7;
            font-family: courier, monospace;
            font-size: 80px;
            height: 100px;
          "
        ></div>
      </body>
    </html>
    
    `,
  });
}
