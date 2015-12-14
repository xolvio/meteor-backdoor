Package.describe({
  name: 'xolvio:backdoor',
  summary: 'Runs arbitrary code on server',
  version: '0.1.1',
  debugOnly: true
});

Package.onUse(function (api) {
  api.addFiles('server.js', 'server');
});
