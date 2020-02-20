
function currentUser(){
    try{
        let u = firebase.auth().currentUser;
        return u.email;
    }catch(e){
        return e;
    }
    
}

function signup(){
    try {

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    alert("Criando conta: email-> "+email+", senha->"+senha);
    
    if(email.length == 0) {
        alert ("Digite um email");
        return false;
    }
    
    if(senha.length == 0){
        alert ("Digite uma senha");
        return false;
    }
	firebase.auth().createUserWithEmailAndPassword(email, senha);
    
    setAccountData();
} catch (error) {
    console.log(error.message);
    alert(error);
}
}

function setAccountData(){
    var db = firebase.firestore();
	let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    firebase.auth().signInWithEmailAndPassword(email, senha);
    let nome = document.getElementById("nome").value;
    let tele = document.getElementById("fone").value;
    let nasci = document.getElementById("data").value;
    let ende = document.getElementById("endereco").value;
    let u = firebase.auth().currentUser;

    db.collection("users").doc(u.uid).set({
        nome: nome,
        email: email,
        tel : tele,
	    nasc: nasci,
	    end: ende
    })
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});
}

function login(){
    console.log("function login(){...");
    try{

        let email = document.getElementById("email").value;
        let senha = document.getElementById("senha").value;

       
        
        if(email.length == 0) {
            alert ("Digite um email");
            return false;
        }
        
        if(senha.length == 0){
            alert ("Digite uma senha");
            return false;
        }
        
        firebase.auth().signInWithEmailAndPassword(email, senha).then(function(user){
            console.log("tentando logar");
            connect();

        }).catch(function(error) {
            console.log("firebase.auth().signInWithEmailAndPassword(email, senha).catch(function(error) {...");
            var errorCode = error.code;
            var errorMessage = error.message;
            
            if (errorCode === 'auth/wrong-password') {
                alert('Senha errada!');
            } else {
                alert(errorMessage);
            }           
        });
                
    }catch(e){
        console.log(e);
    }
}

function mudarSenha(){

    var email = document.getElementById('email').value;
    
    firebase.auth().sendPasswordResetEmail(email).then(function() {
        alert('Pedido de alteracao de senha enviado!');
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode == 'auth/invalid-email') {
          alert("Email informado invalido");
        } else if (errorCode == 'auth/user-not-found') {
          alert("Email nao encontrado");
        }
      });
}

function logout(){
    try{
        firebase.auth().signOut();
    }catch(e){
        alert(e);
    }
}

function connect(){
    window.location.replace("main.html");
    console.log("function showCurrentUser(){...");
    
}

function verperfil(){
    window.location.assign("perfil.html");
    document.getElementById("lbUserLoggedIn").innerHTML = currentUser();
}