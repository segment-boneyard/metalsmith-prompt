
var extend = require('extend');
var prompt = require('prompt-for');

/**
 * Expose `plugin`.
 */

module.exports = plugin;

/**
 * Metalsmith plugin to prompt for a `schema` of responses in the CLI and then
 * attach them to the global metadata.
 *
 * @param {Object} schema
 * @param {Object} options (optional)
 *   @property {String} color
 * @return {Function}
 */

function plugin(schema, options){
  return function(files, metalsmith, fn){
    prompt(schema, options, function(err, answers){
      if (err) return fn(err);
      extend(metalsmith.metadata(), answers);
      fn();
    });
  };
}