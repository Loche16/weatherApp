function mainCardDom(weather, cond, min, max, temp, contents, address, datetime){
  const mainCard = document.createElement("div")
  mainCard.classList.add("mainCard")
  contents.appendChild(mainCard)

    const conditionContainer = document.createElement("div")
    conditionContainer.classList.add("conditionContainer")
    mainCard.appendChild(conditionContainer)
    
      const conditionIcon = document.createElement("div")
      conditionIcon.appendChild(weather)
      conditionContainer.appendChild(conditionIcon)

      const condition = document.createElement("div")
      condition.textContent = `${cond}`
      conditionContainer.appendChild(condition)

    const statsContainer = document.createElement("div")
    statsContainer.classList.add("statsContainer")
    mainCard.appendChild(statsContainer)
    
      const tempMin = document.createElement("div")
      tempMin.textContent = `Minimum temperature: ${min}ªF`
      tempMin.classList.add("tempMin")
      statsContainer.appendChild(tempMin)

      const tempMax = document.createElement("div")
      tempMax.textContent = `Maximum temperature: ${max}ªF`
      tempMax.classList.add("tempMax")
      statsContainer.appendChild(tempMax)

      const temperature = document.createElement("div")
      temperature.textContent = `Average temperature: ${temp}ºF`
      temperature.classList.add("temperature")
      statsContainer.appendChild(temperature)

      const dateTime = document.createElement("div")
      dateTime.textContent = `${address}: ${datetime} `
      statsContainer.appendChild(dateTime)

      const credits = document.createElement("div")
      statsContainer.appendChild(credits)

      return{mainCard, credits, tempMin, tempMax, temp}
}

function subCardDom(icon, min, max, contents, address, time){
  const subCard = document.createElement("div")
  subCard.classList.add("subCard")
  contents.appendChild(subCard)

    const temperaturesContainer = document.createElement("div")
    temperaturesContainer.classList.add("temperaturesContainer")
    subCard.appendChild(temperaturesContainer)

      const weatherIcon = document.createElement("i")
      weatherIcon.classList.add("fa-solid")
      weatherIcon.classList.add(`${icon}`)
      temperaturesContainer.appendChild(weatherIcon)

      const minMax = document.createElement("div")
      minMax.textContent = `${min}ºF / ${max}ºF`
      temperaturesContainer.appendChild(minMax)

    const dateTime = document.createElement("div")
    dateTime.textContent = `${address}: ${time}`
    subCard.appendChild(dateTime)

    const credits = document.createElement("div")
    subCard.appendChild(credits)

  return{subCard, credits, minMax}  
}

export{mainCardDom, subCardDom}