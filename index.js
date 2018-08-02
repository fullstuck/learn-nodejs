const readline = require('readline');
const shape = require('./lib/shape.js');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const closeQuestion = () => r1.close();

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
        '11. Exit \n' +
        'Please choose one by enter the number : \n', (answer1) => {
            switch (parseInt(answer1)) {
                case 1:
                    r1.question('Please enter the side :', (side) => {
                        const result = Math.round(shape.squareArea(parseFloat(side)) * 100) / 100;
                        console.log("Result :", result);
                        tryAgain();
                    });
                    break;
                case 2:
                    r1.question('Please enter the side :', (side) => {
                        const result = Math.round(shape.squarePerimeter(parseFloat(side)) * 100) / 100;
                        console.log("Result :", result);
                        tryAgain();
                    });
                    break;
                case 3:
                    r1.question('Please enter the length :', (length) => {
                        r1.question('Please enter the width :', (width) => {
                            const result = Math.round(shape.rectangleArea(length, width) * 100) / 100;
                            console.log("Result :", result);
                            tryAgain();
                        });
                    });
                    break;
                case 4:
                    r1.question('Please enter the length :', (length) => {
                        r1.question('Please enter the width :', (width) => {
                            const result = Math.round(shape.rectanglePerimeter(length, width) * 100) / 100;
                            console.log("Result :", result);
                            tryAgain();
                        });
                    });
                    break;
                case 5:
                    r1.question('Please enter the radius :', (radius) => {
                        const result = Math.round(shape.circleArea(radius) * 100) / 100;
                        console.log("Result :", result);
                        tryAgain();
                    });
                    break;
                case 6:
                    r1.question('Please enter the radius :', (radius) => {
                        const result = Math.round(shape.circleCircumference(radius) * 100) / 100;
                        console.log("Result :", result);
                        tryAgain();
                    });
                    break;
                case 7:
                    r1.question('Please enter the side :', (side) => {
                        const result = Math.round(shape.cubeArea(side) * 100) / 100;
                        console.log("Result :", result);
                        tryAgain();
                    });
                    break;
                case 8:
                    r1.question('Please enter the side :', (side) => {
                        const result = Math.round(shape.cubeVolume(side) * 100) / 100;
                        console.log("Result :", result);
                        tryAgain();
                    });
                    break;
                case 9:
                    r1.question('Please enter the radius :', (radius) => {
                        r1.question('Please enter the height :', (height) => {
                            const result = Math.round(shape.cylinderArea(radius, height) * 100) / 100;
                            console.log("Result :", result);
                            tryAgain();
                        });
                    });
                    break;
                case 10:
                    r1.question('Please enter the radius :', (radius) => {
                        r1.question('Please enter the height :', (height) => {
                            const result = Math.round(shape.cylinderVolume(radius, height) * 100) / 100;
                            console.log("Result :", result);
                            tryAgain();
                        });
                    });
                    break;
                case 11:
                    closeQuestion();
                    break;
                default:
                    console.log("Wrong input!");
                    tryAgain();
            }
        });
}

openQuestion();