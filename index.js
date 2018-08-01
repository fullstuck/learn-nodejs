const readline = require('readline');
const shape = require('./lib/shape.js');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question(
    '1. Calculate Square Area \n' +
    '2. Calculate Square Perimeter \n' +
    '3. Calculate Rectangle Area \n' +
    '4. Calculate Rectangle Perimeter \n' +
    '5. Calculate Circle Area \n' +
    '6. Calculate Circle Circumference \n' +
    '7. Calculate Cube Area \n' +
    '8. Calculate Cube Volume \n' +
    '9. Calculate Cylinder Area \n' +
    '10. Calculate Cylinder Volume \n' +
    'Please choose one by enter the number : \n', (answer1) => {
        switch (parseInt(answer1)) {
            case 1:
                r1.question('Please enter the side : ', (side) => {
                    r1.pause();
                    console.log("Result : ", shape.squareArea(parseFloat(side)));
                });
                break;
            case 2:
                r1.question('Please enter the side : ', (side) => {
                    console.log("Result : ", shape.squarePerimeter(parseFloat(side)));
                });
                break;
            case 3:
                r1.question('Please enter the length : ', (length) => {
                    r1.question('Please enter the width : ', (width) => {
                        console.log("Result : ", shape.rectangleArea(length, width));
                    });
                });
                break;
            case 4:
                r1.question('Please enter the length : ', (length) => {
                    r1.question('Please enter the width : ', (width) => {
                        console.log("Result : ", shape.rectanglePerimeter(length, width));
                    });
                });
                break;
            case 5:
                r1.question('Please enter the radius : ', (radius) => {
                    console.log("Result : ", shape.circleArea(radius));
                });
                break;
            case 6:
                r1.question('Please enter the radius : ', (radius) => {
                    console.log("Result : ", shape.circleCircumference(radius));
                });
                break;
            case 7:
                r1.question('Please enter the side : ', (side) => {
                    console.log("Result : ", shape.cubeArea(parseFloat(side)));
                });
                break;
            case 8:
                r1.question('Please enter the side : ', (side) => {
                    console.log("Result : ", shape.cubeVolume(parseFloat(side)));
                });
                break;
            case 9:
                r1.question('Please enter the radius : ', (radius) => {
                    r1.question('Please enter the height : ', (height) => {
                        console.log("Result : ", shape.cylinderArea(radius, height));
                    });
                });
                break;
            case 10:
                r1.question('Please enter the radius : ', (radius) => {
                    r1.question('Please enter the height : ', (height) => {
                        console.log("Result : ", shape.cylinderVolume(radius, height));
                    });
                });
                break;
            default:
                console.log("Wrong number");
        }
    });