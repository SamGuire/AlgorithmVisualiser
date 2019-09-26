
var sketchBubble = function(p){
      let i = 0 
      let j = 49
      let array = []
      let sorted = false
      const barWidth = 1000/50
      p.setup = function() {
              canvas = p.createCanvas(1000,300)
              canvas.parent("myCanvas")
              if (timeCompFilled){
                removeTimeComplexity()
                timeCompFilled = addTimeComplexity("N","N^2","N^2")
              }
              else {
                timeCompFilled = addTimeComplexity("N","N^2","N^2")
              }
              if (descriptionFilled){
                removeDescription()
                descriptionFilled = addDescription("Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.")
              }
              else {
                descriptionFilled = addDescription("Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.")
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
              p.frameRate(20)

          }


      p.draw = function(){
          
              value = Infinity
                      if (i < 50){
                          if (j > i) {
                              if (array[j] < array[j-1]) {
                                      value = array[j]
                                      let tmp = array[j]
                                      array[j] = array[j-1]
                                      array[j-1] = tmp 
                              }
                    
                              j--
                          }
                          else {
                              i++
                              j = 49
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
  

function start(sortMethod){
  if (sketchPlaced){
    sketchPlaced.remove()
    sketchPlaced = new p5(sortMethod)
  }
}
