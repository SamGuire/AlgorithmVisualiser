
var sketchMerge = function(p){
    colored = Infinity
    let array = []
    let sorted = false
    const barWidth = 1000/50

    p.setup = function() {
            canvas = p.createCanvas(1000,300)
            canvas.parent("myCanvas")
            if (timeCompFilled){
                removeTimeComplexity()
                timeCompFilled = addTimeComplexity("N*log(N)","N*log(N)","N*log(N)")
              }
            else {
                timeCompFilled = addTimeComplexity("N*log(N)","N*log(N)","N*log(N)")
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
            p.mergeSort(array,0,49)

        }


    p.draw = function(){
                  p.clear()
                  for (let i = 0; i < 50; i++){
                    if (array[i] == colored ){
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
    
    p.mergeSort = async function(arr,left,right){
                    if (left < right) {
                        let mid = Math.floor((left + right)/ 2)
                        left_arr = await p.mergeSort(arr,left,mid)
                        right_arr = await p.mergeSort(arr,mid+1,right)
                        await p.merge(arr,left,mid,right)
                        
                    }
                    if (left == 0 && right == 49){
                        sorted = true
                        colored = Infinity
                    }
            
        }
        
    p.merge =  async function(arr,l,m,r){
                    start = l
                    end = r
                    let start_second_array = m+1
                    if (arr[m] <= arr[start_second_array]) {
                        return
                    }
                    while (l <= m && start_second_array <= r){
                
                        if (arr[l] <= arr[start_second_array]){
                            l += 1
                        }
                        else {
                            colored = arr[start_second_array]
                            let value = arr[start_second_array]
                            let index = start_second_array
                            while (index != l){
                                await p.sleep(100)
                                arr[index] = arr[index - 1]
                                index -= 1
                            }
                            arr[l] = value
                
                            l += 1
                            m += 1
                            start_second_array += 1
                            
                        }
                    }
                
                }
    
  
    
    p.sleep = function(ms){
        return new Promise(resolve => setTimeout(resolve,ms))
    }
        
  }


