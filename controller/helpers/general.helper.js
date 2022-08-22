const CryptoJS = require("crypto-js");
const config = requiere("config")
/**encrypt password */

exports.encryptPassword = (password) => {
    let secretkey = config.get("secretkeys").cryptojs
    let encryptedPassword = CryptoJS.AES.encrypt(password, secretkey).toString();
    return encryptedPassword
}