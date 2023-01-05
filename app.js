var mn =document.getElementById('mn')
function addval(){
    if(inpu.value==""){
        alert("Enter SOmething")
    }else{
        console.log(inpu)
        var li=document.createElement('li')
        var litext=document.createTextNode(inpu.value)
        li.appendChild(litext)
        mn.appendChild(li)
      
        var editbtn=document.createElement('BUTTON')
        var editbtntext=document.createTextNode('Edit TOdo')
        editbtn.appendChild(editbtntext)
        editbtn.setAttribute("onclick","edittodo(this)")
        li.appendChild(editbtn)
        mn.appendChild(li)
        inpu.value=""
        // delt btn strt
        var delbtn=document.createElement("BUTTON")
        var delbtntext=document.createTextNode("Delete")
        delbtn.appendChild(delbtntext)
        delbtn.setAttribute("onclick","delt(this)")
        li.appendChild(delbtn)
        mn.appendChild(li)

    }
}
function edittodo(element){
    var newvalue=prompt("Enter YOur Value")
    console.log(element.parentNode.firstChild.nodeValue)
    element.parentNode.firstChild.nodeValue=newvalue
}
function delt(element){
    element.parentNode.remove()
}
function deltall(){
    mn.innerHTML=""
}