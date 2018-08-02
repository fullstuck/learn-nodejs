const PI = Math.PI;

const shape = {
    squareArea: side => Math.pow(side, 2),
    squarePerimeter: side => side * 4,
    rectangleArea: (length, width) => length * width,
    rectanglePerimeter: (length, width) => (length * 2) + (width * 2),
    circleArea: (radius) => PI * Math.pow(radius, 2),
    circleCircumference: (radius) => 2 * PI * radius,
    cubeArea: side => 6 * Math.pow(side, 2),
    cubeVolume: side => Math.pow(side, 3),
    cylinderArea: (radius, height) => 2 * PI * radius * (height + radius),
    cylinderVolume: (radius, height) => PI * Math.pow(radius, 2) * height
};

module.exports = shape;