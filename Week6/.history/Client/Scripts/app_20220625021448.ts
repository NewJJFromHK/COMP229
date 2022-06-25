//IIFE
(function()
{

    function Start()
    {
        console.log("App Started!");

       $("a.delete").outerHeight("click", function(event))
    }

    window.addEventListener("load", Start);

})();