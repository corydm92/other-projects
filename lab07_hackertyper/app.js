let scriptList = [
    "let urlList = [\"https://www.google.com/\", \"https://www.wikipedia.org/\",\n",
    
    "\"https://www.cnn.com/\", \"https://www.facebook.com/\"]\n",
    
    "\n",

    "function randomNum() {\n",

    "\tlet x = Math.floor(Math.random() * urlList.length);\n",

    "\treturn x;\n",

    "}\n",

    "\n",

    "// Version 1\n",

    "\n",

    "// setInterval(function() {\n",

    "//     let testy = urlList[randomNum()];\n",

    "//     window.location = testy;\n",

    "// }, 5000);\n",

    "\n",

    "// Version 2\n",

    "\n",

    "let counter = 5;\n",

    "\n",

    "let interval = setInterval(function() {\n",

    "\n",

    "    let parent = document.getElementById(\"h1-wrapper\");\n",

    "    let elementExists = document.getElementById(\"h1\");\n",

    "\n",

    "        if (elementExists === null) {\n",

    "            var countDown = document.createElement(\"h1\");\n",

    "            countDown.id = \"h1\"\n",

    "            countDown.textContent = `Page change in ${counter} seconds.`;\n",

    "            parent.appendChild(countDown);\n",

    "        } else {\n",

    "            document.getElementById(\"h1\").remove();\n",

    "            var countDown = document.createElement(\"h1\");\n",

    "            countDown.id = \"h1\"\n",

    "            countDown.textContent = `Page change in ${counter} seconds.`;\n",

    "            parent.appendChild(countDown);\n",

    "        }\n",

    "\n",

    "\n",

    "    (counter);\n",

    "    counter -= 1;\n",

    "\n",

    "    if (counter === 0) {\n",

    "        let testy = urlList[randomNum()];\n",

    "        window.location = testy;\n",

    "    }\n",

    "\n",

    "}, 1000);\n",

    "\n",

    "\n",

    "\n",

    "\n",

    "\n",

]
let counter = 0;

let popupCounter = 0;

let virusCounter = 0;

let virusPopup = document.getElementById("virus-detected");

let bodyVar = document.getElementById("html");

let newSentance = document.createElement("pre");

document.getElementById("main-div").appendChild(newSentance);

function randomNum() {
    let randomNum = Math.floor(Math.random() * scriptList.length);
    return randomNum;
}

function hipsterGen() {
    return scriptList[randomNum()]
}

virusPopup.style.display = "none"

bodyVar.addEventListener("keypress", function(e) {

    newSentance.innerText += scriptList[counter];

    counter++;

    if (counter === scriptList.length) {
        counter = 0;
        popupCounter++;
    }

    if (popupCounter === 2) {
        let popupHacker = document.createElement("h1");
        popupHacker.classList.add("grow");
        popupHacker.innerText = "HACKING ACTIVATED";
        document.getElementById("footer").appendChild(popupHacker);
        popupCounter = 0;
    };

    window.scrollBy(0, 100);
    
})

bodyVar.addEventListener("keypress", function(e) {
    if (e.which === 49) {
        virusCounter++;
    };

    if (virusCounter === 3) {
        let virusInterval = setInterval(function() {
            if (virusPopup.style.display === "block") {
                virusPopup.style.display = "none";
            } else if (virusPopup.style.display === "none") {
                virusPopup.style.display = "block";
            }
            virusCounter = 0;
        }, 500);
    }
});

document.onkeypress = function(myEvent) { // doesn't have to be "e"
    (myEvent.which);
};


// function popuponclick()
//    {
//       my_window = window.open("",
//        "mywindow","status=1,width=350,height=150");
 
//       my_window.document.write('<h1>The Popup Window</h1>');
//    }
 
//    function closepopup()
//    {
//       if(false == my_window.closed)
//       {
//          my_window.close ();
//       }
//       else
//       {
//          alert('Window already closed!');
//       }
//    }
