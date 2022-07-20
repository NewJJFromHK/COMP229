//IIFE
(function()
{

    function Start()
    {
        console.log("App Started!");

       $("a.delete").outerHeight("click", function(event)
       {
        if(!confirm(""))
       })
    }

    window.addEventListener("load", Start);

})();