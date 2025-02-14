const apikey = 'cf26254cbe9197997a2d2972fb82ac84';

let weatherForm = document.querySelector(".weatherForm");
let cardDisplay = document.getElementById("card");
let cit = document.getElementById("city");
let city;

weatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    city = cit.value;

    if(city){
        try{
            let weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError('please enter city name');
    }

});

function displayWeatherInfo(data){
    console.log(data);

    const {name: city,
           main: {temp, humidity},
           weather: [{id, description}]
    } = data;

    const cityDisplay = document.createElement("h1");
    cityDisplay.textContent = city;

    const tempDisplay = document.createElement("h3");
    tempDisplay.textContent = `Temperature: ${(temp-273.15).toFixed(2)}°C`;

    const humid = document.createElement("h3");
    humid.textContent = `Humidity: ${humidity}`;

    const weatherId = document.createElement("h3");
    weatherId.textContent = weatherImoji(id);
    weatherId.style.fontSize = "100px";

    const desc = document.createElement("h3");
    desc.textContent = description;

    cardDisplay.style.display = "flex";
    cardDisplay.textContent = "";

    cardDisplay.appendChild(cityDisplay);
    cardDisplay.appendChild(tempDisplay);
    cardDisplay.appendChild(humid);
    cardDisplay.appendChild(weatherId);
    cardDisplay.appendChild(desc);
}

function weatherImoji(input){
    switch(true){
        case (input>=200 && input<=250):
            return `⛈️`;
            break;
        case (input>=300 && input<=350):
            return `🌧️`;
            break;
        case (input>=500 && input<=550):
            return `🌧️`;
            break;
        case (input>=600 && input<=650):
            return `🌨️`;
            break;
        case (input>=701 && input<=790):
            return `🍃`;
            break;
        case (input == 800):
            return `🌅`;
            break;
        case (input>=801 && input<=805):
            return `☁️`;
            break;
        default:
            return `❓`;

    }
}
async function getWeatherData(cityName){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`;
    
    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error(`Couldn't fetch data`);
    }
    
    return await response.json();

}

function displayError(message){
    let displayMessage = document.createElement("h2");
    displayMessage.textContent = message;

    cardDisplay.style.display = "flex";
    cardDisplay.textContent = "";
    cardDisplay.appendChild(displayMessage);
}
