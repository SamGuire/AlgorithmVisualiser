
var sketchInsertion = function(p){
      let i = 0 
      let j = 49
      let key = -1
      let index = -2
      let array = []
      let sorted = false
      const barWidth = screen.width/50
      p.setup = function() {
              canvas = p.createCanvas(screen.width,300)
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
            let value = Infinity
                    if (i <= j) {
                        if (key == -1){
                            key = array[i]
                        }
                        if (index == -2){
                            index = i - 1
                        }
                    
                        if (index >= 0 && array[index] > key) {
                            
                            array[index+1] = array[index]
                            index -= 1
        
                        }
                        else{
                            value = key
                            array[index+1] = key
                            i++
                            key = -1
                            index = -2
                        }

                    }
                    else {
                        sorted = true
                       
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
  

function startInsertion(){
    for (let sortMethod of sortArray){
        if (sortMethod){
          sortMethod.remove()
        }
      }
      sortArray[1] = new p5(sketchInsertion)
}