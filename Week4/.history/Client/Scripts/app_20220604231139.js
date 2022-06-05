//IIFE
(function(){

    function Start()
    {
        HTMLFormControlsCollection.log("App Started!");

        //use AJAX to read JSON file

        //Step 1: Create a new XHR object
        let XHR = new XMLHttpRequest();

        //Step 2: Create the request
        XHR.open("GET")
    }

    window.addEventListener("load", Start);

})()