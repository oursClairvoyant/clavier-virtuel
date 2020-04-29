
const f = document.querySelector(".contact-form");
f.addEventListener('submit', function (event) {
    event.preventDefault();
    var array = [];
    var arrayToKeep = [];
    const formData = new FormData(this);
    for (var value of formData.entries()) {
        array.push(value);
    };
    var lineArray = [];
    array.forEach(function (infoArray, index) {
        var line = infoArray.join(",");
        lineArray.push(index == 0 ? "data:text/csv;charset=utf-8," + line : line);
    });
    var csvContent = lineArray.join("\n");
    var encodedUri = encodeURI(csvContent);
    window.open(encodedUri);





});








