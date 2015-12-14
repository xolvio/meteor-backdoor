describe('xolvio/backdoor', function () {
  it('executes the passed code on the server', function () {
    // We set some server state that we return in our function,
    // to verify that the function was executed in the server context.
    global.foo = 'bar';

    const myFunction = function (globalToReturn) {
      return global[globalToReturn];
    };
    const response = Meteor.call('xolvio/backdoor', myFunction.toString(), ['foo']);

    expect(response).toEqual({
      value: 'bar'
    });
  });

  it('returns the error when one happens', function () {
    const myFunction = function () {
      throw new Error('fire')
    };
    const response = Meteor.call('xolvio/backdoor', myFunction.toString());

    expect(response).toEqual({
      error: jasmine.objectContaining({
        message: 'Error: fire'
      })
    });
  });
})
