let popbutton = document.querySelector("#popbutton")

popbutton.addEventListener("click", e => {
    console.log("pop button clicked!")
    if(popbutton.classList.add("active")){
        popbutton.classList.remove("active")
    }else{
        popbutton.classList.add("active")
    }
})

let bigbutton = document.querySelector("#bigbutton")

bigbutton.addEventListener("click", e => {
    console.log("big button clicked!")
    if(bigbutton.classList.add("active")){
        bigbutton.classList.remove("active")
    }else{
        bigbutton.classList.add("active")
    }
})

let fancybutton = document.querySelector("#fancybutton")

fancybutton.addEventListener("click", e => {
    console.log("fancy button clicked!")
    if(fancybutton.classList.add("active")){
        fancybutton.classList.remove("active")
    }else{
        fancybutton.classList.add("active")
    }
})

let negativebutton = document.querySelector("#negativebutton")

negativebutton.addEventListener("click", e => {
    console.log("negative button clicked!")
    if(negativebutton.classList.add("active")){
        negativebutton.classList.remove("active")
    }else{
        negativebutton.classList.add("active")
    }
})

let makebutton = document.querySelector("#makebutton")

makebutton.addEventListener("click", e => {
    console.log("make button clicked!")
    if(makebutton.classList.add("active")){
        makebutton.classList.remove("active")
    }else{
        makebutton.classList.add("active")
    }
})

