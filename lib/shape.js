const phi = Math.PI;

const shape = {
    squareArea: (side) => side * side,
    squarePerimeter: (side) => side * 4,
    rectangleArea: (length, width) => length * width,
    rectanglePerimeter: (length, width) => (length * 2) + (width * 2),
    circleArea: (radius) => phi * (radius * radius),
    circleCircumference: (radius) => 2 * phi * radius,
    cubeArea: (side) => 6 * (side * side),
    cubeVolume: (side) => side * side * side,
    cylinderArea: (radius, height) => 2 * phi * radius * (height + radius),
    cylinderVolume: (radius, height) => phi * (radius * radius) * height
};

module.exports = shape;