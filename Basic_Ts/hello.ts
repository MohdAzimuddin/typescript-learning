const removeDuplicate=(arr)=>{
    return [...new Set(arr)]
}


console.log(removeDuplicate([1,2,3,4,81,12,2,1]))