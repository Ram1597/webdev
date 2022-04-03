var list=document.querySelector('ul')
var button= document.querySelector('button')
var input= document.querySelector('input')
var body=document.querySelector('body')

var chore=[]

var deleteItem=(value)=>{
        const ind=chore.indexOf(value)
        chore.splice(ind,1)
        console.log(chore)

}

const callbackfunc = (event) => {
    
    const inputvalue=input.value
    if(chore.includes(inputvalue)) 
    console.log("Already Present")
    else
    {
        chore.push(inputvalue)
        const element=document.createElement('li')
    const textbox=document.createTextNode(input.value)
    element.appendChild(textbox)
    list.appendChild(element)
    element.addEventListener('click',(e)=>{e.target.remove()})
    }
    

}

button.addEventListener('click', callbackfunc)
