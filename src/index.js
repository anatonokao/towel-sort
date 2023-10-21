
// You should implement your task here.

module.exports = function towelSort(matrix = []) {
   return matrix.map((arr, index) => {
      return index % 2 !== 0
         ? arr.reverse()
         : arr
   }).reduce((acc, arr) => {
      arr.forEach(num => acc.push(num))
      return acc
   }, [])
}
