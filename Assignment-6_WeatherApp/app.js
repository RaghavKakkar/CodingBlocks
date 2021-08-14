const form=document.querySelector("form");
const list=document.getElementById("list");
const apiKey="2ee8749e06f71473871951cb7f16ef09";

async function getWeather(searchText){
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${apiKey}`;
    const res= await axios.get(url);
    
    const data=res.data;
    console.log(data);
    const name= document.createElement("li");
    name.innerText=data.name;
    list.append(name);

    const date=Date().split(" ");
    const dateDay=document.createElement("li");
    dateDay.innerText=date[2]+" "+date[1]+" ("+date[0]+") "+date[3];
    list.append(dateDay);

    const temprature = document.createElement("li");
    temprature.innerText=(data.main.temp-273).toFixed(1) + "\xB0"+" C";
    list.append(temprature);

    const minMaxTemp = document.createElement("li");
    minMaxTemp.innerText = (data.main.temp_min-273).toFixed(1) +"\xB0"+" C (min)/ "+((data.main.temp_max-273).toFixed(1)) +"\xB0"+" C (max)";
    list.append(minMaxTemp);

    const visibility = document.createElement("li");
    visibility.innerText = (data.visibility)/1000 + "Km";
    list.append(visibility);

    const weather = document.createElement("li");
    weather.innerText = (data.weather[0].description).toUpperCase();
    list.append(weather);
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const searchText = form.elements[0].value;

    while(list.childElementCount!=0){
        list.removeChild(list.lastChild);
    }

    getWeather(searchText)
    .catch((e)=>{
        // alert("Please enter the correct city name.");
        console.log(e);
    });

    form.elements[0].value="";
})
