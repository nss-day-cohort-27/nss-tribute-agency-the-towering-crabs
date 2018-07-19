const newArray = [1,2,3,4,5]

localStorage.setItem("numberArray", newArray)

const localStorageArray=localStorage.getItem("numberArray")

console.log(localStorageArray)