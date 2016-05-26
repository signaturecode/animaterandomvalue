const btn =document.querySelector(".btn")
const btnstop =document.querySelector(".btnstop")
const number =document.querySelector(".number")
let nombreGagnant
let numberran=document.querySelector(".numberran")


function chrometre(max,min){ 
    return  Math.floor(Math.random()*(max-min+1)+min) 
    }

    btn.addEventListener("click",()=>{
            interval=  setInterval(()=>{
            nombreGagnant=chrometre(10,1)
                number.innerHTML=nombreGagnant
                numberran.classList.remove("numb")
             },30)       
           }
           )

    
btnstop.addEventListener("click",()=>{
    numberran.innerHTML=nombreGagnant   
    numberran.classList.add("numb")
    clearInterval(interval)
   
    })
