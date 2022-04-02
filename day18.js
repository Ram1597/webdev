var list=document.querySelector('ul')
var button= document.querySelector('button')
var input= document.querySelector('input')
var body=document.querySelector('body')


const callbackfunc = (event) => {
   // const inputvalue=input.value
    const element=document.createElement('li')
    const textbox=document.createTextNode(input.value)
    element.appendChild(textbox)
    list.appendChild(element)

}

button.addEventListener('click', callbackfunc)