var input1=document.querySelectorAll('input')[0]
var input2=document.querySelectorAll('input')[1]

var add=document.querySelector("#add")
var mul=document.querySelector("#mul")
var res=document.querySelector(".resul")


// const addfun=() => { 
//    const result=parseInt(input1.value)+parseInt(input2.value)
//    res.innerHTML+=result

// }
// const mulfun=() => {
//     const result=parseInt(input1.value)*parseInt(input2.value)
//     res.innerHTML+=result
// }

const cal=(event,operation) => {
    console.log(event.target)
    if(operation=='add')
    console.log('add')
    else if(operation=="mul") console.log('mul') 


}

add.addEventListener('click',(event)=>{cal(event,'add')})
mul.addEventListener('click',(event)=>{cal(event,'mul')})