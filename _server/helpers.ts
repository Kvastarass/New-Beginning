export const wrapInDocument = (content: string) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Server</title>
      <style>
        body {
          padding-top: 20px;
          font-family: Arial, sans-serif;
          margin: 0 auto;
          background-color: #f0f0f0;
          max-width: 800px;
        }
        br {
          content: " ";
          display: block;
          margin-bottom: 10px;
        }
        a {
          color: #007bff;
        }
      </style>
    </head>
    <body>
      ${content.replace(/\n/g, '<br>')}
    </body>
  </html>
  `;
};
