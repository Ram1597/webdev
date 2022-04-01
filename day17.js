//var body=document.querySelector('body')
// var fun=document.getElementsByClassName('tail')
// var tag=document.getElementsByTagName('p')

// console.log(ch)
// console.log(fun[0])

// head.innerHTML="lets try js"
// head.style="color:red"
// console.log(head.classList)

var list=document.querySelector('ul')
var arr=['Two','Three','Four']
for(var i=0;i<arr.length;i++)
{
    var element=document.createElement('li')
    var textbox=document.createTextNode(arr[i])
    element.appendChild(textbox)
    list.appendChild(element)

}



