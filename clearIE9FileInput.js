//clear [type=file]'s data on ie9
function clearIE9FileInput(fileinput) {
    var parent = fileinput.parentElement;
    var next = fileinput.nextElementSibling;
    var form = document.createElement("form");
    form.appendChild(fileinput);
    form.reset();
    parent.insertBefore(fileinput, next);
}   