"use strict";

// BasicError File Using for Catch All Error
class BasicError {
  constructor(dataSync, codeError) {
    this.dataSync = dataSync;
    this.codeError = codeError;
  }
  log() {
    return console.log(
      `Error: [${this.dataSync}], and Code Error: [${this.codeError}]`
    );
  }
}

class CatchError extends BasicError {
  constructor(dataSyncReturn, codeErrorReturn) {
    super(dataSyncReturn, codeErrorReturn);
  }
}

module.exports = {
  CatchError,
};
