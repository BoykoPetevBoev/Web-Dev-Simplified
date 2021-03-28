import { getInputDirection } from './input.js';

const SNAKE_SPEED = 5;
const snakeBody = [
    { x: 11, y: 11 }
];
let newSegment = 0;

function updateSnake() {
    addSegments();
    const inputDirection = getInputDirection();

    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

function drawSnake(gameBoard) {
    snakeBody.forEach(position => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = position.y;
        snakeElement.style.gridColumnStart = position.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}

function expandSnake(amount) {
    newSegment += amount;
}

function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if(ignoreHead && index === 0) return false;
        return equalPositions(segment, position);
    })
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
    for (let i = 0; i < newSegment; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }
    newSegment = 0;
}

function getSnakeHead() {
    return snakeBody[0];
}

function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}



export {
    SNAKE_SPEED,
    updateSnake,
    drawSnake,
    expandSnake,
    onSnake,
    getSnakeHead,
    snakeIntersection
}