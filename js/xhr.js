function Request(){

    var xhr = new XMLHttpRequest();

    xhr.open("GET","http://api.icndb.com/jokes/random",true);
    xhr.send();

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            document.getElementById("info").innerHTML = xhr.responseText;
        }
    }
}
