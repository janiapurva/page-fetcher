const fs = require('fs');

const url  = process.argv.slice(2).toString();
const localPath = process.argv.slice(3).toString();

// console.log(url);
// console.log(localPath)



const request = require('request');
request(`${url}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the edu homepage.
  console.log(`Downloaded and saved 1235 bytes to ./index.html`);
  
  // console.log(`Downloaded and saved 1235 bytes to ./index.html`);
});


fs.writeFile(`${localPath}`,'data', "utf8", (data) => {
  console.log(data);
  // console.log(`Downloaded and saved 1235 bytes to ./index.html`);
});