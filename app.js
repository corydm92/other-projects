// Used to pull all of the querys specified
var newVar = document.querySelectorAll('element');


// Used to iterate through 
Array.from(newVar).forEach(function(newVar){
    console.log(newVar)
})


// If querey selector is a NodeList instead of HTML collection no need to make an array. 
// Only valid if using querySelector, doesn't work for getElementsByClassName etc.
newVar.forEach(function(newVar){
    console.log(newVar)
})