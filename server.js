var vm = Npm.require('vm');

Meteor.methods({
  'xolvio/backdoor': function (func, args) {
    try {
      return {
        value: vm.runInThisContext('(' + func + ')').apply(global, args)
      };
    } catch (error) {
      return {
        error: {message: error.toString(), stack: error.stack.toString()}
      };
    }
  }
});
