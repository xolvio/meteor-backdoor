Package.describe({
  name: 'xolvio:backdoor',
  summary: 'Runs arbitrary code on server',
  version: '0.2.0-rc.0',
  debugOnly: true
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.3-beta.11');
  api.use('ecmascript', 'server');
  api.use('check', 'server');
  api.use('modules', 'server');
  api.addFiles('server.js', 'server');
});

Package.onTest(function(api) {
  api.versionsFrom('METEOR@1.3-beta.11');
  api.use('xolvio:backdoor');
  api.use('ecmascript');
  api.use('sanjo:jasmine@0.20.3');

  api.addFiles('tests/xolvio_backdoor.js', 'client');
});
