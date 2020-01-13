var sketchSelection = function(p){
    let i = 0 
    let j = 0
    let index = 0
    let array = []
    let sorted = false
    const barWidth = 1000/50
    p.setup = function() {
            canvas = p.createCanvas(1000,300)
            canvas.parent("myCanvas")
            if (timeCompFilled){
                p.removeTimeComplexity()
                timeCompFilled = addTimeComplexity("N^2","N^2","N^2")
              }
            else {
            timeCompFilled = addTimeComplexity("N^2","N^2","N^2")
            }
        if (descriptionFilled){
            removeDescription()
            descriptionFilled = addDescription("The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning.")
            }
            else {
            descriptionFilled = addDescription("The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning.")
            }
            for (let i = 1 ; i <=50 ; i++ ){
                  array.push(i)
            }
            for (let i = 0; i < 50 ; i++){
              let randomNumber = Math.floor(Math.random()*50)
              let tmp = array[randomNumber]
              array[randomNumber] = array[i]
              array[i] = tmp
              
            }
            p.frameRate(50)

        }
        p.removeTimeComplexity = function (){
            let title = document.getElementById("timeCompOrQuestion")
            title.innerHTML = ""
            let unordered = document.getElementById("bestAverageWorst")
            let container = document.getElementById("buttonContainer")
            while (container.firstChild){
              container.removeChild(container.firstChild)
          }
            while (unordered.firstChild){
                unordered.removeChild(unordered.firstChild)
            }
            
            return false
        }


    p.draw = function(){
            value = Infinity
                    if (i < 50) {
                        if (!j){
                            j = i
                        }
                        if (j < 50) {
                            value = array[j]
                            if (array[j] < array[index]) {
                                index = j
                            }
                            j++
                        }
                        else {
                            let tmp = array[i]
                            array[i] = array[index]
                            array[index] = tmp
                            j = 0
                            i++
                            index = i
                        }
                    }
                    else {
                        sorted = true
                    }
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
  }
