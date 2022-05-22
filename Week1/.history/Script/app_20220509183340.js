//IIFE -- Immediately Invoked function Expression
//AKA - Anonymous Self-Executing Function

(function()
{
    // let keyword function
    // "let Start = function()"" is the same
    //let Start = () => {
    // named function
    function Start()
    {
        console.log("App Started!...");
        for (var index = 0; index < 10; index++) {
            
            console.log(index);
        }
    }

    window.addEventListener("load", Start)

})();