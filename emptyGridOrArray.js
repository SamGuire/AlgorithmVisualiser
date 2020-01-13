function emptyGrid(array,numRows,numColumns){
    for ( let i = 0 ; i < rows; i++){
        for (let j = 0 ; j < columns ; j++){
            array[i][j] = ""
        }
    }
}

function emptyArray(array){
   while (array.length != 0 ){
       array.shift()
   }
   return array
}