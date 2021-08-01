let greeting = ["おはよう", "こんにちは", "こんばんは"];
let currentDate = new Date();
let hours = currentDate.getHours()
let titleEl = document.getElementById("title")

//takes users time in hours and changes japanese greeting in the title accordingly
function titleGreet(time, greeting){
    if(time <= 12){
        titleEl.innerHTML = greeting[0]
    }
    else if(time <= 18){
        titleEl.innerHTML = greeting[1]
    }
    else{
        titleEl.innerHTML = greeting[2]
    } 
}

titleGreet(hours, greeting);

