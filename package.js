Package.describe({
  name: 'ldk:paymentfont',
  version: '1.1.2',
  summary: 'Meteor wrapper package for PaymentFont',
  documentation: 'README.md' ,
  git: "https://github.com/logankoester/meteor-paymentfont.git"
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
