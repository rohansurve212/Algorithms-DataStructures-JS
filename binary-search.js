const binarySearch = (array, item) => {
    let low = 0
    let high = array.length -1

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        let guess = array[mid]

        if (guess === item) {
            return console.log(`${item} is a part of ${array}`)
        }

        if (guess < item) {
            low = mid + 1
        }

        if (guess > item) {
            high = mid - 1
        }
    }

    return console.log(`Sorry! Could not find ${item} in ${array}`)
} 

binarySearch([4,7,3,9,5,6,2,8,1], 9)