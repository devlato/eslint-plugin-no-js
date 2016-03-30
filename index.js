'use strict';

var path = require('path');

module.exports = {
  rules: {
    'no-js': function(context) {
      return {
        Program: function(node) {
          if (path.extname(context.getFilename()).match(/jsx?$/)) {
            context.report(node, 'You are attempting to use JavaScript. U MAD?');
          }
        }
      };
    },
  },
};
