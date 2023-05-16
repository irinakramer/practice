// 2621. Sleep
// https://leetcode.com/problems/sleep/

/* 
Given a positive integer millis, write an asyncronous function 
that sleeps for millis milliseconds. It can resolve any value.
*/


/**
 * @param {number} millis
 */
async function sleep(millis) {
    const promise = new Promise(resolve => {
        setTimeout(resolve, millis)
    })

    return promise
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */