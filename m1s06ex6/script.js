let cep = prompt("Digite seu CEP:");

fetch(`https://viacep.com.br/ws/${cep}/json`, {method: "GET"})
.then((respostaFetch)=>{
    return respostaFetch.json();
})
.then((respostaApi)=>{
    console.log(respostaApi);
    alert(`${respostaApi.logradouro}, ${respostaApi.complemento} - ${respostaApi.bairro} - ${respostaApi.localidade}/${respostaApi.uf}`);
})
.catch((error)=>{
    console.error(error);
})