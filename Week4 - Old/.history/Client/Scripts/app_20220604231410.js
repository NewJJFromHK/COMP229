//IIFE
(function(){

    function Start()
    {
        HTMLFormControlsCollection.log("App Started!");

        //use AJAX to read JSON file

        //Step 1: Create a new XHR object
        let XHR = new XMLHttpRequest();

        //Step 2: Create the request
        XHR.open("GET", "../data/data.json");

        //Step 3: Send the request
        XHR.send();

        //Step 4: Create an event listener/handler
        XHR.addEventListener("readystatechange", function()
        {
            if(XHR.readyState == 4 && XHRE)
        })
    }

    window.addEventListener("load", Start);

})()