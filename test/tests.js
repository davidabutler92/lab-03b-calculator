import {add} from '../app.js';

const test = QUnit.test;

test('test add function', function(assert) {
  const x = 4;
  const y = 5;
  const expected = 9;
  const total = add(x, y);
  assert.equal(total, expected);
});