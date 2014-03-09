
var assert = require('assert');
var Metalsmith = require('metalsmith');
var prompt = require('..');

describe('metalsmith-prompt', function(){
  it('should prompt for strings and booleans', function(done){
    var m = Metalsmith('test/fixture')
      .use(prompt({ string: 'string', boolean: 'boolean' }));
    m.build(function(err){
      if (err) return done(err);
      var data = m.metadata();
      assert.equal(typeof data.string, 'string');
      assert.equal(typeof data.boolean, 'boolean');
      done();
    });
  });
});