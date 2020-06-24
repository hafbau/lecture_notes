class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  calcArea() {
    return this.length * this.width
  }
}

// instantiation
const myRect = new Rectangle(5, 6)

console.log('myRect.length :>> ', myRect.length);
console.log('myRect.area() :>> ', myRect.calcArea());


class Square extends Rectangle {
  constructor(size) {
    super(size, size)
  }
}


const mySquare = new Square(5)

console.log('mySquare.length :>> ', mySquare.length);

class Cube extends Square {
  // constructor(size) {
  //   // this.height = size
  //   super(size)
  // }
  // calcArea() {
  //   this.calcArea()
  // }

  calcVolume() {
    return this.calcArea() * this.length
    // return this.length * this.width * this.height
  }
}

const cube = new Cube(10);

console.log('cube.calcVolume() :>> ', cube.calcArea());

// calcArea(3, 4) // No state