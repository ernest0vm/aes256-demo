const aes = require("./aes");
const chalk = require("chalk");

// With this script can be encrypt stripe card data for add to user manually.
// remember keep your secrets in secured vaults
// can be run using `node index.js` or `yarn start`

const data = {
  userToken: "tok_1Iil3gCb2TJf3RtWMmsYPaLh",
  cardToken: "card_1Iil3gCb2TJf3RtW8SUiGKbO",
  cardBrand: "Visa",
  cardCountry: "US",
  cardLastFour: "4242",
  cardExpMonth: "12",
  cardExpYear: "2030",
};
const cryptedData = {};

// Show data
console.log("Data to encrypt:\n");
for (const key in data) {
  console.log(`${chalk.green(key)} =>`, data[key]);
}

// Encrypt data
console.log("\nEncrypting data...\n");
for (const key in data) {
  const cr = aes.crypt(data[key]);
  console.log(`${chalk.green(key)} =>`, cr);
  cryptedData[key] = cr;
}

// Decrypt data
console.log("\nDecrypting data...\n");
for (const key in cryptedData) {
  const dc = aes.decrypt(cryptedData[key]);
  console.log(`${chalk.green(key)}:${chalk.yellow(cryptedData[key])} =>`, dc);
}
