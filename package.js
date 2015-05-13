Package.describe({
  name: 'nerdmed:mutation-observer',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Polyfill for the MutationObservers API - gets you events on attribute chagnes',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/nerdmed/mutation-observer-polyfill.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('mutation-observer.js','client');
});
