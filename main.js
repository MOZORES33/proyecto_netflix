    function login(){
    var user, password

    user = document.getElementById("usuario").value;
    password = document.getElementById("contrasena").value;

    if(user === "MATIAS" && password === "MATIAS22"){
        window.location = "splash.html";
        
    } 
    else{
        alert("Cuenta inexistente")
    }
}