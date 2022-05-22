//IIFE -- Immediately Invoked function Expression
//AKA - Anonymous Self-Executing Function

(function()
{
    // nm
    function Start()
    {
        console.log("My App Started!...");
    }

    window.addEventListener("load", Start)

})();