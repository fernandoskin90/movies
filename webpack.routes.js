const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@src': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.scss']
  }
};
