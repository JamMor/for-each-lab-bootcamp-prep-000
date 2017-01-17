function iterativeLog(array) {
  array.forEach(function(element,index,array) {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  testarray = ['one','two','three','four']
  testarray.forEach(callback)
  return testarray
}

function doToArray(array,callback) {
  array.forEach(callback)
}