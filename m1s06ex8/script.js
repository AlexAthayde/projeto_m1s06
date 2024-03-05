let endereco = localStorage.getItem("endereco");

if (endereco == null) {
  alert("Realize busca de CEP e salve na base de dados!!!");
  buscarEnd();
} else {
  alert("Realize busca de CEP e salve na base de dados!!!");
  let pergunta = prompt(
    "CEP já informado, gostaria de atualizar: (sim) ou (não)"
  );

  if (pergunta == "sim") {
    buscarEnd();
  } else {
    alert("Dados salvos na base de dados, obrigado!!!");
  }
}

function buscarEnd() {
  let cep = prompt("Digite seu CEP:");

  fetch(`https://viacep.com.br/ws/${cep}/json`, { method: "GET" })
    .then((respostaFetch) => {
      return respostaFetch.json();
    })
    .then((respostaApi) => {
      console.log(respostaApi);
      alert(
        `${respostaApi.logradouro}, ${respostaApi.complemento} - ${respostaApi.bairro} - ${respostaApi.localidade}/${respostaApi.uf}`
      );

      let respostaUser = prompt("Os dados estão corretos: (sim) ou (não)");

      if (respostaUser.toLocaleLowerCase() == "sim") {
        localStorage.setItem("endereco", JSON.stringify(respostaApi));
        alert("Dados salvos com sucesso!!!");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
