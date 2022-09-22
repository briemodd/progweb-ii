document.addEventListener('DOMContentLoaded', pc_h);
let fontSize = 100
let increaseDecrease = 10
let elementBody = document.querySelector('body');
let a = 1;

function pc_h(){
	ech = document.querySelector(`h${a}`);
	if(ech != null){
		criarBotao();
	} else if (ech == null && a < 7) {
		a += 1;
		pc_h();
	}
}

function criarBotao(){
	botao = document.createElement('button');
	botao.innerHTML = '+';
	botao.addEventListener('click',function(){
	
	});
	s = document.querySelector(`h${a}`);
	s.before(botao);
	
	botao.addEventListener('click', function(event) {
		if(fontSize <= 170){
			fontSize = fontSize + increaseDecrease;
			elementBody.style.fontSize = fontSize + '%';
		}
	});	
	
	botaom = document.createElement('button');
	botaom.innerHTML = '-';
	botaom.addEventListener('click',function(){
	});

	s1 = document.querySelector(`h${a}`);
	s1.before(botaom);
	
	botaom.addEventListener('click', function(event) {
		if(fontSize > 100){
			fontSize = fontSize - increaseDecrease;
			elementBody.style.fontSize = fontSize + '%';
		}
	});
	
	
}
