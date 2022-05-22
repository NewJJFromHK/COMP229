//IIFE -- Immediately Invoked function Expression
//AKA - Anonymous Self-Executing Function

(function()
{
    // 
    // "let Start = function()"" is the same
    // named function
    function Start()
    {
        console.log("My App Started!...");
    }

    window.addEventListener("load", Start)

})();