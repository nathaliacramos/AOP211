//GET Method
// xmhttprequest
var xhttp = new XMLHttpRequest();   //Criação de um novo objeto XMLHttpRequest
var documento;

xhr.responseType = "json"
xhr.onreadystatechange = function() {   // Definirá as funcionalidades para ser acionadas quando uma propriedade for alterada

    if (this.readyState == 4 && this.status == 200){    //A propriedade 4 significa que a solicitação já foi concluida e a resposta já está pronta
        //Status 200 indica que está OK
        documento = responseXML ; // A resposta do dado retornará como um arquivo de dados XML
        documento = JSON.parse(documento) // Documento se torna um objeto JSON  
        console.log(documento); 

    }else{
         alert("Erro")
    }
        var div = document.getElementById("")
        div.innerHTML = xhttp.responseText // Retorna a resposta do dado por uma string
        
    }
    xhttp.open("GET", "url", true); // O argumento "true" indica que a operação será assincrona
    xhttp.send();        


    //POST Method
    var xhr = new XMLHttpRequest();   //Criação de um novo objeto XMLHttpRequest
    var documento = {
        "userId": 100,
        "id": 13,
        "title": "E-Commerce",
        "body": "Implementação do processamento assíncrono de dados"
    }

    xhr.onreadystatechange = function () {
        
        if (xhr.readyState == 4) {
            console.log(xhr)
            }
    }

    xhttp.open("POST", "URL", true);
    xhttp.send(documento);   
 