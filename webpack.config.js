var path = require('path');
var webpack = require('webpack');

function configurateEntry() {

  if (process.argv.indexOf('--build_all') >= 0) {

    return {
      en: './en_app',
      ua: './ua_app',
      hr: './hr_app'
    };

  } else {

    var obj = {};
    obj[ process.argv[ process.argv.length - 1 ].slice(-2) ] = './' + process.argv[ process.argv.length - 1 ].slice(-2) + '_app';
    return obj;

  }

}

module.exports = {

  entry: configurateEntry(),

  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.[name].js',
  },

  resolve: {
    extensions: ['', '.js'],
  },

  module: {
    loaders: [
      {
        test: [/\.js$/],
        exclude: /(node_modules)/,
        loaders: ['babel?presets[]=react,presets[]=es2015,presets[]=stage-0']
      },
    ],
  }

}