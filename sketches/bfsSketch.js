
var sketchBFS = function(p){
    p.startX = 0
    p.startY = 0
    p.rows = 31
    p.columns = 101
    p.start = false;
    p.end = false;
    p.startAndEndPicked = false
    p.found = false
    p.findPathButton = document.createElement("button")
    p.findPathButtonDFS = document.createElement("button")
    p.processInMotion = false
    p.scale = 9
    p.setup = function() {
            p.grid = new Array(p.rows)
            p.positions = new Queue()
            for (let i = 0 ; i < p.rows ; i++){
              p.grid[i] = new Array(p.columns)
            }
            canvas = p.createCanvas(909,279)
            canvas.parent("myCanvas")
            if (timeCompFilled){
              p.removeTimeComplexity()
              timeCompFilled = p.addFindPathButton()
            }
            else {
              timeCompFilled = p.addFindPathButton()
            }
            if (descriptionFilled){
              p.removeDescription()
              descriptionFilled = addDescription("BFS stands for Breadth First Search is a vertex based technique for finding a shortest path in graph. It uses a Queue data structure which follows first in first out. In BFS, one vertex is selected at a time when it is visited and marked then its adjacent are visited and stored in the queue. It is slower than DFS. Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking.")
            }
            else {
              descriptionFilled = addDescription("BFS stands for Breadth First Search is a vertex based technique for finding a shortest path in graph. It uses a Queue data structure which follows first in first out. In BFS, one vertex is selected at a time when it is visited and marked then its adjacent are visited and stored in the queue. It is slower than DFS. Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking.")
            }
        
            
            p.frameRate(100)

        }
    
   p.addFindPathButton = function (){
      let title = document.getElementById("timeCompOrQuestion")
      title.innerHTML = "Find path ?"
      p.findPathButton.innerHTML = "Find Path (BFS)"
      p.findPathButton.id = "findPathButton"
      p.findPathButtonDFS.innerHTML = "Find Path (DFS)"
      p.findPathButtonDFS.id = "findPathButtonDFS"
      let container = document.getElementById("buttonContainer")
      container.appendChild(p.findPathButton)
      container.appendChild(p.findPathButtonDFS)
      p.findPathButton.addEventListener("click",function() {
        p.findPathButton.disabled = true
        p.findPath()
      })
       p.findPathButtonDFS.addEventListener("click",function() {
         p.findPathButtonDFS.disabled = true
        p.findPathDFS(p.startX,p.startY,"")
      })
      return true
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
    p.findPathButton.remove()
    p.findPathButtonDFS.remove()
    return false
}
p.removeDescription = function(){
  let desc = document.getElementById("descriptionText")
  while (desc.firstChild){
      desc.removeChild(desc.firstChild)
  }
  return false
}
    
p.mousePressed = function(){
        for (let i = 0 ; i < p.rows ; i++){
            for (let j = 0; j < p.columns ; j++){
                if (p.mouseX>j*p.scale &&  p.mouseY>i*p.scale && p.mouseX<j*p.scale+p.scale && p.mouseY<i*p.scale+p.scale) {
                  if (p.grid[i][j] != "wall") {
                            if (!p.start) {
                                p.grid[i][j] = 'start'
                                p.startX = j
                                p.startY = i
                                console.log(p.startX,p.startY)
                                p.start = true
                            }
                            else if (!p.end) {
                                console.log('end pressed')
                                p.grid[i][j] = 'end'
                                p.end = true
                                p.startAndEndPicked = true
                                console.log(p.startAndEndPicked)
                            }
                          }
                }
                  
                
            }
        }
    }

    p.findEnd = function (moves){
      let posX = p.startX
      let posY = p.startY
      for (move of moves){
        if (move == 'L'){
          posX -= 1
        }
        if (move == 'R'){
          posX += 1
        }
        if (move == 'U'){
          posY -= 1
       
        }
        if (move == 'D'){
          posY += 1
          
        }
      }
      if (p.grid[posY][posX] =='end'){
        p.pathFound(moves)
    
        return true
      }
      p.pathTraversed(moves)
      return false
    }

    p.pathFound = function (moves){
      p.found = true
      let posX = p.startX
      let posY = p.startY
      for (let move of moves){
        if (move == 'L'){
          posX -= 1
          p.grid[posY][posX] = 'shortestPath'
        }
        if (move == 'R'){
          posX += 1
          p.grid[posY][posX] = 'shortestPath'
        }
        if (move == 'U'){
          posY -= 1
          p.grid[posY][posX] = 'shortestPath'
       
        }
        if (move == 'D'){
          posY += 1
          p.grid[posY][posX] = 'shortestPath'
          
        }
      }
    }

    p.isValid = async function (moves,pX,pY){
      await p.sleep(1)
      let posX = pX
      let posY = pY
      for (let move of moves){
        if (move == 'L'){
          posX -= 1
        }
        if (move == 'R'){
          posX += 1
        }
        if (move == 'U'){
          posY -= 1
       
        }
        if (move == 'D'){
          posY += 1
          
        }
      }
      if ((posX < 0 || posX > p.columns-1) || (posY < 0  || posY > p.rows-1)){
        return false
      }
      else if (p.grid[posY][posX] == "traversed" || p.grid[posY][posX] == "start" || p.grid[posY][posX] == "wall") {
        return false
      }
      if (p.grid[posY][posX] != "end"){
        p.grid[posY][posX] = "traversed"
      }
      p.positions.enqueue([posX,posY])
      return true
    }
     p.isValidDFS = async function (moves,pX,pY){
      let posX = pX
      let posY = pY
      for (let move of moves){
        if (move == 'L'){
          posX -= 1
        }
        if (move == 'R'){
          posX += 1
        }
        if (move == 'U'){
          posY -= 1
       
        }
        if (move == 'D'){
          posY += 1
          
        }
      }
      if ((posX < 0 || posX > p.columns-1) || (posY < 0  || posY > p.rows-1)){
        await p.sleep(40)
        return false
      }
      else if (p.grid[posY][posX] == "end"){
        await p.sleep(40)
        return [posX,posY]
      }
      else if (p.grid[posY][posX] == "start" || p.grid[posY][posX] == "backTrack" || p.grid[posY][posX] == "traversed" || p.grid[posY][posX] == "wall"){
        await p.sleep(40)
        return false
      }
      await p.sleep(40)
      if (p.grid[pY][pX] != "start"){
          p.grid[pY][pX] = "traversed"
      } 
      return [posX,posY]
    }
    
    p.pathTraversed = function (moves){

      let posX = p.startX
      let posY = p.startY
      for (let move of moves){
        if (move == 'L'){
          posX -= 1
          p.grid[posY][posX] = 'traversed'
        }
        if (move == 'R'){
          posX += 1
          p.grid[posY][posX] = 'traversed'
        }
        if (move == 'U'){
          posY -= 1
          p.grid[posY][posX] = 'traversed'
       
        }
        if (move == 'D'){
          posY += 1
          p.grid[posY][posX] = 'traversed'
          
        }
      }
    }


     
    p.draw = function(){
      p.clear()
          for (let i = 0; i < p.rows; i++){
              for (let j = 0; j < p.columns ;j++){
                  if (p.grid[i][j] == "start"){
                    p.fill("green")
                    p.rect(j*p.scale,i*p.scale,p.scale,p.scale) 
                  }
                  else if (p.grid[i][j] == "end"){
                    p.fill("red")
                    p.rect(j*p.scale,i*p.scale,p.scale,p.scale) 
                  }
                  else if (p.grid[i][j] == "traversed") {
                    p.fill("orange")
                    p.rect(j*p.scale,i*p.scale,p.scale,p.scale)
                  }
                  else if (p.grid[i][j] == "shortestPath") {
                    p.fill("purple")
                    p.rect(j*p.scale,i*p.scale,p.scale,p.scale)
                  }
                   else if (p.grid[i][j] == "backTrack") {
                    p.fill("orange")
                    p.rect(j*p.scale,i*p.scale,p.scale,p.scale)
                  }
                  else if (maze[i][0][j] == "#") {
                    p.grid[i][j] = "wall"
                    p.fill("black")
                    p.rect(j*p.scale,i*p.scale,p.scale,p.scale)
                  }
                  else {
                    p.fill("white")
                    p.rect(j*p.scale,i*p.scale,p.scale,p.scale)
                  }
              }

              
        }
    }
    p.sleep = function(ms){
      return new Promise(resolve => setTimeout(resolve,ms))
  }

    p.findPath= async function (){
      if (!p.startAndEndPicked || p.found){
        return
      }
      else { 
        let queue = new Queue()
        p.positions.enqueue([p.startX,p.startY])
        queue.enqueue('')
        let path = ''
        while (p.positions){
          console.log("finding")
          path = queue.dequeue()
          let position = p.positions.dequeue()
          let posX = position[0]
          let posY = position[1]
          if (p.grid[posY][posX] == "end"){
            p.pathFound(path)
            break
          }
          for (let direction of ['L','R','U','D']){
            let currentDirections = path.concat(direction)
            if (await p.isValid(direction,posX,posY)) {
              queue.enqueue(currentDirections)
            }
          }
        }
      }
    }

      p.findPathDFS = async function (posX,posY,pathString){
      if (!p.startAndEndPicked || p.found ){
        console.log("error")
        return
      }
      else if  (p.grid[posY][posX] == "end"){
                p.pathFound(pathString)
                return
              }
      else { 
          let path = pathString
          for (let direction of ['L','R','U','D']){
            let currentDirections = path.concat(direction)
            if (p.grid[posY][posX] == "traversed") {
              p.grid[posY][posX] = "backTrack"
            }
            let newPos = await p.isValidDFS(direction,posX,posY)
            if (newPos){
              let newX = newPos[0]
              let newY = newPos[1]
              if (p.found) {
                p.pathFound(currentDirections)
                return
              }
              await p.findPathDFS(newX,newY,currentDirections)
            }
            if (p.found) {
              return
            }
          }
         if (p.grid[posY][posX] != "backTrack"){
            p.grid[posY][posX] = "traversed"
         }
          return
        }
      }
    }

var name = "###"
  
var maze =  
[["#####################################################################################################"],
 ["# #       #   #   # #     #         #       # #   #           #       # #       #           #       #"],
 ["# # # # # # ##### ### # # # # ####### ### ##### # # # ##### ### # # ####### # ##### ##### ### ### ###"],
 ["# # #   # #   # #       # # # #   # # # # #   # #   # #   #   # #       # # #   #   #   #   # #   # #"],
 ["### ### ####### ####### # ### # # # # # ### ### # ##### ####### ### ### # # ### # ### ### ##### ### #"],
 ["#   #     #     # #       #   # #           #         #     #     # #   # #   # # # # #         #   #"],
 ["# ### # ### ### # # ##### # # ##### ##### # ### ### ### ######### ##### # # # # ### # ######### # ###"],
 ["#     #     #       #     # # #   # # #   #       # #               #   #   #     # # #         # # #"],
 ["# ####### ##### ####### # ### ### ### # ### ####### ############### ######### ### # # # ##### ### # #"],
 ["#     #   # # # #     # # # #   #   #   #       # #   #             #         # #     # # #         #"],
 ["# ####### # # # # # ####### # # # ### # ### ##### # ######### # # ##### ##### # # # # ### ####### # #"],
 ["#     #       # # # # #   # # #     # #   # #         # #   # # # # #   # #   # # # #     # #     # #"],
 ["# ### ####### # ### # ### # ####### ### # ######### # # # # ##### # # ### ### # ##### ##### # # ### #"],
 ["#   # # #     # #   #   # #     #   #   # #   # #   # #   #   #   #   #   #     #   #         # #   #"],
 ["# ##### # ### # # ##### # # # ####### ####### # # ### ### ### # # # # # ####### # # ##### # #########"],
 ["# #       # # #   # #   # # #   # # #     # #       # # # # #   #   # # #   #   # # # # # #     #   #"],
 ["# ### # # # ### ### # ### # ### # # # ##### ### # ### # # # ### # ### # ### ##### ### # ### # # ### #"],
 ["# #   # #   # #     #   # #   # #   #   #     # #   #       #   #   #           #   # #     # #     #"],
 ["############# # ####### # # ##### ####### # # ### ### ### ########### ##### ### ### # # ### ##### ###"],
 ["# #       # #   #   #           # #     # # # # # #   # # #           #       # #     #   # # #     #"],
 ["# # ##### # ### # ### ####### ### ##### # ### # ####### # # ### ##### ### # ##### # ##### # # # #####"],
 ["#       # #               #                 #       #   # #   # #       # #     # #   #   #   # #   #"],
 ["### ### # ##### ### ####### ####### # # ##### # ### ### # ####################### # ##### # ### # ###"],
 ["#     # #     # # # # #         # # # #     # # # #     #     # #   #   #       # #       #   #   # #"],
 ["# # # # ##### ### # # ####### # # ####### ####### ### # ##### # ### # ####### # ##### ### # ### # # #"],
 ["# # # # # #           #     # # #   #   #   #   #     # #   #           #     # #   # #   #   # #   #"],
 ["# ### # # ######### ### ####### # ### # # ### # ####### # ### # # ### # # ##### # ##### ####### ### #"],
 ["#   # #   # #   #     #   #     #     # # #   #               # # #   # #   #   #     # #     #   # #"],
 ["# ### ### # ### ### ##### # # # # # ######### ##### # ######### # # ### # ### # # ######### ### #####"],
 ["#   #   #     #           # # # # #               # # #         # #   #   #   #           #          "],
 ["#####################################################################################################"],] 

console.log(maze[0][0].length)