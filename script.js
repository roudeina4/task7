const form = document.querySelector(".form")
const firstInput = document.querySelector("#title")
const secondInput = document.querySelector("#description")
const thirdInput = document.querySelector("#date")
const main = document.querySelector(".main")


form.addEventListener('submit',function(event){
    event.preventDefault();
    console.log(firstInput.value)
    console.log(secondInput.value)
    console.log(thirdInput.value)


    const handler =  document.createElement('div')
    const first   =  document.createTextNode(firstInput.value)
    const second  =  document.createTextNode(secondInput.value)
    const third   =  document.createTextNode(thirdInput.value)
     
    handler.appendChild(first)
    handler.appendChild(second)
    handler.appendChild(third)
    main.appendChild(handler)
    
    firstInput.value=" ";
   secondInput.value=" ";
    thirdInput.value=" ";
    
    handler.classList.add('container')


    const button = document.createElement('div')
    button.innerText="X";
    button.classList.add("del_button")
    handler.appendChild(button);
   
    button.addEventListener('click',function(){
        main.removeChild(handler)
    })
    

})