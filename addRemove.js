let addButton = document.createElement("button")
let removeButton = document.createElement("button")
function addRemoveButton(){
    let title = document.getElementById("timeCompOrQuestion")
    title.innerHTML = "Add or Remove?"
    addButton.innerHTML = "Add"
    removeButton.innerHTML = "Remove"
    addButton.id = "addButton"
    removeButton.id = "removeButton"
    let container = document.getElementById("complexityAnalysisOrButtons")
    container.appendChild(addButton)
    container.appendChild(removeButton)
    return true
}

