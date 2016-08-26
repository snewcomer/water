import { test } from 'qunit';
import moduleForAcceptance from 'water/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('scott visiting /index', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
