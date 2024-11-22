inputEl = document.getElementById ("input-el")
inputBtn = document.getElementById("input-btn")
myLeads = []

function checkClick(){
    if(document.activeElement === inputEl){
        inputEl.style.background = "#E6F1FD"
    }
    else inputEl.style.background = ""
}

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    for (let i = 0; i < myLeads.length; i++){
        console.log(myLeads[i])
    }
})