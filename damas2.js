const tamanhoCelula = 40;
let pecaId = 0;
let la = 80;
let lf = 81;
let c = "";
let cc= 0;
let localCaptura = "";
document.body.append(criaTabuleiro());

function criaTabuleiro() {
    const tamanho = 8;
    let tabela = document.createElement('table');

    tabela.style.borderStyle = 'solid';
    tabela.style.borderSpacing = 0;
    tabela.style.margin = 'auto';

    for (let i = 0; i < tamanho; i++) {
        let linha = document.createElement('tr');
        tabela.append(linha);
        for (let j = 0; j < tamanho; j++) {
            let celula = document.createElement('td');
			celula.setAttribute('id',`${j}` + '-' + `${i}`);
            linha.append(celula);
            celula.style.width = `${tamanhoCelula}px`;
            celula.style.height = `${tamanhoCelula}px`;
			pecaId += 1;
            if (i % 2 == j % 2) {
                celula.style.backgroundColor = 'black';
				celula.setAttribute("class","droptarget");
                if (i * 8 + j <= 24) {
                    celula.append(criaPeca('black',pecaId));
                } else if (i * 8 + j >= 40) {
                    celula.append(criaPeca('red',pecaId));
                }
            } else {
                celula.style.backgroundColor = 'white';
            }
        }
    }
    return tabela;
}

function criaPeca(cor,gm) {
    let imagem = document.createElement('img');
		imagem.setAttribute('src', `img/${cor}.png`);
		imagem.setAttribute('width', `${tamanhoCelula-4}px`);
		imagem.setAttribute('height', `${tamanhoCelula-4}px`);
		imagem.setAttribute('draggable','true');
		imagem.setAttribute('id', gm);
		imagem.setAttribute('class', cor);
    return imagem;
}

function dragstart(){
	document.addEventListener("dragstart", function(event) {
	  event.dataTransfer.setData("Text", event.target.id);
	  la = event.path[1].id.toString();
	  c = event.path[0].className;
	  
	});
}

function dragend() {
	document.addEventListener("dragend", function(event) {
	});
}

function dragover() {
	document.addEventListener("dragover", function(event) {
	  event.preventDefault();
	});
}
function drop(){
	document.addEventListener("drop", function(event) {
	event.preventDefault();
	if ( event.target.className == "droptarget") {
		const data = event.dataTransfer.getData("Text");
		let g = event.path[0];
		let m = g.childElementCount;
		lf = event.target.id;
		let x1 = la.substring(0,1);
		let y1 = la.substring(2,3);
		let x2 = lf.substring(0,1);
		let y2 = lf.substring(2,3);
		
		if(c == 'black' && x2 < x1) {
			localCaptura = (parseInt(x1) - 1).toString() + "-" + (parseInt(y1) + 1).toString();
		} else if (c == 'black' && x2 > x1) {
			localCaptura = (parseInt(x1) + 1).toString() + "-" + (parseInt(y1) + 1).toString();
		} else if (c == 'red' && x2 > x1) {
			localCaptura = (parseInt(x1) + 1).toString() + "-" + (parseInt(y1) - 1).toString();
		} else if (c == 'red' && x2 < x1) {
			localCaptura = (parseInt(x1) - 1).toString() + "-" + (parseInt(y1) - 1).toString();
		}
		tx = document.getElementById(localCaptura);
		if(tx.childElementCount == '1') {
			cc = tx.firstElementChild.className;
			pc = tx.firstElementChild;
		}
		if(m == '0' && y1 != y2) {
			if(c == "red" && y1 > y2 && y1 - y2 == 1 || y1 - y2 == 2 && cc == 'black' || c == 'black' && y1 < y2 && y1 - y2 == -1 || y1 - y2 == -2 && cc == 'red') {
				event.target.appendChild(document.getElementById(data));
				if(y1 - y2 == 2 || y1 - y2 == -2) {
					pc.remove();
					cc = '';
				}
			}
			
		}
	}
	});
}

dragstart();
dragend();
dragover();
drop();
