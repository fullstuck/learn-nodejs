// Import library
const readline = require('readline');
const shape = require('./lib/shape.js');

// -----------------------------------------------------------------------------------
// Declare Variable
const mainMenu =
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
    '0. Exit \n' +
    'Please choose one by enter the number : ';

// -----------------------------------------------------------------------------------
// Function
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const closeQuestion = () => r1.close();

const calculate = (shape) => {
    const result = Math.round(shape * 100) / 100;
    console.log("Result :", result);
    tryAgain();
};

const tryAgain = () => {
    r1.question("Try again ?(Y/N)", (answer) => {
        if (answer.toLowerCase() == 'y') {
            openQuestion();
        } else {
            closeQuestion();
        };
    });
};

const openQuestion = () => {
    r1.question(mainMenu, (answer1) => {
        switch (parseInt(answer1)) {
            case 1:
                r1.question('Please enter the side : ', (side) => {
                    calculate(shape.squareArea(parseFloat(side)));
                });
                break;
            case 2:
                r1.question('Please enter the side : ', (side) => {
                    calculate(shape.squarePerimeter(parseFloat(side)));
                });
                break;
            case 3:
                r1.question('Please enter the length : ', (length) => {
                    r1.question('Please enter the width : ', (width) => {
                        calculate(shape.rectangleArea(length, width));
                    });
                });
                break;
            case 4:
                r1.question('Please enter the length : ', (length) => {
                    r1.question('Please enter the width : ', (width) => {
                        calculate(shape.rectanglePerimeter(length, width));
                    });
                });
                break;
            case 5:
                r1.question('Please enter the radius : ', (radius) => {
                    calculate(shape.circleArea(radius));
                });
                break;
            case 6:
                r1.question('Please enter the radius : ', (radius) => {
                    calculate(shape.circleCircumference(radius));
                });
                break;
            case 7:
                r1.question('Please enter the side : ', (side) => {
                    calculate(shape.cubeArea(side));
                });
                break;
            case 8:
                r1.question('Please enter the side : ', (side) => {
                    calculate(shape.cubeVolume(side));
                });
                break;
            case 9:
                r1.question('Please enter the radius : ', (radius) => {
                    r1.question('Please enter the height : ', (height) => {
                        calculate(shape.cylinderArea(radius, height));
                    });
                });
                break;
            case 10:
                r1.question('Please enter the radius : ', (radius) => {
                    r1.question('Please enter the height : ', (height) => {
                        calculate(shape.cylinderVolume(radius, height));
                    });
                });
                break;
            case 0:
                closeQuestion();
                break;
            default:
                console.log("Wrong input!");
                tryAgain();
        }
    });
}

// -----------------------------------------------------------------------------------
// Calling Function
openQuestion();