
var target = document.querySelector('.search_city');
var btn = document.querySelector('.btn_submit');
var name = document.querySelector('.city');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
let obj = null;
btn.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+target.value+'&appid=7a25bbd11c284472aad648022cb64e8a')
    .then(response => response.json())
    .then(data => console.log(data))
    
    .catch(err => alert("Wrong City Name!"))
});

//Other API consume 


 /*
 https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&
exclude=hourly,daily&appid={YOUR API KEY}
 */

/*
http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=60.99&lon=30.9&dt=1586468027&appid={YOUR API KEY}
*/