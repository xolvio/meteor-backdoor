/* globals meteorInstall: false */

var vm = Npm.require('vm');

Meteor.methods({
  'xolvio/backdoor': function (func, args) {
    check(func, String);
    check(args, Match.Optional(Array));

    try {
      const preparedFunc = vm.runInThisContext(
        '(function (require) { return (' + func + '); })'
      ).call(null, meteorInstall());
      return {
        value: preparedFunc.apply(global, args)
      };
    } catch (error) {
      return {
        error: {
          message: error.toString(),
          stack: error.stack ? error.stack.toString() : '',
          code: func
        }
      };
    }
  }
});
