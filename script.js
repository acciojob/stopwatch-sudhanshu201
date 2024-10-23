//your code here
let interval;

let m = document.getElementById("ms")
let s = document.getElementById("sec")
let mn = document.getElementById("min")
let h = document.getElementById("hr")

    

document.getElementById("start").addEventListener("click", ()=>{
    console.log("start button is pressed");
    let ms = Number(m.innerHTML);
    let sec = Number(s.innerHTML);
    let min = Number(mn.innerHTML);
    let hr  = Number(h.innerHTML);

    interval = setInterval(() => {
        ms += 1;
        if (ms < 100) {
            m.innerHTML = ms < 10 ? '0' + ms : ms;
        } else {
            ms = 0;
            m.innerHTML = '00'
            sec += 1;
            if (sec < 60) {
                s.innerHTML = sec < 10 ? '0' + sec : sec;
            } else {
                sec = 0;
                s.innerHTML = '00'
                min += 1;
                if (min < 60) {
                    mn.innerHTML = min < 10 ? '0' + min : min
                } else {
                    min = 0;
                    mn.innerHTML = '00'
                    hr += 1;
                    h.innerHTML = hr;
                }
            }
        }
    }, 10);  // Update every 10ms (for ms counter)
});

document.getElementById("pause").addEventListener("click", ()=>{
    clearInterval(interval)
})

document.getElementById("stop").addEventListener("click", ()=>{

    clearInterval(interval)
    m.innerHTML = '00'
    s.innerHTML = '00'
    mn.innerHTML= '00'
    h.innerHTML = '00'
})