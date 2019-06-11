const assert = require('assert');
const rectangle = require('../Rectangle');

// give the test suite a label using describe
describe('rectangle', () => {

  it('isSquare', () => {
    assert.strictEqual(rectangle.isSquare((13, 7)), false);
  });

  it('surface', () => {
    assert.strictEqual(rectangle.getArea(13, 7), 91);
  });

  it('perimeter', () => {
    assert.strictEqual(rectangle.getPerimeter(13, 7), 40);
  });
});