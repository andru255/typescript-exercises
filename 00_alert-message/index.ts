window.onload = ()=>{
    //parsing
    var txtMessage:HTMLInputElement = <HTMLInputElement>document.getElementById("txtMessage");
    var btnGetAlert:HTMLInputElement = <HTMLInputElement>document.getElementById("btnGetAlert");

    //binding events
    btnGetAlert.addEventListener("click", (evt)=> {
        var myMessage:string = txtMessage.value;
        alert(myMessage);
        evt.preventDefault();
    });
    
    document.addEventListener("keydown", (evt)=> {
        var myMessage:string = txtMessage.value;
        var enterKeyCode:number = evt.keyCode; 
        if(enterKeyCode == 13){
            alert(myMessage);
        }
    });
};