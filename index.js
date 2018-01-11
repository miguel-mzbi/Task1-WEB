$('document').ready(function () {
    $.get("/title", function (data, status) {
        alert("Data: " + data);
        console.log("Request status: " + status);
    });
});