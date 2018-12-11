function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
       alert("UPDATE YOU FUCKING BROWSER!!!");
    }
}

function showPosition(position) {
    $("#pos").html("Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude);
    sendRequest(position);
}

function sendRequest(position) {
    var endpoint = "https://api.coinmarketcap.com/v2/listings/"
    console.log(endpoint);

    $.ajax({
        url: endpoint,
        type: "GET",
        success: showForecast
    });
}

function showForecast(data) {
    console.log(data.data);
    $("#fact").append("<ul></ul");
    for (var i = 0; i < 10; i++) {
        $("#fact ul").append("<li>" + data.data[i].name + "</li>");
    }
}