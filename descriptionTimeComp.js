let timeCompFilled = false
let descriptionFilled = false

function addTimeComplexity(best,average,worst){
    let unordered = document.getElementById("bestAverageWorst")
    var bestCase = document.createElement("li");                 
    var textnodeBest = document.createTextNode(`Best Case : ${best}`);
    bestCase.appendChild(textnodeBest)
    var averageCase = document.createElement("li");                 
    var textnodeAverage = document.createTextNode(`Average Case : ${average}`);
    averageCase.appendChild(textnodeAverage)
    var worstCase = document.createElement("li");                 
    var textnodeWorst = document.createTextNode(`Worst Case : ${worst}`);
    worstCase.appendChild(textnodeWorst)
    unordered.appendChild(bestCase)
    unordered.appendChild(averageCase)
    unordered.appendChild(worstCase)
    return true
  }

function removeTimeComplexity(){
    let unordered = document.getElementById("bestAverageWorst")
    while (unordered.firstChild){
        unordered.removeChild(unordered.firstChild)
    }
    return false
}

function addDescription(description){
    let desc = document.getElementById("description")
    paragraph = document.createElement("p")
    paraText = document.createTextNode(description)
    paragraph.appendChild(paraText)
    desc.appendChild(paragraph)
    return true
}

function removeDescription(){
    let desc = document.getElementById("description")
    desc.removeChild(desc.firstChild)
    return false
}