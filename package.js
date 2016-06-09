Package.describe({
  name: 'ldk:paymentfont',
  version: '1.1.2',
  summary: 'ldk:paymentfont package',
  documentation: null
});

Package.onUse(function(api) {
  api.addFiles([
    'bower_components/paymentfont/css/paymentfont.css'
  ], 'client');

  api.addAssets([
    'bower_components/paymentfont/fonts/paymentfont-webfont.eot',
    'bower_components/paymentfont/fonts/paymentfont-webfont.svg',
    'bower_components/paymentfont/fonts/paymentfont-webfont.ttf',
    'bower_components/paymentfont/fonts/paymentfont-webfont.woff',
    'bower_components/paymentfont/fonts/paymentfont-webfont.woff2'
  ], 'client');
});
