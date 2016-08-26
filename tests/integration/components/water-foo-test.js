import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('water-foo', 'Integration | Component | water foo', {
  integration: true
});

test('scott it renders', function(assert) {
  this.render(hbs`{{water-foo}}`);
  assert.equal(this.$(".t-watter").text().trim(), 'Scott');
});
