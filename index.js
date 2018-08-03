// Import library
const readline = require('readline');
const fetch = require('node-fetch');
const shape = require('./lib/shape.js');

// -----------------------------------------------------------------------------------
// Declare Variable
const mainMenu = `
        +++++++++++++++++++++++++++++++++++++++++
        +++++++++++ SHAPE CALCULATOR ++++++++++++
        +++++++++++++++++++++++++++++++++++++++++ 
            1. Calculate Square Area
            2. Calculate Square Perimeter
            3. Calculate Rectangle Area
            4. Calculate Rectangle Perimeter
            5. Calculate Circle Area
            6. Calculate Circle Circumference
            7. Calculate Cube Area
            8. Calculate Cube Volume
            9. Calculate Cylinder Area
            10. Calculate Cylinder Volume
        -------------------------------------------
            11. Show my Github Followers
        -------------------------------------------
                    0. Exit 
        Please choose one by enter the number: `;

// -----------------------------------------------------------------------------------
// Function
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const closeQuestion = () => rl.close();

const calculate = (shape) => {
    const result = Math.round(shape * 100) / 100;
    console.log("Result :", result);
    backToMenu();
};

const backToMenu = () => {
    rl.question("Back to main menu ? (Y/N) ", (answer) => {
        if (answer.toLowerCase() === 'y') openQuestion();
        else closeQuestion();
    });
};

const getFollowers = () => {
    const url = 'https://api.github.com/users/alifraher/followers';
    fetch(url)
        .then(response => response.json())
        .then(showFollowers)
        .then(backToMenu);
}

const showFollowers = (data) => {
    data.forEach(item => console.log(item.login))
}

const openQuestion = () => {
    rl.question(mainMenu, (answer1) => {
        switch (parseInt(answer1)) {
            case 0:
                closeQuestion();
                break;
            case 1:
                rl.question('Please enter the side : ', side => {
                    calculate(shape.squareArea(parseFloat(side)));
                });
                break;
            case 2:
                rl.question('Please enter the side : ', side => {
                    calculate(shape.squarePerimeter(parseFloat(side)));
                });
                break;
            case 3:
                rl.question('Please enter the length : ', length => {
                    rl.question('Please enter the width : ', width => {
                        calculate(shape.rectangleArea(length, width));
                    });
                });
                break;
            case 4:
                rl.question('Please enter the length : ', length => {
                    rl.question('Please enter the width : ', width => {
                        calculate(shape.rectanglePerimeter(length, width));
                    });
                });
                break;
            case 5:
                rl.question('Please enter the radius : ', radius => {
                    calculate(shape.circleArea(radius));
                });
                break;
            case 6:
                rl.question('Please enter the radius : ', radius => {
                    calculate(shape.circleCircumference(radius));
                });
                break;
            case 7:
                rl.question('Please enter the side : ', side => {
                    calculate(shape.cubeArea(side));
                });
                break;
            case 8:
                rl.question('Please enter the side : ', side => {
                    calculate(shape.cubeVolume(side));
                });
                break;
            case 9:
                rl.question('Please enter the radius : ', radius => {
                    rl.question('Please enter the height : ', height => {
                        calculate(shape.cylinderArea(radius, height));
                    });
                });
                break;
            case 10:
                rl.question('Please enter the radius : ', radius => {
                    rl.question('Please enter the height : ', height => {
                        calculate(shape.cylinderVolume(radius, height));
                    });
                });
                break;
            case 11:
                getFollowers();
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