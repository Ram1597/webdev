var list=document.querySelector('ul')
var button= document.querySelector('button')
var input= document.querySelector('input')
var body=document.querySelector('body')


const callbackfunc = (event) => {
        body.classList.toggle('dark')


}

button.addEventListener('click', callbackfunc)
