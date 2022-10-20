document.querySelector("#ddd").addEventListener("change", buscaAPI);
cidades = new Array();
function buscaAPI(evento){
	fetch(`https://brasilapi.com.br/api/ddd/v1/${evento.target.value}`)
	.then(res => res.json())
	.then(dados => {
		cidades = dados.cities;
		listaCidades();
	});
}
function listaCidades(){
	lista = document.querySelector('ul');
	lista.textContent = '';
	cidades.forEach(cidade =>{
		item = document.createElement('li');
		item.textContent = cidade;
		lista.append(item);
	});
}
