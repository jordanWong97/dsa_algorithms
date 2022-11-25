function BitmapHoles(strArr) {

  // // code goes here
  // return strArr;
  const matrix = buildMatrix(strArr);
  return findGroups(matrix);

}

function buildMatrix(arr) {
  let matrix = [];
  for (let i = 0; i < arr.length; i++) {
    matrix.push(arr[i].split(""));
  }
  // console.log('matrix is', matrix)
  return matrix;

}

function findGroups(matrix) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === "0") {
        count++;
        connectZeros(matrix, i, j);
      }
    }
  }
  return count;
}

function connectZeros(matrix, i, j) {
  if (matrix[i] === undefined || matrix[j] === undefined || matrix[i][j] !== "0") {
    return;
  }

  matrix[i][j] = "1";
  connectZeros(matrix, i, j + 1);
  connectZeros(matrix, i, j - 1);
  connectZeros(matrix, i + 1, j);
  connectZeros(matrix, i - 1, j);
}

