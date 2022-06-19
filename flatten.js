function flatten(arr){
    if (!Array.isArray(arr)){
        return 
    }

    let newArray = [];

    arr.forEach(item => {
       if (Array.isArray(item)){
        newArray = newArray.concat(flatten(item))
       } else {
        newArray.push(item)
       }
    });

    return newArray
}

module.exports = flatten