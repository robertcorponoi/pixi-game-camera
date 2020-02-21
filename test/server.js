'use strict'

const app = require('http').createServer(handler);
const url = require('url');
const path = require('path');
const fs = require('fs');
const port = 8888;

const contentTypes = {
  html: 'text/html',
  css: 'text/css',
  js: 'text/javascript',
  png: 'image/png',
  json: 'application/json',
  m4a: 'audio/m4a',
  txt: 'text/plain',
  mp4: 'video/mp4'
};

app.listen(port);
console.log(`Static file server running at http://localhost:${port}/\nCTRL + C to shutdown`);

/**
 * Handle all static page requests made to the http server by checking
 * if the files exist and assigning the correct content type headers
 * before serving them.
 * 
 * @param {Object} req - The http request object.
 * @param {Object} res - The http response object.
 */
async function handler(req, res) {
  const uri = url.parse(req.url).pathname;
  let filename = path.join(process.cwd(), uri);

  try {
    let fileExists = await checkFileExistsAysnc(filename);
    if (fileExists.isDirectory()) filename = `${filename}\\index.html`;

    let readFile = await readFileAsync(filename);

    let headers = {};
    let contentType = contentTypes[path.extname(filename).replace(".", "")];
    headers['Content-Type'] = contentType;

    res.writeHead(200, headers);
    res.write(readFile, 'binary');
    res.end();
  } catch (err) {
    returnBadRequest(res, 400, err);
  }
}

/**
 * Simply wraps fs.stat in a promise for asynchronous operation.
 * Reject does not return any information as the file existing should lead to a 404 anyways.
 * 
 * @param {string} file - The path to a file to check if it exists.
 * @returns {Promise}
 */
const checkFileExistsAysnc = (file) => {
  return new Promise((resolve, reject) => {
    fs.stat(file, (err, stat) => {
      if (err) reject();
      resolve(stat);
    });
  });
}

/**
 * Simply wraps fs.readFile in a promise for asynchronous operation.
 * Just as with exists(), the reject does not return anything as it should lead to a 500 error in use.
 * 
 * @param {string} file - The path to a file to read.
 * @returns {Promise}
 */
const readFileAsync = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "binary", (err, data) => {
      if (err) reject();
      resolve(data);
    });
  });
}

/**
 * A template for bad server requests for issues like file not existing.
 * This automatically sends the bad request and ends it so nothing else needs
 * to be done after this is called.
 * 
 * @param {Object} res - The http response object.
 * @param {number} [code=404] - The http status code associated with the error.
 * @param {Error|string} [err='404 Not Found'] - The error to show on the page, defaults to 404.
 */
const returnBadRequest = (res, code = 404, err = '404 Not Found') => {
  res.writeHead(code, { 'Content-Type': 'text/plain' });
  res.write(`${err}\n`);
  res.end();
  return;
}