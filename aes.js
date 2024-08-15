"use strict";
const aes256 = require("./aes256");
const config = require("./config");

class Aes {
  static crypt(str) {
    const key = config.crypto.aes.key;
    var cipher = aes256.createCipher(key);
    return cipher.encrypt(str.toString());
  }

  static decrypt(str) {
    const key = config.crypto.aes.key;
    var cipher = aes256.createCipher(key);
    return cipher.decrypt(str);
  }
}

module.exports = Aes;
