let cardsWrapper = document.getElementById("cards-wrapper");

let pageUp = document.getElementById("page-up");

let pageDown = document.getElementById("page-down");

let pageCounter = 1;

let pageCounterText = document.createElement("p");

let resultsText = document.createElement("p");

let resultsLength;

let cardNameSearch = document.getElementById("card-name-search");

let cardSearchSubmit = document.getElementById("search-submit");

let cardSetSearch = document.getElementById("set-name-search");

let allSearchBoxInputs = document.getElementsByTagName("input");

let commonBox = document.getElementById("common-box");

let uncommonBox = document.getElementById("uncommon-box");

let rareBox = document.getElementById("rare-box");

let mythicBox = document.getElementById("mythic-box");

let resetButton = document.getElementById("reset-button");

let showFilters = document.getElementById("show-filter");

let filterWrapper = document.getElementById("main-filter-wrapper");

// Setting default load to Return to Ravnica
// cardSetSearch.value = "LEA";

// Below are URL specific search strings

let tcgURL = "https://shop.tcgplayer.com/magic/product/show?newSearch=false&ProductType=All&IsProductNameExact=false&ProductName=";

let defaultURL = "https://api.magicthegathering.io/v1/cards?";

let searchByPage = "&page=";

let searchByCardName = "&name=";

let searchBySetName = "&set=";

let masterURL = `${defaultURL}${searchByPage+pageCounter}${searchByCardName+cardNameSearch.value}${searchBySetName+cardSetSearch.value}`;


// --------------------------------------------------------------- // 

function masterUrlRefresh() {
    masterURL = `${defaultURL}${searchByPage+pageCounter}${searchByCardName+cardNameSearch.value}${searchBySetName+cardSetSearch.value}`;
};

// Setting pagedown to disabled, will change when not on page 1
pageDown.disabled = true;

// Page counter init
pageCounterText.innerText = `Page: ${pageCounter}`;
pageCounterText.id = "page-counter-text";
document.getElementById("page-wrapper").appendChild(pageCounterText);

// Setting results ID
resultsText.id = "results-text";

// Page Down Disabled Function
function pageDownDisabled() {
    if (pageCounter == 1) {
        pageDown.disabled = true;
    } else {
        pageDown.disabled = false;
    }
};

// Removes old cards
function removeOldChildren() {
    let removeChildren = cardsWrapper.children;
    for (let i = removeChildren.length - 1; i > -1; i--) {
        removeChildren[i].remove();
    }
}

// Main Submit Function
function mainSubmitFunct(e) {    

    // Changes page counter and updates text
    pageCounter = 1;
    pageCounterText.innerText = `Page: ${pageCounter}`;
    pageDownDisabled();

    removeOldChildren();

    let req = new XMLHttpRequest();

    req.addEventListener("progress", function(e) {
        console.log(e.loaded);
    });

    req.addEventListener("error", function(e) {
        console.log(e.status);
    });

    req.addEventListener("load", function(e) {
        let response = JSON.parse(req.responseText);

        // Main for loop for filtering rarity
        for (let i = 0; i < response.cards.length; i++) {
            if (commonBox.checked === true) {
                if (response.cards[i].rarity === "Common" && response.cards[i].rarity != "Uncommon" ) {
                    let resultHTML = `<a href="${tcgURL+(response.cards[i].name)}" target="_blank"><img src="${response.cards[i].imageUrl}"></a>`;
                    cardsWrapper.innerHTML += resultHTML;
                };
            };
            if (uncommonBox.checked === true) {
                if (response.cards[i].rarity === "Uncommon" && response.cards[i].rarity != "Common" ) {
                    let resultHTML = `<a href="${tcgURL+(response.cards[i].name)}" target="_blank"><img src="${response.cards[i].imageUrl}"></a>`;
                    cardsWrapper.innerHTML += resultHTML;
                };
            };
            if (rareBox.checked === true) {
                if (response.cards[i].rarity === "Rare") {
                    let resultHTML = `<a href="${tcgURL+(response.cards[i].name)}" target="_blank"><img src="${response.cards[i].imageUrl}"></a>`;
                    cardsWrapper.innerHTML += resultHTML;
                };
            };
            if (mythicBox.checked === true) {
                if (response.cards[i].rarity === "Mythic Rare") {
                    let resultHTML = `<a href="${tcgURL+(response.cards[i].name)}" target="_blank"><img src="${response.cards[i].imageUrl}"></a>`;
                    cardsWrapper.innerHTML += resultHTML;
                };
            };
            if (commonBox.checked === false && uncommonBox.checked === false && rareBox.checked === false && mythicBox.checked === false) {
                if (response.cards[i].imageUrl) {
                    let resultHTML = `<a href="${tcgURL+(response.cards[i].name)}" target="_blank"><img src="${response.cards[i].imageUrl}"></a>`;
                    cardsWrapper.innerHTML += resultHTML;
                };
            };
        };

        // Updates Number of Results
        resultsLength = cardsWrapper.children.length;

        resultsText.innerText = `Results: ${resultsLength}`;
        document.getElementById("card-name-search-wrapper").appendChild(resultsText);     

    });

    masterUrlRefresh();

    req.open("GET", masterURL);

    req.send()
    
};

// Home page + Default Load
function firstLoad () {
    console.log("test")

    let req = new XMLHttpRequest();

    req.addEventListener("progress", function(e) {
        console.log(e.loaded);
        // target.innerText = "Loading...";
    });

    req.addEventListener("error", function(e) {
        console.log(e.status);
        // target.innerText = "Cannot load quote. Try again later!";
    });

    req.addEventListener("load", function(e) {
        let response = JSON.parse(req.responseText);

        for (let i = 0; i < response.cards.length; i++) {
            if (response.cards[i].imageUrl) {
                let resultHTML = `<a href="${tcgURL+(response.cards[i].name)}" target="_blank"><img src="${response.cards[i].imageUrl}"></a>`;
                cardsWrapper.innerHTML += resultHTML;
            }
        };

        resultsLength = cardsWrapper.children.length;

        resultsText.innerText = `Results: ${resultsLength}`;
        document.getElementById("card-name-search-wrapper").appendChild(resultsText);   
    });

    req.open("GET", masterURL);

    req.send()

};

// --------------------------------------------------------------- // 

firstLoad();

// Page up event listener
pageUp.addEventListener("click", function(e) {

    // Changes page counter and updates text
    pageCounter++;
    pageCounterText.innerText = `Page: ${pageCounter}`;
    pageDownDisabled();

    removeOldChildren();

    let req = new XMLHttpRequest();

    req.addEventListener("progress", function(e) {
        console.log(e.loaded);
    });
    req.addEventListener("error", function(e) {
        console.log(e.status);
    });
    req.addEventListener("load", function(e) {
        let response = JSON.parse(req.responseText);

        // Main for loop for filtering rarity
        for (let i = 0; i < response.cards.length; i++) {
            if (commonBox.checked === true) {
                if (response.cards[i].rarity === "Common" && response.cards[i].rarity != "Uncommon" ) {
                    let resultHTML = `<a href="${tcgURL+(response.cards[i].name)}" target="_blank"><img src="${response.cards[i].imageUrl}"></a>`;
                    cardsWrapper.innerHTML += resultHTML;
                };
            };
            if (uncommonBox.checked === true) {
                if (response.cards[i].rarity === "Uncommon" && response.cards[i].rarity != "Common" ) {
                    let resultHTML = `<a href="${tcgURL+(response.cards[i].name)}" target="_blank"><img src="${response.cards[i].imageUrl}"></a>`;
                    cardsWrapper.innerHTML += resultHTML;
                };
            };
            if (rareBox.checked === true) {
                if (response.cards[i].rarity === "Rare") {
                    let resultHTML = `<a href="${tcgURL+(response.cards[i].name)}" target="_blank"><img src="${response.cards[i].imageUrl}"></a>`;
                    cardsWrapper.innerHTML += resultHTML;
                };
            };
            if (mythicBox.checked === true) {
                if (response.cards[i].rarity === "Mythic Rare") {
                    let resultHTML = `<a href="${tcgURL+(response.cards[i].name)}" target="_blank"><img src="${response.cards[i].imageUrl}"></a>`;
                    cardsWrapper.innerHTML += resultHTML;
                };
            };
            if (commonBox.checked === false && uncommonBox.checked === false && rareBox.checked === false && mythicBox.checked === false) {
                if (response.cards[i].imageUrl) {
                    let resultHTML = `<a href="${tcgURL+(response.cards[i].name)}" target="_blank"><img src="${response.cards[i].imageUrl}"></a>`;
                    cardsWrapper.innerHTML += resultHTML;
                };
            };
        };

        // Updates Number of Results
        resultsLength = cardsWrapper.children.length;

        resultsText.innerText = `Results: ${resultsLength}`;
        document.getElementById("card-name-search-wrapper").appendChild(resultsText);     

    });

    masterUrlRefresh();

    req.open("GET", masterURL);

    req.send();
});

// Page down event listener (copy of page up)
pageDown.addEventListener("click", function(e) {

    // Changes page counter and updates text
    pageCounter--;
    pageCounterText.innerText = `Page: ${pageCounter}`
    pageDownDisabled();

    removeOldChildren();

    let req = new XMLHttpRequest();

    req.addEventListener("progress", function(e) {
        console.log(e.loaded);
    });
    req.addEventListener("error", function(e) {
        console.log(e.status);
    });
    req.addEventListener("load", function(e) {
        let response = JSON.parse(req.responseText);

        // Main for loop for filtering rarity
        for (let i = 0; i < response.cards.length; i++) {
            if (commonBox.checked === true) {
                if (response.cards[i].rarity === "Common" && response.cards[i].rarity != "Uncommon" ) {
                    let resultHTML = `<a href="${tcgURL+(response.cards[i].name)}" target="_blank"><img src="${response.cards[i].imageUrl}"></a>`;
                    cardsWrapper.innerHTML += resultHTML;
                };
            };
            if (uncommonBox.checked === true) {
                if (response.cards[i].rarity === "Uncommon" && response.cards[i].rarity != "Common" ) {
                    let resultHTML = `<a href="${tcgURL+(response.cards[i].name)}" target="_blank"><img src="${response.cards[i].imageUrl}"></a>`;
                    cardsWrapper.innerHTML += resultHTML;
                };
            };
            if (rareBox.checked === true) {
                if (response.cards[i].rarity === "Rare") {
                    let resultHTML = `<a href="${tcgURL+(response.cards[i].name)}" target="_blank"><img src="${response.cards[i].imageUrl}"></a>`;
                    cardsWrapper.innerHTML += resultHTML;
                };
            };
            if (mythicBox.checked === true) {
                if (response.cards[i].rarity === "Mythic Rare") {
                    let resultHTML = `<a href="${tcgURL+(response.cards[i].name)}" target="_blank"><img src="${response.cards[i].imageUrl}"></a>`;
                    cardsWrapper.innerHTML += resultHTML;
                };
            };
            if (commonBox.checked === false && uncommonBox.checked === false && rareBox.checked === false && mythicBox.checked === false) {
                if (response.cards[i].imageUrl) {
                    let resultHTML = `<a href="${tcgURL+(response.cards[i].name)}" target="_blank"><img src="${response.cards[i].imageUrl}"></a>`;
                    cardsWrapper.innerHTML += resultHTML;
                };
            };
        };

        // Updates Number of Results
        resultsLength = cardsWrapper.children.length;

        resultsText.innerText = `Results: ${resultsLength}`;
        document.getElementById("card-name-search-wrapper").appendChild(resultsText);     

    });

    masterUrlRefresh();

    req.open("GET", masterURL);

    req.send();

});

// Main Search Listener
cardSearchSubmit.addEventListener("click", function(e) {
    mainSubmitFunct();
});

// Used to listen for the enter key
for (i = 0; i < allSearchBoxInputs.length; i++) {
    allSearchBoxInputs[i].addEventListener("keydown", function(e) {
        if (e.keyCode === 13) {
            cardSearchSubmit.click();
        }
    });
}

// Master Reset listener
resetButton.addEventListener("click", function(e) {
    for (i = 0; i < allSearchBoxInputs.length; i++) {
        allSearchBoxInputs[i].value = "";
        allSearchBoxInputs[i].checked = false;
    };
});

// Display Filters
showFilters.addEventListener("click", function(e) {
    console.log(filterWrapper.classList.value)
    if (filterWrapper.className === "unclicked") {
        filterWrapper.classList.add("clicked");
        filterWrapper.classList.remove("unclicked")
        cardsWrapper.classList.add("clicked");
        cardsWrapper.classList.remove("unclicked")
        showFilters.innerText = "Hide Filter";
    } else {
        filterWrapper.classList.remove("clicked");
        filterWrapper.classList.add("unclicked");
        cardsWrapper.classList.remove("clicked");
        cardsWrapper.classList.add("unclicked");
        showFilters.innerText = "Show Filter";
    };

});