var deaths = document.getElementsByClassName('deaths')
var deathsRepresented = document.getElementById('deaths-represented')
var numRows = document.getElementById('num-rows')
var rows = document.getElementById('rows')
var request = new XMLHttpRequest()

request.open('GET', 'https://api.covidtracking.com/v1/us/current.json', true)
request.onload = function () {
    // Parse JSON data
    var data = JSON.parse(this.response)[0]

    // Declare and initialize variables for deaths and number of rows
    var covidDeaths = data.death
    var septElevenDeaths = 2977
    var numberOfRows = Math.floor(covidDeaths/septElevenDeaths)

    // Set deaths, deaths represented, and number of rows
    deaths[0].innerHTML = deaths[1].innerHTML = Number(covidDeaths).toLocaleString('en')
    deathsRepresented.innerHTML = Number(numberOfRows*septElevenDeaths).toLocaleString('en')
    numRows.innerHTML = numberOfRows

    // Generate rows
    for (i = 0; i < numberOfRows; i++) {
        var row = document.createElement('div')
        row.className = 'row'
        row.innerHTML = '<p>' + Number((i+1)*2977).toLocaleString('en') + '</p>'
        rows.appendChild(row);
    }
}
request.send()