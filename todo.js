const input = document.querySelector('#input')
const listdata = document.querySelector('.list-todo')
const btns = document.querySelector('#button')
const empty = document.querySelector('.emp')

btns.addEventListener('click', () => {
  if(input.value === "")
  {
    empty.innerHTML= "Enter Your Task"
  }
  else{
    empty.innerHTML = ""
    let li = document.createElement('li');
    li.innerHTML = input.value;
    listdata.appendChild(li);
    savedata()
    let dele = document.createElement("delete")
    dele.innerHTML = "\u00d7"
    li.appendChild(dele);
    savedata()
  }
  input.value = "";
  savedata()
})

listdata.addEventListener("click", function(a) {
    if(a.target.tagName === "LI")
    {
       a.target.classList.toggle("check");
       savedata()
    }
    else if(a.target.tagName === "DELETE"){
        a.target.parentElement.remove();
        savedata()
    }
},false)

function savedata(){
    localStorage.setItem("data", listdata.innerHTML)
}
function showTask(){
    listdata.innerHTML = localStorage.getItem("data");
}
showTask()