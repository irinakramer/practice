/* DEBOUNCE */

// functionToBeExecuted(); - ignore
// functionToBeExecuted(); - ignore
// functionToBeExecuted(); - ignore
// functionToBeExecuted(); - ignore
// functionToBeExecuted(); - run this one after timeout

function debounce(fn, time) {
    let setTimeoutId;

    return function() {
        // check for existing calls
        if(setTimeoutId) {
            // reset timer
            clearTimeout(setTimeoutId);
        }
        setTimeoutId = setTimeout( () => {
            // invoke fn
            fn.apply(this, arguments);
            setTimeoutId = null;
        }, time)
    }
}

/* THROTTLE */

// functionToBeExecuted(); - run this one 
// functionToBeExecuted(); - ignore
// functionToBeExecuted(); - ignore
// functionToBeExecuted(); - ignore
// functionToBeExecuted(); - run this one after timeout
function throttle(fn, time) {
    let setTimeoutId;

    return function() {
        if(setTimeoutId) {
            return;
        }
        setTimeoutId = setTimeout( () => {
            fn.apply(this, arguments);
            setTimeoutId = null;
        }, time)
    }
}



// https://levelup.gitconnected.com/debounce-in-javascript-improve-your-applications-performance-5b01855e086
const debounce = (func, wait) => {
    let timeout;

    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        }
        clearTimeout(timeout);
        timeout = setTimeout(later, wait)
    }
}

 