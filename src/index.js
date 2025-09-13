import "./styles.css";
import {mainCardDom, subCardDom} from "./dom";

const form = document.querySelector("form")
const cityName = document.getElementById("searchBar")
const contents = document.querySelector(".contents")
const clearDay = document.createElement("i")
clearDay.classList.add("fa-solid")
clearDay.classList.add("fa-sun")
const rain = document.createElement("i")
rain.classList.add("fa-solid")
rain.classList.add("fa-cloud-rain")
const cloud = document.createElement("i")
cloud.classList.add("fa-solid")
cloud.classList.add("fa-cloud")
const iconSun = "fa-sun"
const iconCloud = "fa-cloud"
const iconRain = "fa-cloud-rain"
const temperatureMeasureBtn = document.querySelector(".temperatureMeasureBtn")
let mainCardObject = {}
let subCardObject1 = {}
let subCardObject2 = {}
let subCardObject3 = {}
let subCardObject4 = {}

form.addEventListener("submit", (e)=>{
  e.preventDefault()
  const city = cityName.value
  createContents(city)
  cityName.value = ""
})


function createContents(city){
  let loader = `<div class="loader">Loading...<div>`
  contents.innerHTML = loader
  fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=JUMC6Z3TSW4APGUH9LF6MN4WD`)
    .then(function(response) {
      return response.json();
    })
     .then(function(response) {
      contents.innerHTML = ""
      mainCardObject = {}
      subCardObject1 = {}
      subCardObject2 = {}
      subCardObject3 = {}
      subCardObject4 = {}
      mainCardObject.condition = response.days[0].conditions
      mainCardObject.tempMin = response.days[0].tempmin
      mainCardObject.tempMax = response.days[0].tempmax
      mainCardObject.temp = response.days[0].temp
      mainCardObject.address = response.address
      mainCardObject.date = response.days[0].datetime
      if(response.days[0].conditions === "Clear"){
        const{mainCard, credits}=mainCardDom(clearDay, mainCardObject.condition,    mainCardObject.tempMin, mainCardObject.tempMax, mainCardObject.temp, contents, mainCardObject.address, mainCardObject.date)
        mainCard.classList.add("sunny-image")
        credits.innerHTML = `Photo by <a href="https://unsplash.com/pt-br/@themcny?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nic Y-C</a>`
        if(temperatureMeasureBtn.textContent === "ºC"){
          const tempMin = document.querySelector(".tempMin")
          const tempMax = document.querySelector(".tempMax")
          const temperature = document.querySelector(".temperature")
          const tempMinMain = Math.round((mainCardObject.tempMin-32)*5/9)
          const tempMaxMain = Math.round((mainCardObject.tempMax-32)*5/9)
          const temperatureMain = Math.round((mainCardObject.temp-32)*5/9)
          tempMin.textContent = `Minimum temperature: ${tempMinMain}ºC`
          tempMax.textContent = `Maximum temperature: ${tempMaxMain}ºC`
          temperature.textContent = `Average temperature: ${temperatureMain}ºC`
        }
      }
      else if(response.days[0].conditions === "Partially cloudy"){
        const{mainCard, credits}=mainCardDom(cloud, mainCardObject.condition,    mainCardObject.tempMin, mainCardObject.tempMax, mainCardObject.temp, contents, mainCardObject.address, mainCardObject.date)
        mainCard.classList.add("cloud-image")
        credits.innerHTML = `Photo by <a href="https://unsplash.com/pt-br/@billy_huy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Billy H.</a>`
        if(temperatureMeasureBtn.textContent === "ºC"){
          const tempMin = document.querySelector(".tempMin")
          const tempMax = document.querySelector(".tempMax")
          const temperature = document.querySelector(".temperature")
          const tempMinMain = Math.round((mainCardObject.tempMin-32)*5/9)
          const tempMaxMain = Math.round((mainCardObject.tempMax-32)*5/9)
          const temperatureMain = Math.round((mainCardObject.temp-32)*5/9)
          tempMin.textContent = `Minimum temperature: ${tempMinMain}ºC`
          tempMax.textContent = `Maximum temperature: ${tempMaxMain}ºC`
          temperature.textContent = `Average temperature: ${temperatureMain}ºC`
        }
      }
      else if(response.days[0].conditions === "Rain, Partially cloudy"){
        const{mainCard, credits}=mainCardDom(rain, mainCardObject.condition,    mainCardObject.tempMin, mainCardObject.tempMax, mainCardObject.temp, contents, mainCardObject.address, mainCardObject.date)
        mainCard.classList.add("rain-image")
        credits.innerHTML = `Photo by <a href="https://unsplash.com/pt-br/@wackeltin_meem?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Valentin M.</a>`
        if(temperatureMeasureBtn.textContent === "ºC"){
          const tempMin = document.querySelector(".tempMin")
          const tempMax = document.querySelector(".tempMax")
          const temperature = document.querySelector(".temperature")
          const tempMinMain = Math.round((mainCardObject.tempMin-32)*5/9)
          const tempMaxMain = Math.round((mainCardObject.tempMax-32)*5/9)
          const temperatureMain = Math.round((mainCardObject.temp-32)*5/9)
          tempMin.textContent = `Minimum temperature: ${tempMinMain}ºC`
          tempMax.textContent = `Maximum temperature: ${tempMaxMain}ºC`
          temperature.textContent = `Average temperature: ${temperatureMain}ºC`
        }
      }
      else if(response.days[0].conditions === "Rain, Overcast"){
        const{mainCard, credits}=mainCardDom(rain, mainCardObject.condition,    mainCardObject.tempMin, mainCardObject.tempMax, mainCardObject.temp, contents, mainCardObject.address, mainCardObject.date)
        mainCard.classList.add("rain-image")
        credits.innerHTML = `Photo by <a href="https://unsplash.com/pt-br/@wackeltin_meem?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Valentin M.</a>`
        if(temperatureMeasureBtn.textContent === "ºC"){
          const tempMin = document.querySelector(".tempMin")
          const tempMax = document.querySelector(".tempMax")
          const temperature = document.querySelector(".temperature")
          const tempMinMain = Math.round((mainCardObject.tempMin-32)*5/9)
          const tempMaxMain = Math.round((mainCardObject.tempMax-32)*5/9)
          const temperatureMain = Math.round((mainCardObject.temp-32)*5/9)
          tempMin.textContent = `Minimum temperature: ${tempMinMain}ºC`
          tempMax.textContent = `Maximum temperature: ${tempMaxMain}ºC`
          temperature.textContent = `Average temperature: ${temperatureMain}ºC`
        }
      }
      //1
      subCardObject1.tempMin = response.days[1].tempmin
      subCardObject1.tempMax = response.days[1].tempmax
      subCardObject1.address = response.address
      subCardObject1.date = response.days[1].datetime
      if(response.days[1].conditions === "Clear"){
        const{subCard, credits, minMax}=subCardDom(iconSun, subCardObject1.tempMin, subCardObject1.tempMax, contents, subCardObject1.address, subCardObject1.date)
        minMax.classList.add("minMax1")
        subCard.classList.add("sunny-image")
        credits.innerHTML = `Photo by <a href="https://unsplash.com/pt-br/@themcny?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nic Y-C</a>`
        if(temperatureMeasureBtn.textContent === "ºC"){
        const minMax1 = document.querySelector(".minMax1")
        const celsiusMin1 = Math.round((subCardObject1.tempMin-32)*5/9)
        const celsiusMax1 = Math.round((subCardObject1.tempMax-32)*5/9)
        minMax1.textContent = `${celsiusMin1}ºC / ${celsiusMax1}ºC`
        }
      }
      else if(response.days[1].conditions === "Partially cloudy"){
        const{subCard, credits, minMax}=subCardDom(iconCloud, subCardObject1.tempMin, subCardObject1.tempMax, contents, subCardObject1.address, subCardObject1.date)
        minMax.classList.add("minMax1")
        subCard.classList.add("cloud-image")
        credits.innerHTML = `Photo by <a href="https://unsplash.com/pt-br/@billy_huy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Billy H.</a>`
        if(temperatureMeasureBtn.textContent === "ºC"){
        const minMax1 = document.querySelector(".minMax1")
        const celsiusMin1 = Math.round((subCardObject1.tempMin-32)*5/9)
        const celsiusMax1 = Math.round((subCardObject1.tempMax-32)*5/9)
        minMax1.textContent = `${celsiusMin1}ºC / ${celsiusMax1}ºC`
    }
      }
      else if(response.days[1].conditions === "Rain, Partially cloudy"){
        const{subCard, credits, minMax}=subCardDom(iconRain, subCardObject1.tempMin, subCardObject1.tempMax, contents, subCardObject1.address, subCardObject1.date)
        minMax.classList.add("minMax1")
        subCard.classList.add("rain-image")
        credits.innerHTML = `Photo by <a href="https://unsplash.com/pt-br/@wackeltin_meem?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Valentin M.</a>`
        if(temperatureMeasureBtn.textContent === "ºC"){
        const minMax1 = document.querySelector(".minMax1")
        const celsiusMin1 = Math.round((subCardObject1.tempMin-32)*5/9)
        const celsiusMax1 = Math.round((subCardObject1.tempMax-32)*5/9)
        minMax1.textContent = `${celsiusMin1}ºC / ${celsiusMax1}ºC`
        }
      }
      else if(response.days[1].conditions === "Rain, Overcast"){
        const{subCard, credits, minMax}=subCardDom(iconRain, subCardObject1.tempMin, subCardObject1.tempMax, contents, subCardObject1.address, subCardObject1.date)
        minMax.classList.add("minMax1")
        subCard.classList.add("rain-image")
        credits.innerHTML = `Photo by <a href="https://unsplash.com/pt-br/@wackeltin_meem?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Valentin M.</a>`
        if(temperatureMeasureBtn.textContent === "ºC"){
        const minMax1 = document.querySelector(".minMax1")
        const celsiusMin1 = Math.round((subCardObject1.tempMin-32)*5/9)
        const celsiusMax1 = Math.round((subCardObject1.tempMax-32)*5/9)
        minMax1.textContent = `${celsiusMin1}ºC / ${celsiusMax1}ºC`
        }
      }
      //2
      subCardObject2.tempMin = response.days[2].tempmin
      subCardObject2.tempMax = response.days[2].tempmax
      subCardObject2.address = response.address
      subCardObject2.date = response.days[2].datetime
      if(response.days[2].conditions === "Clear"){
        const{subCard, credits, minMax}=subCardDom(iconSun, subCardObject2.tempMin, subCardObject2.tempMax, contents, subCardObject2.address, subCardObject2.date)
        minMax.classList.add("minMax2")
        subCard.classList.add("sunny-image")
        credits.innerHTML = `Photo by <a href="https://unsplash.com/pt-br/@themcny?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nic Y-C</a>`
        if(temperatureMeasureBtn.textContent === "ºC"){
        const minMax2 = document.querySelector(".minMax2")
        const celsiusMin2 = Math.round((subCardObject2.tempMin-32)*5/9)
        const celsiusMax2 = Math.round((subCardObject2.tempMax-32)*5/9)
        minMax2.textContent = `${celsiusMin2}ºC / ${celsiusMax2}ºC`
        }        
      }
      else if(response.days[2].conditions === "Partially cloudy"){
        const{subCard, credits, minMax}=subCardDom(iconCloud, subCardObject2.tempMin, subCardObject2.tempMax, contents, subCardObject2.address, subCardObject2.date)
        minMax.classList.add("minMax2")
        subCard.classList.add("cloud-image")
        credits.innerHTML = `Photo by <a href="https://unsplash.com/pt-br/@billy_huy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Billy H.</a>`
        if(temperatureMeasureBtn.textContent === "ºC"){
        const minMax2 = document.querySelector(".minMax2")
        const celsiusMin2 = Math.round((subCardObject2.tempMin-32)*5/9)
        const celsiusMax2 = Math.round((subCardObject2.tempMax-32)*5/9)
        minMax2.textContent = `${celsiusMin2}ºC / ${celsiusMax2}ºC`
        }  
      }
      else if(response.days[2].conditions === "Rain, Partially cloudy"){
        const{subCard, credits, minMax}=subCardDom(iconRain, subCardObject2.tempMin, subCardObject2.tempMax, contents, subCardObject2.address, subCardObject2.date)
        minMax.classList.add("minMax2")
        subCard.classList.add("rain-image")
        credits.innerHTML = `Photo by <a href="https://unsplash.com/pt-br/@wackeltin_meem?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Valentin M.</a>`
        if(temperatureMeasureBtn.textContent === "ºC"){
        const minMax2 = document.querySelector(".minMax2")
        const celsiusMin2 = Math.round((subCardObject2.tempMin-32)*5/9)
        const celsiusMax2 = Math.round((subCardObject2.tempMax-32)*5/9)
        minMax2.textContent = `${celsiusMin2}ºC / ${celsiusMax2}ºC`
        }  
      }
      else if(response.days[2].conditions === "Rain, Overcast"){
        const{subCard, credits, minMax}=subCardDom(iconRain, subCardObject2.tempMin, subCardObject2.tempMax, contents, subCardObject2.address, subCardObject2.date)
        minMax.classList.add("minMax2")
        subCard.classList.add("rain-image")
        credits.innerHTML = `Photo by <a href="https://unsplash.com/pt-br/@wackeltin_meem?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Valentin M.</a>`
        if(temperatureMeasureBtn.textContent === "ºC"){
        const minMax2 = document.querySelector(".minMax2")
        const celsiusMin2 = Math.round((subCardObject2.tempMin-32)*5/9)
        const celsiusMax2 = Math.round((subCardObject2.tempMax-32)*5/9)
        minMax2.textContent = `${celsiusMin2}ºC / ${celsiusMax2}ºC`
        }  
      }
      //3
      subCardObject3.tempMin = response.days[3].tempmin
      subCardObject3.tempMax = response.days[3].tempmax
      subCardObject3.address = response.address
      subCardObject3.date = response.days[3].datetime
      if(response.days[3].conditions === "Clear"){
        const{subCard, credits, minMax}=subCardDom(iconSun, subCardObject3.tempMin, subCardObject3.tempMax, contents, subCardObject3.address, subCardObject3.date)
        minMax.classList.add("minMax3")
        subCard.classList.add("sunny-image")
        credits.innerHTML = `Photo by <a href="https://unsplash.com/pt-br/@themcny?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nic Y-C</a>`
        if(temperatureMeasureBtn.textContent === "ºC"){
        const minMax3 = document.querySelector(".minMax3")
        const celsiusMin3 = Math.round((subCardObject3.tempMin-32)*5/9)
        const celsiusMax3 = Math.round((subCardObject3.tempMax-32)*5/9)
        minMax3.textContent = `${celsiusMin3}ºC / ${celsiusMax3}ºC`
        }  
      }
      else if(response.days[3].conditions === "Partially cloudy"){
        const{subCard, credits, minMax}=subCardDom(iconCloud, subCardObject3.tempMin, subCardObject3.tempMax, contents, subCardObject3.address, subCardObject3.date)
        minMax.classList.add("minMax3")
        subCard.classList.add("cloud-image")
        credits.innerHTML = `Photo by <a href="https://unsplash.com/pt-br/@billy_huy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Billy H.</a>`
        if(temperatureMeasureBtn.textContent === "ºC"){
        const minMax3 = document.querySelector(".minMax3")
        const celsiusMin3 = Math.round((subCardObject3.tempMin-32)*5/9)
        const celsiusMax3 = Math.round((subCardObject3.tempMax-32)*5/9)
        minMax3.textContent = `${celsiusMin3}ºC / ${celsiusMax3}ºC`
        } 
      }
      else if(response.days[3].conditions === "Rain, Partially cloudy"){
        const{subCard, credits, minMax}=subCardDom(iconRain, subCardObject3.tempMin, subCardObject3.tempMax, contents, subCardObject3.address, subCardObject3.date)
        minMax.classList.add("minMax3")
        subCard.classList.add("rain-image")
        credits.innerHTML = `Photo by <a href="https://unsplash.com/pt-br/@wackeltin_meem?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Valentin M.</a>`
        if(temperatureMeasureBtn.textContent === "ºC"){
        const minMax3 = document.querySelector(".minMax3")
        const celsiusMin3 = Math.round((subCardObject3.tempMin-32)*5/9)
        const celsiusMax3 = Math.round((subCardObject3.tempMax-32)*5/9)
        minMax3.textContent = `${celsiusMin3}ºC / ${celsiusMax3}ºC`
        } 
      }
      else if(response.days[3].conditions === "Rain, Overcast"){
        const{subCard, credits, minMax}=subCardDom(iconRain,  subCardObject3.tempMin, subCardObject3.tempMax, contents, subCardObject3.address, subCardObject3.date)
        minMax.classList.add("minMax3")
        subCard.classList.add("rain-image")
        credits.innerHTML = `Photo by <a href="https://unsplash.com/pt-br/@wackeltin_meem?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Valentin M.</a>`
        if(temperatureMeasureBtn.textContent === "ºC"){
        const minMax3 = document.querySelector(".minMax3")
        const celsiusMin3 = Math.round((subCardObject3.tempMin-32)*5/9)
        const celsiusMax3 = Math.round((subCardObject3.tempMax-32)*5/9)
        minMax3.textContent = `${celsiusMin3}ºC / ${celsiusMax3}ºC`
        } 
      }
      //4
      subCardObject4.tempMin = response.days[4].tempmin
      subCardObject4.tempMax = response.days[4].tempmax
      subCardObject4.address = response.address
      subCardObject4.date = response.days[4].datetime
      if(response.days[4].conditions === "Clear"){
        const{subCard, credits, minMax}=subCardDom(iconSun, subCardObject4.tempMin, subCardObject4.tempMax, contents, subCardObject4.address, subCardObject4.date)
        minMax.classList.add("minMax4")
        subCard.classList.add("sunny-image")
        credits.innerHTML = `Photo by <a href="https://unsplash.com/pt-br/@themcny?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nic Y-C</a>`
        if(temperatureMeasureBtn.textContent === "ºC"){
        const minMax4 = document.querySelector(".minMax4")
        const celsiusMin4 = Math.round((subCardObject4.tempMin-32)*5/9)
        const celsiusMax4 = Math.round((subCardObject4.tempMax-32)*5/9)
        minMax4.textContent = `${celsiusMin4}ºC / ${celsiusMax4}ºC`
        } 
      }
      else if(response.days[4].conditions === "Partially cloudy"){
        const{subCard, credits, minMax}=subCardDom(iconCloud,  subCardObject4.tempMin, subCardObject4.tempMax, contents, subCardObject4.address, subCardObject4.date)
        minMax.classList.add("minMax4")
        subCard.classList.add("cloud-image")
        credits.innerHTML = `Photo by <a href="https://unsplash.com/pt-br/@billy_huy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Billy H.</a>`
        if(temperatureMeasureBtn.textContent === "ºC"){
        const minMax4 = document.querySelector(".minMax4")
        const celsiusMin4 = Math.round((subCardObject4.tempMin-32)*5/9)
        const celsiusMax4 = Math.round((subCardObject4.tempMax-32)*5/9)
        minMax4.textContent = `${celsiusMin4}ºC / ${celsiusMax4}ºC`
        } 
      }
      else if(response.days[4].conditions === "Rain, Partially cloudy"){
        const{subCard, credits, minMax}=subCardDom(iconRain, subCardObject4.tempMin, subCardObject4.tempMax, contents, subCardObject4.address, subCardObject4.date)
        minMax.classList.add("minMax4")
        subCard.classList.add("rain-image")
        credits.innerHTML = `Photo by <a href="https://unsplash.com/pt-br/@wackeltin_meem?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Valentin M.</a>`
        if(temperatureMeasureBtn.textContent === "ºC"){
        const minMax4 = document.querySelector(".minMax4")
        const celsiusMin4 = Math.round((subCardObject4.tempMin-32)*5/9)
        const celsiusMax4 = Math.round((subCardObject4.tempMax-32)*5/9)
        minMax4.textContent = `${celsiusMin4}ºC / ${celsiusMax4}ºC`
        } 
      }
      else if(response.days[4].conditions === "Rain, Overcast"){
        const{subCard, credits, minMax}=subCardDom(iconRain, subCardObject4.tempMin, subCardObject4.tempMax, contents, subCardObject4.address, subCardObject4.date)
        minMax.classList.add("minMax4")
        subCard.classList.add("rain-image")
        credits.innerHTML = `Photo by <a href="https://unsplash.com/pt-br/@wackeltin_meem?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Valentin M.</a>`
        if(temperatureMeasureBtn.textContent === "ºC"){
        const minMax4 = document.querySelector(".minMax4")
        const celsiusMin4 = Math.round((subCardObject4.tempMin-32)*5/9)
        const celsiusMax4 = Math.round((subCardObject4.tempMax-32)*5/9)
        minMax4.textContent = `${celsiusMin4}ºC / ${celsiusMax4}ºC`
        } 
      }

    })
    .catch(error => {
      alert("The city you inserted is either invalid or doesn't exist. Try other")
      contents.innerHTML = "" 
    })  
}

temperatureMeasureBtn.addEventListener("click", ()=>{
  if(subCardObject1.date){
    if(temperatureMeasureBtn.textContent === "ºF"){
    temperatureMeasureBtn.textContent = "ºC"
    const minMax1 = document.querySelector(".minMax1")
    const celsiusMin1 = Math.round((subCardObject1.tempMin-32)*5/9)
    const celsiusMax1 = Math.round((subCardObject1.tempMax-32)*5/9)
    minMax1.textContent = `${celsiusMin1}ºC / ${celsiusMax1}ºC`
    
    const minMax2 = document.querySelector(".minMax2")
    const celsiusMin2 = Math.round((subCardObject2.tempMin-32)*5/9)
    const celsiusMax2 = Math.round((subCardObject2.tempMax-32)*5/9)
    minMax2.textContent = `${celsiusMin2}ºC / ${celsiusMax2}ºC`
    
    const minMax3 = document.querySelector(".minMax3")
    const celsiusMin3 = Math.round((subCardObject3.tempMin-32)*5/9)
    const celsiusMax3 = Math.round((subCardObject3.tempMax-32)*5/9)
    minMax3.textContent = `${celsiusMin3}ºC / ${celsiusMax3}ºC`
    
    const minMax4 = document.querySelector(".minMax4")
    const celsiusMin4 = Math.round((subCardObject4.tempMin-32)*5/9)
    const celsiusMax4 = Math.round((subCardObject4.tempMax-32)*5/9)
    minMax4.textContent = `${celsiusMin4}ºC / ${celsiusMax4}ºC`

    const tempMin = document.querySelector(".tempMin")
    const tempMax = document.querySelector(".tempMax")
    const temperature = document.querySelector(".temperature")
    const tempMinMain = Math.round((mainCardObject.tempMin-32)*5/9)
    const tempMaxMain = Math.round((mainCardObject.tempMax-32)*5/9)
    const temperatureMain = Math.round((mainCardObject.temp-32)*5/9)
    tempMin.textContent = `Minimum temperature: ${tempMinMain}ºC`
    tempMax.textContent = `Maximum temperature${tempMaxMain}ºC`
    temperature.textContent = `Average temperature: ${temperatureMain}ºC`

    }
    else{
      temperatureMeasureBtn.textContent = "ºF"
      const minMax1 = document.querySelector(".minMax1")
      minMax1.textContent = `${subCardObject1.tempMin}ºF / ${subCardObject1.tempMax}ºF`

      const minMax2 = document.querySelector(".minMax2")
      minMax2.textContent = `${subCardObject2.tempMin}ºF / ${subCardObject2.tempMax}ºF`

      const minMax3 = document.querySelector(".minMax3")
      minMax3.textContent = `${subCardObject3.tempMin}ºF / ${subCardObject3.tempMax}ºF`

      const minMax4 = document.querySelector(".minMax4")
      minMax4.textContent = `${subCardObject4.tempMin}ºF / ${subCardObject4.tempMax}ºF`

      const tempMin = document.querySelector(".tempMin")
      const tempMax = document.querySelector(".tempMax")
      const temperature = document.querySelector(".temperature")
      tempMin.textContent = `Minimum temperature: ${mainCardObject.tempMin}ºF`
      tempMax.textContent = `Maximum temperature: ${mainCardObject.tempMax}ºF`
      temperature.textContent = `Average temperature: ${mainCardObject.temp}ºF`
    }
  }
})