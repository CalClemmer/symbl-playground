const request = require("request");

const appId =
  "75745468384a657452575961544b42516d7352526864476a466b743849475339";
const appSecret =
  "7a5957525446346951646c654a41364a7a47366f55666c38675433353539576c4c6454353357704455346e684f586336794b534b50516153534d5a6b39476f77";

const authOptions = {
  method: "post",
  url: "https://api.symbl.ai/oauth2/token:generate",
  body: {
    type: "application",
    appId: appId,
    appSecret: appSecret,
  },
  json: true,
};

request(authOptions, (err, res, body) => {
  if (err) {
    console.error("error posting json: ", err);
    throw err;
  }

  console.log(JSON.stringify(body, null, 2));
});
