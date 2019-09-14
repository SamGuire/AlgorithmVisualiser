
var sketchQuick = function(p){
    value = Infinity
    let array = []
    let sorted = false
    const barWidth = 1000/50

    p.setup = function() {
            canvas = p.createCanvas(1000,300)
            canvas.parent("myCanvas")
            if (timeCompFilled){
                removeTimeComplexity()
                timeCompFilled = addTimeComplexity("N*log(N)","N*log(N)","N^2")
              }
            else {
                timeCompFilled = addTimeComplexity("N*log(N)","N*log(N)","N^2")
              }
            for (let i = 1 ; i <=50 ; i++ ){
                  array.push(i)
            }
            for (let i = 0; i < 50 ; i++){
              let randomNumber = Math.floor(Math.random()*10)
              let tmp = array[randomNumber]
              array[randomNumber] = array[i]
              array[i] = tmp
              
            }
            p.quickSort(array,0,49)

        }


    p.draw = function(){
                  p.clear()
                  for (let i = 0; i < 50; i++){
                    if (array[i] == value){
                        p.fill("red")
                        p.rect(barWidth*i,p.height - array[i]*4,barWidth,array[i]*4)
                        p.text(array[i],(barWidth*i),(p.height - array[i]*4)-5)
                      }
                      else if (sorted){
                          p.fill("green")
                          p.rect(barWidth*i,p.height - array[i]*4,barWidth,array[i]*4)
                          p.text(array[i],(barWidth*i),(p.height - array[i]*4)-5)
                      }
                      else {
                          p.fill("grey")
                          p.rect(barWidth*i,p.height - array[i]*4,barWidth,array[i]*4)
                          p.text(array[i],(barWidth*i),(p.height - array[i]*4)-5)
                      }
              }
        }
    p.partition = async function(arr,l,r){
        value = arr[r]
        let i = l-1
        let j = l-1
        while (j < r){
            if (arr[j+1] < arr[r]){
                await p.swap(arr,i+1,j+1)
                i +=1
            }
            j +=1
        }
        await p.swap(arr,r,i+1)
        return i+1
    }
    
    p.quickSort = async function(arr,left,right) {
        if (left < right){
            let partition_index = await p.partition(arr,left,right)
            //Reset colored band before finding the next partition
            value = Infinity
            await p.quickSort(arr,left,partition_index-1)
            //Reset colored band before finding next partition in the recursion
            value = Infinity
            await p.quickSort(arr,partition_index+1,right)
            
        }
        if (left >= 49){
            sorted = true
        }
    
    }
    p.swap = async function(arr,i,j){
        
        await p.sleep(100)
        let tmp = arr[j]
        arr[j] = arr[i]
        arr[i] = tmp
        
        
    }
    p.sleep = function(ms){
        return new Promise(resolve => setTimeout(resolve,ms))
    }
        
  }


