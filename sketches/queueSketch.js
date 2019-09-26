
var sketchQueue = function(p){
    let top = 0
    let array = []
    const barWidth = 1000/50
    p.setup = function() {
            canvas = p.createCanvas(1000,300)
            canvas.parent("myCanvas")
            if (timeCompFilled){
              removeTimeComplexity()
              timeCompFilled = addRemoveButton()
              addButton.addEventListener("click",function() {
                enqueue()
              })
              removeButton.addEventListener("click",function(){
                dequeue()
              })
            }
            else {
              timeCompFilled = addRemoveButton()
              addButton.addEventListener("click",function() {
                enqueue()
              })
              removeButton.addEventListener("click",function(){
                dequeue()
              })
            }
            if (descriptionFilled){
              removeDescription()
              descriptionFilled = addDescription("A Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO). ")
            }
            else {
              descriptionFilled = addDescription("A Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO). ")
            }
            
            p.frameRate(20)

        }

    function enqueue() {
        if (array.length == 50) {
            return
        }
        array.push(Math.floor(Math.random()*50))
        p.draw()
      
    }
    function dequeue() {
    
        array.shift()
        p.draw()
    
    }
    p.draw = function(){
          p.clear()
          for (let i = 0; i < array.length; i++){
              if (i == 0){
                  p.fill("red")
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