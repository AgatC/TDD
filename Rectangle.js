class Rectangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  isSquare() {
    return this.a != this.b ? false : true;
  }

  getArea() {
    return this.a * this.b
  }

  getPerimeter() {
    return (2 * (this.a + this.b))
  }
}

const rectangle = new Rectangle(13, 7);

module.exports = rectangle;