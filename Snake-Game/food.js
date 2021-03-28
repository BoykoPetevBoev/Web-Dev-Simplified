import { expandSnake, onSnake } from './snake.js';

const EXPANSION_RATE = 1;
const GRID_SIZE = 21
let food = getRandomFoodPosition()
console.log(food);

function updateFood() {
    // console.log(onSnake(food));
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
    }
}

function drawFood(gameBoard) {
    const foodElem = document.createElement('div');
    foodElem.style.gridColumnStart = food.x;
    foodElem.style.gridRowStart = food.y;
    foodElem.classList.add('food');
    gameBoard.appendChild(foodElem);
}

function getRandomFoodPosition(){
    let newFoodPosition 
    while(!newFoodPosition || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}

function randomGridPosition(){
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    }
}

export {
    updateFood,
    drawFood,
    GRID_SIZE
}