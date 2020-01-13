
var sketchStack = function(p){
    let top = -1
    let array 
    const barWidth = 1000/50
    p.addButton = document.createElement("button")
    p.removeButton = document.createElement("button")
    p.setup = function() {
            array = []
            canvas = p.createCanvas(1000,300)
            canvas.parent("myCanvas")
            if (timeCompFilled){
              p.removeTimeComplexity()
              timeCompFilled = p.addRemoveButton()
              
            }
            else {
              timeCompFilled = p.addRemoveButton()
              
            }
            if (descriptionFilled){
              p.removeDescription()
              descriptionFilled = addDescription("Stack is a linear data structure which follows a particular order in which the operations are performed. The order is LIFO (Last In First Out) ")
            }
            else {
              descriptionFilled = addDescription("Stack is a linear data structure which follows a particular order in which the operations are performed. The order is LIFO (Last In First Out) ")
            }
            
            p.frameRate(20)

        }

    p.addToStack = function() {
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
    p.removeFromStack = function () {
      if (top == -1) {
        top = -1
      }
      else {
        array.pop()
        top -= 1
        p.draw()
      }
    }
    p.removeDescription = function(){
      let desc = document.getElementById("descriptionText")
      while (desc.firstChild){
          desc.removeChild(desc.firstChild)
      }
      return false
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
      p.addButton.remove()
      p.removeButton.remove()
      return false
  }
  p.addRemoveButton = function (){
    let title = document.getElementById("timeCompOrQuestion")
    title.innerHTML = "Add or Remove?"
    p.addButton.innerHTML = "Add"
    p.removeButton.innerHTML = "Remove"
    p.addButton.id = "addButton"
    p.removeButton.id = "removeButton"
    let container = document.getElementById("buttonContainer")
    container.appendChild(p.addButton)
    container.appendChild(p.removeButton)
    p.addButton.addEventListener("click",function() {
      p.addToStack()
    })
    p.removeButton.addEventListener("click",function(){
      p.removeFromStack()
    })
    return true
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