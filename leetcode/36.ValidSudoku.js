// 36. Valid Sudoku
// Medium

// https://leetcode.com/problems/valid-sudoku/description/

/**
 * @param {character[][]} board
 * @return {boolean}
 */

/**
 * Time O(row * col) | Space O(row * col)
 *
 */
var isValidSudoku = function (board) {
    // helper to check if cell values are distinct
    function validCells(arr) {
        const set = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        for (let j = 0; j < 9; j++) {
            const cell = arr[j];
            if (cell == '.') continue;
            if (set.has(+cell)) set.delete(+cell);
            else return false;
        }
        return true;
    }

    // helper to get an array of column values
    // n is the index of the column
    function oneCol(array, n) {
        return array.map((el) => el[n]);
    }

    // helper to create one square 3x3 box
    function oneBox(arr, r, c) {
        let res = [];
        for (let i = r; i < r + 3; i++) {
            for (let j = c; j < c + 3; j++) {
                res.push(arr[i][j]);
            }
        }

        return res;
    }

    // helper to create array of 3x3 boxes
    function arrBoxes(arr) {
        let res = [];
        for (let r = 0; r < 9; r += 3) {
            for (let c = 0; c < 9; c += 3) {
                res.push(oneBox(arr, r, c));
            }
        }

        return res;
    }

    // 1. check row values
    for (let i = 0; i < 9; i++) {
        let row = board[i];
        if (!validCells(row)) return false;
    }

    // 2. check column values
    for (let i = 0; i < 9; i++) {
        let col = oneCol(board, i); // array of col values
        if (!validCells(col)) return false;
    }

    // 3. check 3x3 box values
    const boxes = arrBoxes(board);
    for (let box of boxes) {
        if (!validCells(box)) return false;
    }

    return true;
};

const board = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

console.log(isValidSudoku(board)); //
