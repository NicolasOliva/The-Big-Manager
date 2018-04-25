(function(){

  var mostrar = function(){

    var texto = document.getElementById('saludo');
    texto.style.visibility = "visible";

  }

  var funcion = setInterval(mostrar,2500);

}())

function boton() {

  alert("The Big Manager");

}

function Request(){

    var xhr = new XMLHttpRequest();

    xhr.open("GET","http://api.icndb.com/jokes/random",true);
    xhr.send();

    xhr.onload = function(){

        if(xhr.readyState == 4 && xhr.status == 200){
            document.getElementById("info").innerHTML = xhr.responseText;
        }

    }

}

var promesa = new Promise(function(resolve,reject){

  var xhr = new XMLHttpRequest();

  xhr.open("GET","http://api.icndb.com/jokes/random",true);
  xhr.send();

  xhr.onload = function(){

      if(xhr.readyState == 4 && xhr.status == 200){
          resolve(JSON.parse(xhr.responseText));
      }else{
        reject("Error")
      }

  }

});

function Promesa (){

  promesa
    .then(function(response){
      var informacion = response.value;
      document.getElementById("info").innerHTML = informacion;
    })
    .catch(function(error){
      console.log('Error: ', error);
    })

}













var TipoEnvio = "GET";
var url = "http://api.icndb.com/jokes/random";

function RequestVar(TipoEnvio,url){

    var xhr = new XMLHttpRequest();

    xhr.open(TipoEnvio,url,true);
    xhr.send();

    xhr.onload = function(){

        if(xhr.readyState == 4 && xhr.status == 200){
            document.getElementById("info").innerHTML = xhr.responseText;
        }

    }

}
