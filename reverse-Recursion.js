// write a recursive function called reverse which takes a string
// and returns a new string in reverse

function reverse(str) {
    let reversedStr = [];
    function helper(input) {
        if (input.length <= 0) return;
        reversedStr += input.slice(-1);
        helper(input.slice(0, -1));
    }
    helper(str);
    return reversedStr;
}

reverse("awesome"); // "emosewa"
