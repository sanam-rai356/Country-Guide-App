
let searchBtn = document.getElementById("search-btn");
let countryINP = document.getElementById("country-inp");
let result = document.getElementById("result");
console.log(result)

searchBtn.addEventListener("click", async()=>{
    let countryname = countryINP.value;
    let finalurl = `https://restcountries.com/v3.1/name/${countryname}?fullText=true`;
    let response = await fetch(finalurl);
    let data = await response.json();
    /*
    console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
    console.log(Object.values(data[0].languages).toString().split(",").join(", "));
    console.log(data[0].capital[0]);
    console.log(data[0].flags.svg);
    console.log(data[0].name.common);
    console.log(data[0].continents[0]);
    */

    result.innerHTML=
    `
    <img src="${data[0].flags.svg}" class="flag-img">
    <h2>${data[0].name.common}</h2>
    <div class="wrapper">
        <div class="data-wrapper">
            <h4>Capital: </h4>
            <span> ${data[0].capital[0]}</span>
        </div>
    </div>

    <div class="wrapper">
        <div class="data-wrapper">
            <h4>Continent: </h4>
            <span>${data[0].continents[0]}</span>
        </div>
    </div>

    <div class="wrapper">
        <div class="data-wrapper">
            <h4>Population: </h4>
            <span>${data[0].population}</span>
        </div>
    </div>

    <div class="wrapper">
        <div class="data-wrapper">
            <h4>Currency: </h4>
            <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
        </div>
    </div>

    <div class="wrapper">
        <div class="data-wrapper">
            <h4>Common Languges: </h4>
            <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
        </div>
    </div>

    `
})




// let detail = {
//     name:'sanam',
//     age:25,
// }

// console.log(detail["name"])
