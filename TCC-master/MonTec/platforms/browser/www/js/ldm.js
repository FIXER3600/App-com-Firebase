let u = firebase.auth().currentUser;
var docRef = db.collection("users").doc(u.uid);
docRef.get().then(function(doc) {
    if (doc.exists) {
        document.getElementById("lbNome").innerHTML = doc.data().nome;
    } else {
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});

function cgp(){

        console.log("function showCurrentUser(){...");
        document.getElementById("lbUserLoggedIn").innerHTML = currentUser();
        document.getElementById("lbNome").innerHTML = firebase.auth().currentUser.nome;
        if(document.getElementById("lbUserLoggedIn").innerText = currentUser() ) {
            document.getElementById("mEmail").style.visibility = "visible";
            document.getElementById("mData").style.visibility = "visible";
            document.getElementById("mFone").style.visibility = "visible";
            document.getElementById("mEndereco").style.visibility = "visible";
            document.getElementById("mNome").style.visibility = "visible";
            document.getElementById("buload").style.visibility = "hidden"; }
    }

cgp();