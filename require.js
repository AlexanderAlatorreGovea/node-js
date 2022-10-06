const { request } = require("https");

const request = request("https://www.google.com", (res, req) => {
  res.on("data", (chunk) => {
    console.log(`Data chunk ${chunk}`);
  });

  res.on("end", () => {
    console.log("no more data");
  });
});

// triggers the request to be sent
request.end();
