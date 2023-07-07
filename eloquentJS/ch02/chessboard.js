// https://eloquentjavascript.net/02_program_structure.html

// Chessboard

/*

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

 */

const size = 8;

for (let i = 0; i < size; i++) {
  let str = '';

  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 === 0) {
      str += ' ';
    } else {
      str += '#';
    }
  }
  console.log(str);
}
