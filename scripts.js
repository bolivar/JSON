var animanlContainer = document.getElementById("content")
var btn = document.getElementById('btn');

btn.addEventListener("click", function(){

    var ourRequest = new XMLHttpRequest();

    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');

    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHMTL(ourData);
    };

    ourRequest.send();

});

function renderHMTL(data){
    var htmlString = '';

    for (i=0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + ".</p>";
    }

    animanlContainer.insertAdjacentHTML('beforeend', htmlString);

    
}
