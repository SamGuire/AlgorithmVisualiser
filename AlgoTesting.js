
function bubbleSort(arr){
    for (let i = 0; i < arr.length ; i++){
        for (let j = arr.length-1; j > i; j--){
            if (arr[j] < arr[j-1]) {
                let tmp = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = tmp
            }
        }
    }
   
}


function insertionSort(arr,start,finish){
    index = start+1
    while (index <= finish) {
        let key = arr[index]
        let i = index-1
        while (i >= start && arr[i] > key) {
            arr[i+1] = arr[i]
            i -= 1
        }
        arr[i+1] = key
        index += 1

    }
}

function mergeSort(arr,left,right){
    if (left < right) {
        let mid = Math.floor((left + right)/ 2)
        console.log("(%s,%s,%s)",left,mid,right)
        left_arr = mergeSort(arr,left,mid)
        console.log("Left ready")
        right_arr = mergeSort(arr,mid+1,right)
        console.log("right ready")
        merge(arr,left,mid,right)
        
    }
    else {
        console.log("left = %s\nright= %s",left,right)
    }
}

function merge(arr,l,m,r){
    console.log("Merging...")
    let start_second_array = m+1
    if (arr[m] <= arr[start_second_array]) {
        console.log("Already Sorted!")
        return
    }
    while (l <= m && start_second_array <= r){

        if (arr[l] <= arr[start_second_array]){
            l += 1
        }
        else {
            let value = arr[start_second_array]
            let index = start_second_array
            while (index != l){
                arr[index] = arr[index - 1]
                index -= 1
            }
            arr[l] = value

            l += 1
            m += 1
            start_second_array += 1
            console.log(arr)
        }
    }
}

function selectionSort(arr){
    for (let i = 0 ; i < arr.length ; i++){
        let min = arr[i]
        let index = i
        for (j = i; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j]
                index = j
            }
        }
        let tmp = arr[i]
        arr[i] = min
        arr[index] = tmp
    }
}
function partition(arr,l,r){

    let end = arr[r]

    let i = l-1
    let j = l-1
    while (j < r){
        if (arr[j+1] < end){
            let tmp = arr[j+1]
            arr[j+1] = arr[i+1]
            arr[i+1] = tmp
            i +=1
        }
        j +=1
    }
    let tmp = arr[i+1]
    arr[i+1] = end
    arr[r] = tmp
    return i+1
}

function quickSort(arr,left,right) {
    if (left < right){
        let partition_index = partition(arr,left,right)
        quickSort(arr,left,partition_index-1)
        quickSort(arr,partition_index+1,right)
    }

}


