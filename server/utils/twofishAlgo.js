const twofish = require('twofish').twofish()

function encryptTwofish(text, key) {
    const keyBuffer = Buffer.alloc(32);
    keyBuffer.write(key, 'utf-8');
    const plaintextBuffer = Buffer.from(text, 'utf-8');


    const encrypted = twofish.encrypt(keyBuffer, plaintextBuffer);
    return Buffer.from(encrypted).toString("base64")
}

function decryptTwofish(encryptedText = "", key) {
    encryptedText = Buffer.from(encryptedText, "base64")
    const keyBuffer = Buffer.alloc(32);
    keyBuffer.write(key, 'utf-8');
    const encryptedBuffer = Buffer.from(encryptedText, 'hex');

    const decrypted = twofish.decrypt(keyBuffer, encryptedBuffer);
    return Buffer.from(decrypted).toString("utf-8")
}

module.exports = {
    encryptTwofish, decryptTwofish
}