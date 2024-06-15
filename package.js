Package.describe({
  name: 'carlosalvidrez:accounts-apple',
  version: '4.0.1-beta',
  summary: 'OAuth2 for Sign in with Apple - fork from bigowl',
  git: 'https://github.com/carlosalvidrez/accounts-apple',
  documentation: 'README.md',
});

Package.onUse(api => {
  api.versionsFrom(['1.8.1', '2.3']);
  api.use(['ecmascript']);
  api.use('accounts-base@3.0.0-rc300.4', ['client', 'server']);
  api.imply('accounts-base@3.0.0-rc300.4', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('carlosalvidrez:apple-oauth@4.0.1-beta');
  api.imply('carlosalvidrez:apple-oauth@4.0.1-beta');
  api.use(
    ['accounts-ui'],
    ['client', 'server'],
    {weak: true},
  );
  api.addFiles('notice.js');
  api.addFiles('apple.js');
});
