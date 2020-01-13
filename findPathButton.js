let findPathButton = document.createElement("button")
function addFindPathButton(){
    let title = document.getElementById("timeCompOrQuestion")
    title.innerHTML = "Find path ?"
    findPathButton.innerHTML = "Find Path"
    findPathButton.id = "findPathButton"
    let container = document.getElementById("complexityAnalysisOrButtons")
    container.appendChild(findPathButton)
    return true
}