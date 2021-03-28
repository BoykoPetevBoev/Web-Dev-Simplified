import { updateSnake, drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from "./snake.js";
import { updateFood, drawFood, GRID_SIZE } from './food.js';

const gameBoard = document.getElementById('root');
let lastRenderTime = 0;
let gameOver = false;


function main(currentTime) {
    if (gameOver) {

        if (confirm('Game Over')) {
            window.location = '/Snake-Game/'
        }
        return 
    }

    window.requestAnimationFrame(main);
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;

    if (secondSinceLastRender < 1 / SNAKE_SPEED) return
    lastRenderTime = currentTime

    update();
    draw();
}

function update() {
    updateSnake();
    updateFood();
    checkForEnd();
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkForEnd() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

function outsideGrid(position) {
    return (
        position.x < 1 || position.x > GRID_SIZE ||
        position.y < 1 || position.y > GRID_SIZE
    )
}

window.requestAnimationFrame(main)


