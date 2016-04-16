Package.describe({
  name: 'xolvio:backdoor',
  summary: 'Runs arbitrary code on server',
  version: '0.2.0',
  debugOnly: true
});

Package.onUse(function (api) {
  api.versionsFrom('1.3');
  api.use('ecmascript', 'server');
  api.use('check', 'server');
  api.use('modules', 'server');
  api.addFiles('server.js', 'server');
});

Package.onTest(function(api) {
  api.versionsFrom('1.3');
  api.use('xolvio:backdoor');
  api.use('ecmascript');
  api.use('sanjo:jasmine@1.0.1');
  api.use('velocity:html-reporter@0.10.0');

  api.addFiles('tests/xolvio_backdoor.js', 'client');
});
