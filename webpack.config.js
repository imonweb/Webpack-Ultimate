
const path = require('path')

module.exports = {
  mode: "development",
  entry: { 
    file: "./src/index.js" },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devServer: {
    before: function(dist, server){
      server._watch('./dist/*.html')
    },
    contentBase: path.join(__dirname, 'dist'),
    port: 3000
  },
};

