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
                removeTimeComplexity()
                timeCompFilled = addTimeComplexity("N^2","N^2","N^2")
              }
              else {
                timeCompFilled = addTimeComplexity("N^2","N^2","N^2")
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
            p.frameRate(20)

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


function startSelection(){
for (let sortMethod of sortArray){
  if (sortMethod){
    sortMethod.remove()
  }
}
sortArray[2] = new p5(sketchSelection)
}