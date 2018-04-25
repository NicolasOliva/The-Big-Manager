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

/*
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
*/


var xhr = new XMLHttpRequest();

function Request(){

    var promesa = new Promise(function(resolve,reject){

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

  return promesa;

} 

function Mostrar(){

  var promesa = new Request();

  promesa
    .then(function(response){
      var informacion = response.value;
      document.getElementById("info").innerHTML = informacion;
      console.log(informacion);
    })
    .catch(function(error){
      console.log('Error: ', error);
    })

}
