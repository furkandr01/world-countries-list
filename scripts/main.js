const CardListDOM = document.querySelector(".cards-list");
const searchInputDOM = document.querySelector("#search-input")
const startBtnDOM = document.querySelector(".start-button")
const searchBtnDOM = document.querySelector(".search-button")
const alfBtnDOM = document.querySelector(".az-button")
const sortAZ = document.querySelector(".bi-sort-alpha-down-alt")
const sortZA = document.querySelector(".bi-sort-alpha-down")
const infoStart = document.querySelector(".info-start-letter")
const infoContain = document.querySelector(".info-contain-letter")
const infoWrapper = document.querySelector(".info-wrapper")


searchBtnDOM.addEventListener("click", () => {
    searchInputDOM.addEventListener("input", e => {
        const value = e.target.value.toLowerCase()
        const filtered = countries.filter(country => country.toLowerCase().includes(value));
        searchUI(filtered);
        infoUI2(value)
    })    
})

startBtnDOM.addEventListener("click", () => {
    searchInputDOM.addEventListener("input", e => {
        const value = e.target.value.toLowerCase();
        const filtered = countries.filter(country => 
            country.toLowerCase().startsWith(value)
        );
        searchUI(filtered);
        infoUI(value)
    });
})

let alfClickCount = 0;

alfBtnDOM.addEventListener("click", () => {
    alfClickCount++;
    if(alfClickCount % 2 === 1){
        const sortedCountries = [...countries].sort((a, b) => a.localeCompare(b));
        searchUI(sortedCountries);
        sortAZ.style.display = "none";
        sortZA.style.display = "block";
    }else if(alfClickCount % 2 === 0){
        const sortedCountries = [...countries].sort((a, b) => b.localeCompare(a));
        searchUI(sortedCountries);
        sortAZ.style.display = "block";
        sortZA.style.display = "none";
    }
    
})


const searchUI = (searches) => {
    let result = "";
    searches.forEach(search => {
        result +=
        `
            <li class="card">${search}</li>
        `;
        CardListDOM.innerHTML = result;
    });
}

const infoUI = (info) => {
        infoWrapper.innerHTML = `
        <h4 class="info-start-letter">Countries start with <span style="color: red; text-transform: uppercase">${info}</span> : <span id="info-start-letter">${countries.filter(country => country.toLowerCase().startsWith(info.toLowerCase())).length}</span></h4>
        `; 
    }

const infoUI2 = (info) => {
        infoWrapper.innerHTML = `
        <h4 class="info-contain-letter">Countries containing <span style="color:purple; text-transform: uppercase">${info}</span> are <span id="info-contain-letter">${countries.filter(country => country.toLowerCase().includes(info.toLowerCase())).length}</span></h4>
        `; 
}


searchUI(countries);