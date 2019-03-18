/**
 * 
 * @param {Array} arr1 存在赋值现象的变量 
 * @param {Array} arr2 申明过的变量
 * @return {Array} 
 */
function compare(arr1,arr2){
  let result = []
  arr1.forEach(item=>{
    if(arr2.indexOf(item)==-1){
      result.push(item)
    }
  })
  return result
}
module.exports = {compare}