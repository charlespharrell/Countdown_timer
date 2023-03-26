


const card = ()=>{
    const future = new Date('March 5, 2024 00:00:00').getTime()
    const now = new Date().getTime();
    const gap = future - now
    // console.log(gap)

    let second = 1000;
    let minute = 60 * second;
    let hour = 60 * minute;
    let day = 24 * hour;

    let textDay = Math.floor((gap/day))
    let textHour = Math.floor((gap%day)/hour);
    let textMinute = Math.floor((gap%hour)/minute);
    let textSecond = Math.floor((gap%minute)/second)

     document.getElementById('days').innerText = textDay 
       document.getElementById('hours').innerText = textHour
      document.getElementById('minutes').innerText = textMinute
     document.getElementById('seconds').innerText =textSecond 

    
}
setInterval(card, 1000)
