const { NotImplementedError } = require("../extensions");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 *
 * read next article https://habr.com/ru/post/140820/
 */
class VigenereCipheringMachine {
  _charCodeA = 65; // result of 'A'.charCodeAt()
  _charCodeZ = 90; // result of 'Z'.charCodeAt()
  _incorrectMessage = "Incorrect arguments!";

  constructor(isDirectmachine = true) {
    this.isDirectmachine = isDirectmachine;
  }

  getReverseCipher(cipher) {
    let reverseCipher = "";

    for (let i = cipher.length - 1; i >= 0; i--) {
      reverseCipher += cipher[i];
    }

    return reverseCipher;
  }

  encrypt(message, key) {
    const encryptText = this.getEncryptOrDecrypt(message, key);

    return this.isDirectmachine
      ? encryptText
      : this.getReverseCipher(encryptText);
  }

  decrypt(encryptedMessage, key) {
    const decryptText = this.getEncryptOrDecrypt(encryptedMessage, key, false);

    return this.isDirectmachine
      ? decryptText
      : this.getReverseCipher(decryptText);
  }

  getEncryptOrDecrypt(text, key, isCipher = true) {
    if (!text || !key) {
      throw new Error(this._incorrectMessage);
    }

    text = text.toUpperCase();
    key = key.padEnd(text.length, key).toUpperCase();

    let encryptCipher = "";

    for (let i = 0; i < text.length; i++) {
      const letter = text[i];
      const letterCharCode = letter.charCodeAt();

      if (
        letterCharCode < this._charCodeA ||
        letterCharCode > this._charCodeZ
      ) {
        encryptCipher += letter;
        key = key.substring(0, i) + letter + key.substring(i);

        continue;
      }

      const k = key[i].charCodeAt() - this._charCodeA;

      if (isCipher) {
        const p = letterCharCode - this._charCodeA;

        const c = (p + k) % 26;

        encryptCipher += String.fromCharCode(this._charCodeA + c);
      }

      if (!isCipher) {
        const c = letterCharCode - this._charCodeA;

        const p = (c - k + 26) % 26;

        encryptCipher += String.fromCharCode(this._charCodeA + p);
      }
    }

    return encryptCipher;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
