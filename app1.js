var button=document.getElementById('button')

var inputvalue=document.getElementById('inputvalue')

var displayDiv=document.getElementById('displayDiv')

let forecast ="";
button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid=3b5bf9fff32fbb83f6be69df59404dfe')
    .then(Response=>Response.json())
    .then(data=>{
        displayDiv.innerHTML = `Temperature - ${(data.main.temp-273.15).toFixed(2)} &#176; C<br>
        Temperature_min - ${(data.main.temp_min-273.15).toFixed(2)} &#176; C<br>
        Temperature_max - ${(data.main.temp_max-273.15).toFixed(2)} &#176; C<br>
        Pressure - ${data.main.pressure} hPa<br>
        Humidity - ${data.main.humidity} %<br>Wind_Speed - ${data.wind.speed} m/s<br>
        Country - ${data.sys.country}`;
        
    }
    )
    
    .catch(err=>alert("Invalid"));
})