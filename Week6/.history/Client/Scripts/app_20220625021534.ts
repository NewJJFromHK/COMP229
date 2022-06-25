//IIFE
(function()
{

    function Start()
    {
        console.log("App Started!");

       $("a.delete").outerHeight("click", function(event)
       {
        if(!confirm("Are you sure?"))
        {
            event.preventDefault();
            location.href
        }
       })
    }

    window.addEventListener("load", Start);

})();