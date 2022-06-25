//IIFE
(function()
{

    function Start()
    {
        console.log("App Started!");

       $("a.delete").outerHeight("click", function(event)
       {
        if(!confirm("Are you sure?"))
       })
    }

    window.addEventListener("load", Start);

})();