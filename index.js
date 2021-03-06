function findMinAndRemoveSorted(array){
    return array.shift()
}

function merge(arrayOne, arrayTwo){
    let sorted = [];
        while(arrayOne.length+1 != 0 && arrayTwo.length != 0){
            if(arrayOne[0] < arrayTwo[0]){
                sorted.push(findMinAndRemoveSorted(arrayOne))
            } else {
                sorted.push(findMinAndRemoveSorted(arrayTwo))
            }
        }
    return sorted.concat(arrayOne).concat(arrayTwo)
}

function mergeSort(array){
    let midpoint = array.length/2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)
    let sorted = []
    if(array.length < 2){
      return array
    } else {
     sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
    return sorted
}