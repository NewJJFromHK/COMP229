//IIFE -- Immediately Invoked function Expression
//AKA - Anonymous Self-Executing Function

(function()
{
    //
    function Start()
    {
        console.log("My App Started!...");
    }

    window.addEventListener("load", Start)

})();