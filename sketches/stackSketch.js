
var sketchStack = function(p){
    let top = -1
    let array = []
    const barWidth = 1000/50
    p.setup = function() {
            canvas = p.createCanvas(1000,300)
            canvas.parent("myCanvas")
            if (timeCompFilled){
              removeTimeComplexity()
              timeCompFilled = addRemoveButton()
              addButton.addEventListener("click",function() {
                addToStack()
              })
              removeButton.addEventListener("click",function(){
                removeFromStack()
              })
            }
            else {
              timeCompFilled = addRemoveButton()
              addButton.addEventListener("click",function() {
                addToStack()
              })
              removeButton.addEventListener("click",function(){
                removeFromStack()
              })
            }
            if (descriptionFilled){
              removeDescription()
              descriptionFilled = addDescription("Stack is a linear data structure which follows a particular order in which the operations are performed. The order is LIFO (Last In First Out) ")
            }
            else {
              descriptionFilled = addDescription("Stack is a linear data structure which follows a particular order in which the operations are performed. The order is LIFO (Last In First Out) ")
            }
            
            p.frameRate(20)

        }

    function addToStack() {
      if (top == 49) {
        top = 49
      }
      else {
        array.push(Math.floor(Math.random()*50))
        top += 1
        console.log(array)
        p.draw()
      }
    }
    function removeFromStack() {
      if (top == -1) {
        top = -1
      }
      else {
        array.pop()
        top -= 1
        p.draw()
      }
    }
    p.draw = function(){
          p.clear()
          for (let i = 0; i < array.length; i++){
              if (i == top){
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