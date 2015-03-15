Package.describe({
  name: 'strikeout:slick',
  version: '1.4.1_1',
  // Brief, one-line summary of the package.
  summary: 'The last carousel you will ever need',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/strikeout/meteor-slick',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');

  api.addFiles('lib/slick.js', 'client');
  api.addFiles('lib/slick.css', 'client');
  api.addFiles('lib/fonts/slick.ttf', 'client');
  api.addFiles('lib/fonts/slick.woff', 'client');

  api.addFiles('lib/slick-theme.css', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('strikeout:slick');
  api.addFiles('strikeout:slick-tests.js');
});
