const path = require('path');
const fs = require('fs');

const srcFolder = path.join(__dirname, 'src/js/components');
const components = fs.readdirSync(srcFolder);

const files = [];
const entries = {};
components.forEach(component => {
  const name = component.split('.')[0];
  if (name.length === 0) return;
  const file = `./src/js/components/${name}`;
  console.log(`Found component ${name}..`);
  files.push(file);
  entries[name] = file;
});

module.exports = {
  entry: entries,
  devtool: 'source-map',
  output: {
    filename: '[name].js',
    path: './dist/components/',
    libraryTarget: 'commonjs2',
  },
  externals(context, request, callback) {
    // Do not treat icon files as external
    if (files.indexOf(request) > -1) {
      return callback(null, false);
    }
    // Treat all other files as external
    return callback(null, true);
  },
  module: {
    loaders: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'src/js'),
      query: {
        presets: ['airbnb']
      }
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};