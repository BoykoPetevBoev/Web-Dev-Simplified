let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

window.addEventListener('keydown', e => {
    const key = e.key;

    // switch (e.key) {
    //     case 'ArrowUp':
    //         if (lastInputDirection.y !== 0) break
    //         inputDirection = { x: 0, y: -1 }
    //         break
    //     case 'ArrowDown':
    //         if (lastInputDirection.y !== 0) break
    //         inputDirection = { x: 0, y: 1 }
    //         break
    //     case 'ArrowLeft':
    //         if (lastInputDirection.x !== 0) break
    //         inputDirection = { x: -1, y: 0 }
    //         break
    //     case 'ArrowRight':
    //         if (lastInputDirection.x !== 0) break
    //         inputDirection = { x: 1, y: 0 }
    //         break
    // }

    if (key === 'ArrowUp' && lastInputDirection.y === 0)
        inputDirection = { x: 0, y: -1 }
    else if (key === 'ArrowDown' && lastInputDirection.y === 0)
        inputDirection = { x: 0, y: 1 }
    else if (key === 'ArrowLeft' && lastInputDirection.x === 0)
        inputDirection = { x: -1, y: 0 }
    else if (key === 'ArrowRight' && lastInputDirection.x === 0)
        inputDirection = { x: 1, y: 0 }
})

function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection;
}

export {
    getInputDirection
}

