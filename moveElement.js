// Animate something smoothly - use requestAnimationFrame() window method
// Create a function to move an element. The function arguments are,
// distance, duration, and the element to move.

/*
    function moveElement(duration, distance, element) {}
*/

// FM solution
function moveElement(duration, distance, element) {
    const start = performance.now(); // timestamp when this animation started

    function move(currentTime) {
        const elapsed = currentTime - start;
        const progress = elapsed / duration; // how much time have been spent over duration
        const amountToMove = progress * distance;

        element.style.transform = `translateX(${ amountToMove }px)`;

        if(amountToMove < distance) {
            requestAnimationFrame(move);
        }
    }
    requestAnimationFrame(move);
}



// MDN solution
function moveElement(duration, distance, element) {
    let start;
    function step(timestamp) {
        if(start === undefined) {
            start = timestamp;
        }
        const elapsed = timestamp - start;
        element.style.transform = `translateX(${Math.min(0.1 * elapsed, distance)})`;

        if(elapsed < duration) {
            window.requestAnimationFrame(step);
        }
    }
    window.requestAnimationFrame(step);
}