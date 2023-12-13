export function checkEmpty(obj) {
  for(let key in obj) {
    if(obj[key].trim() === '') return true
  }
  return false
}