
var sketchBubble = function(p){
      let i = 0 
      let j = 49
      let array = []
      let sorted = false
      const barWidth = 1000/50
      p.setup = function() {
              canvas = p.createCanvas(1000,300)
              canvas.parent("myCanvas")
              for (let i = 1 ; i <=50 ; i++ ){
                    array.push(i)
              }
              for (let i = 0; i < 50 ; i++){
                let randomNumber = Math.floor(Math.random()*10)
                let tmp = array[randomNumber]
                array[randomNumber] = array[i]
                array[i] = tmp
                
              }
              p.frameRate(100)

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
                          start = false
                          
                      }
                      p.clear()
                      for (let i = 0; i < 50; i++){
                        if (array[i] == value){
                          p.fill("red")
                          p.rect(barWidth*i,p.height - array[i]*2,barWidth,array[i]*2)
                        }
                        else if (sorted){
                            p.fill("green")
                            p.rect(barWidth*i,p.height - array[i]*2,barWidth,array[i]*2)
                        }
                        else {
                            p.fill("grey")
                            p.rect(barWidth*i,p.height - array[i]*2,barWidth,array[i]*2)
                        }
                    }
                }
    }
  

function startBubble(){
  for (let sortMethod of sortArray){
    if (sortMethod){
      sortMethod.remove()
    }
  }
  sortArray[0] = new p5(sketchBubble)
}