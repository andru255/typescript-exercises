window.onload = function () {
    var txtMessage = document.getElementById("txtMessage");
    var btnGetAlert = document.getElementById("btnGetAlert");
    btnGetAlert.addEventListener("click", function (evt) {
        var myMessage = txtMessage.value;
        alert(myMessage);
        evt.preventDefault();
    });
    document.addEventListener("keydown", function (evt) {
        var myMessage = txtMessage.value;
        var enterKeyCode = evt.keyCode;
        if (enterKeyCode == 13) {
            alert(myMessage);
        }
    });
};
