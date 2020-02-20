function cgp(){
        console.log("function showCurrentUser(){...");
        document.getElementById("lbUserLoggedIn").innerHTML = currentUser();
        if(document.getElementById("lbUserLoggedIn").innerText = currentUser() ) {
            document.getElementById("mEmail").style.visibility = "visible";
            document.getElementById("mData").style.visibility = "visible";
            document.getElementById("mFone").style.visibility = "visible";
            document.getElementById("mEndereco").style.visibility = "visible";
            document.getElementById("mNome").style.visibility = "visible";
            document.getElementById("buload").style.visibility = "hidden"; }
    }

cgp();