// Access the Elements
// Accessed the display timer using DOM
let Display=document.querySelector('.DisplayTimer')
//Initialize the values to zero
let[hours, minutes, seconds, milliseconds]=[0,0,0,0]
let int=null

// START
document.getElementById('startBtn').addEventListener('click',()=>{
if (int!==null){
    clearInterval(int)
}
int=setInterval(DisplayTimer,10)
})

// STOP
document.getElementById('stopBtn').addEventListener('click',()=>{
    clearInterval(int)
    })

// RESET
document.getElementById('resetBtn').addEventListener('click',()=>{
    clearInterval(int)
    // [hours, minutes, seconds, milliseconds]=[0,0,0,0]
    Display.innerHTML=`00:00:00:00`
})

// display timer function
function DisplayTimer(){
    milliseconds++
    if(milliseconds==1000){
        milliseconds=0
        seconds++
        if (seconds==60){
            seconds=0
            minutes++
            if(minutes==60){
                minutes=0
                hours++
            }
        }
    }
    let h=hours<10?'0'+hours:hours
    let m=minutes<10?'0'+minutes:minutes
    let s=seconds<10?'0'+seconds:seconds
    let ms=milliseconds<10?'00'+milliseconds:milliseconds <100?'0'+milliseconds:milliseconds
    Display.innerHTML=`${h}:${m}:${s}:${ms}`
}