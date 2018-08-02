// Import library
const readline = require('readline');
const shape = require('./lib/shape.js');
const fetch = require('node-fetch');

// -----------------------------------------------------------------------------------
// Declare Variable
const mainMenu =
    '             ++++++++++++++++++++++++++++++++++++++++++ \n' +
    '             ++++++++++++ SHAPE CALCULATOR ++++++++++++ \n' +
    '             ++++++++++++++++++++++++++++++++++++++++++ \n \n' +
    '                   1. Calculate Square Area \n' +
    '                   2. Calculate Square Perimeter \n' +
    '                   3. Calculate Rectangle Area \n' +
    '                   4. Calculate Rectangle Perimeter \n' +
    '                   5. Calculate Circle Area \n' +
    '                   6. Calculate Circle Circumference \n' +
    '                   7. Calculate Cube Area \n' +
    '                   8. Calculate Cube Volume \n' +
    '                   9. Calculate Cylinder Area \n' +
    '                  10. Calculate Cylinder Volume \n' +
    '             ------------------------------------------- \n' +
    '                  11. Show my Github Followers \n' +
    '             ------------------------------------------- \n' +
    '                            0. Exit \n \n' +
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
    backToMenu();
};

const backToMenu = () => {
    r1.question("Back to main menu ? (Y/N) ", (answer) => {
        if (answer.toLowerCase() === 'y') {
            openQuestion();
        } else {
            closeQuestion();
        };
    });
};

const getFollowers = () => {
    const url = 'https://api.github.com/users/alifraher/followers';
    fetch(url)
        .then(response => response.json())
        .then(showFollowers);
}

const showFollowers = (data) => {
    data.forEach(item => {
        console.log(item.login);
    })
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
            case 11:
                getFollowers();
                setTimeout(backToMenu, 1500);
                break;
            case 0:
                closeQuestion();
                break;
            default:
                console.log("Wrong input!");
                backToMenu();
        }
    });
}

// -----------------------------------------------------------------------------------
// Calling Function
openQuestion();