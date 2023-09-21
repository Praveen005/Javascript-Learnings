
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch

//customising .catch() .then()

// overriding original Promise.prototype.then/catch just to add some logs
((Promise) => {
    const originalThen = Promise.prototype.then;
    const originalCatch = Promise.prototype.catch;
  
    Promise.prototype.then = function (...args) {
      console.log("Called .then on %o with arguments: %o", this, args);
      return originalThen.apply(this, args);
    };
    Promise.prototype.catch = function (...args) {
      console.error("Called .catch on %o with arguments: %o", this, args);
      return originalCatch.apply(this, args);
    };
  })(Promise);
  
  // calling catch on an already resolved promise
  Promise.resolve().catch(function XXX() {});
  
  // Logs:
  // Called .catch on Promise{} with arguments: Arguments{1} [0: function XXX()]
  // Called .then on Promise{} with arguments: Arguments{2} [0: undefined, 1: function XXX()]


  