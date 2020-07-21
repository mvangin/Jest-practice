function arrayAnalysis(array) {
  let average = 0;
   array.forEach(number => {
     average += number
   })
   average = average/array.length;

   let min = Math.min(...array)
  
   let minimum = array[0]
   let newbob = array.forEach(item => {
      item < minimum ? minimum = item : null
   })
   console.log(minimum)
   
   let max = Math.max(...array)

   let length = array.length

   return {average: average, min: min, max: max, length: length}
}

module.exports = arrayAnalysis


/*
const object = analyze([1,8,3,4,2,6]);

object == {
  average: 4,
  min: 1,
  max: 8,
  length: 6
}

*/