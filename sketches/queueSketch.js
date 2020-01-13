
var sketchQueue = function(p){
    let array
    const barWidth = 1000/50
    p.addButton = document.createElement("button")
    p.removeButton = document.createElement("button")
    p.setup = function() {
            canvas = p.createCanvas(1000,300)
            canvas.parent("myCanvas")
            console.log("setup")
            array = []
            if (timeCompFilled){
              p.removeTimeComplexity()
              timeCompFilled = p.addRemoveButton()
            }
            else {
              p.removeTimeComplexity()
              timeCompFilled = p.addRemoveButton()
            
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

    p.enqueue = function() {
        if (array.length == 50) {
            return
        }
        array.push(Math.floor(Math.random()*50))
        p.draw()
      
    }
    p.dequeue = function  (){
    
        array.shift()
        p.draw()
    
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
          p.enqueue()
        })
        p.removeButton.addEventListener("click",function(){
          p.dequeue()
        })
        return true
    }   
  }