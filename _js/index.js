var qtd_telas_jogos = 3;
var qtd_telas_hist = 3;
var qtd_telas_colorir = 2;
var qtd_telas = 2;
var page = 0;
var conteudo = "historinhas";
var selecionado = "0";

function ajustaBotoes(selecionado) {

	if (selecionado != "0") {

		var mudar = document.getElementById('direita');
		mudar.setAttribute('onclick', 'passarTela("-1")');
		mudar = document.getElementById('esquerda');
		mudar.setAttribute('onclick', 'passarTela("-1")');
		
		document.getElementById("direita").src = "_images/baixo.gif";
		document.getElementById("esquerda").src = "_images/baixo.gif";
		document.getElementById("direita").style = "width : 4%; right : 19.2%";
		document.getElementById("esquerda").style = "width : 4%; left: 20%";
		

	}
	else if(page == 0){
		
		var mudar = document.getElementById('direita');
		mudar.setAttribute('onclick', 'passarTela("1")');
		document.getElementById("direita").src = "_images/direita.gif";
		document.getElementById("esquerda").style = "visibility: hidden";
		document.getElementById("direita").style = "width : 7%";

	}
	else if(page==qtd_telas_jogos-1 && conteudo=="jogos" || page==qtd_telas_hist-1 && conteudo=="historinhas" || page==qtd_telas_colorir-1 && conteudo=="colorir"){
		
		var mudar = document.getElementById('esquerda');
		mudar.setAttribute('onclick', 'passarTela("0")');
		document.getElementById("esquerda").src = "_images/esquerda.gif";
		document.getElementById("direita").style = "visibility: hidden";
		document.getElementById("esquerda").style = "width : 7%";

	}
	else{
		var mudar = document.getElementById('direita');
		mudar.setAttribute('onclick', 'passarTela("1")');
		mudar = document.getElementById('esquerda');
		mudar.setAttribute('onclick', 'passarTela("0")');
		document.getElementById("direita").src = "_images/direita.gif";
		document.getElementById("esquerda").src = "_images/esquerda.gif";
		document.getElementById("direita").style = "width : 7%";
		document.getElementById("esquerda").style = "width : 7%";
	}
}

function mudaConteudo(tipo) {

	if (conteudo != tipo) {
		conteudo = tipo;
		page = 0
	}
	selecionaPage();
}

function passarTela(direcao){

	if (conteudo == "jogos") {
		qtd_telas = qtd_telas_jogos;
	}
	else if (conteudo == "historinhas") {
		qtd_telas = qtd_telas_hist;
	}
	else if (conteudo == "colorir") {
		qtd_telas = qtd_telas_colorir;
	}

	if (page>0 && direcao == 0){
		page--;
	}
	else if (page<qtd_telas-1 && direcao == 1) {
		page++;
	}

	selecionaPage();

}

function seleciona(selecionado){

	ajustaBotoes(selecionado);

	var diretorio = "_"+conteudo+"/";
	var pos = selecionado.indexOf(diretorio);
	pos += diretorio.length;
	selecionado = selecionado.slice(pos);
	selecionado = selecionado.replace(".jpg","");
	selecionado = selecionado.replace(".png","");

	if (selecionado != "0" && conteudo == "historinhas") {

		//window.location.href = "_html/video.html";
		var link = "_historinhas/"+selecionado+".mp4";
		document.getElementById("conteudo_interativo").innerHTML = '<video id="video" autoplay src="" width="650" height="380"></video>';
		document.getElementById("video").src = link;
		document.getElementById("video").style = "margin-top:0px; padding-top:0px;";

		//document.getElementById("video").style = "src=https://www.youtube.com/embed/IKY3Q66I2Cw";
		selecionado = "0";
	}

	if (selecionado != "0" && conteudo == "jogos") {

		var link = "_jogos/"+selecionado+".swf";
	
		// document.getElementById("conteudo_interativo").innerHTML = "<embed id='flash' width='650' height='380' src='_jogos/simpsons.swf'>";
		// document.getElementById("flash").setAttribute("_jogos/polly.swf", getAttribute("src")) ;
		// selecionado = "0";
		document.getElementById("conteudo_interativo").innerHTML = '<object id="flash" type="application/x-shockwave-flash" data="" width="570" height="420" ></object>';
		document.getElementById("flash").data = link;
		document.getElementById("flash").style = "margin-top:0px; padding-top:0px;";
		//document.getElementById("flash").style = ;
	}
	if (selecionado != "0" && conteudo == "colorir") {

		var link = "_colorir/"+selecionado+".swf";
	
		// document.getElementById("conteudo_interativo").innerHTML = "<embed id='flash' width='650' height='380' src='_jogos/simpsons.swf'>";
		// document.getElementById("flash").setAttribute("_jogos/polly.swf", getAttribute("src")) ;
		// selecionado = "0";
		document.getElementById("conteudo_interativo").innerHTML = '<object id="flash" type="application/x-shockwave-flash" data="" width="570" height="420" borderframe="5" ></object>';
		document.getElementById("flash").data = link;
		document.getElementById("flash").style = "margin-top:0px; padding-top:0px;";
		//document.getElementById("flash").style = ;
	}

}

function selecionaPage(){

	document.getElementById("btJogos").style = "animation : none; color : yellow; box-shadow: 2px 2px 4px black;";
	document.getElementById("btIndex").style = "animation : none; color : yellow; box-shadow: 2px 2px 4px black;";
	document.getElementById("btColorir").style = "animation : none; color : yellow; box-shadow: 2px 2px 4px black;";

	ajustaBotoes(selecionado);


	if(conteudo == "jogos"){

		document.getElementById("btJogos").style = "animation: animationMenu 2s infinite; color : black; box-shadow: -2px -2px 4px black;";

		if(page==0){

			document.getElementById("conteudo_interativo").innerHTML = '<figure><img src="_images/_jogos/resta-1.jpg" class="item" id="tela1" onclick="seleciona(this.src)" /><figcaption>Resta 1</figcaption></figure><figure><img src="_images/_jogos/domino.jpg" class="item" id="tela2" onclick="seleciona(this.src)" /><figcaption>Dominó</figcaption></figure><figure><img src="_images/_jogos/corpo-humano.jpg" class="item" id="tela3" onclick="seleciona(this.src)" /><figcaption>Corpo Humano</figcaption></figure><figure><img src="_images/_jogos/jogo-das-vogais.jpg" class="item" id="tela4" onclick="seleciona(this.src)"/><figcaption>Vogais</figcaption></figure><figure><img src="_images/_jogos/jogo-da-multiplicacao.jpg" class="item" id="tela5" onclick="seleciona(this.src)" /><figcaption>Multiplicação</figcaption></figure><figure><img src="_images/_jogos/jogo-da-sustentabilidade.jpg" class="item" id="tela6" onclick="seleciona(this.src)" /><figcaption>Sustentabilidade</figcaption></figure>';
		}
		if(page==1){

			document.getElementById("conteudo_interativo").innerHTML = '<figure><img src="_images/_jogos/sete-erros.jpg" class="item" id="tela1" onclick="seleciona(this.src)" /><figcaption>Sete Erros</figcaption></figure><figure><img src="_images/_jogos/memoria-repeticao.jpg" class="item" id="tela2" onclick="seleciona(this.src)" /><figcaption>Memória e Repetição</figcaption></figure><figure><img src="_images/_jogos/mat-dino.jpg" class="item" id="tela3" onclick="seleciona(this.src)" /><figcaption>Matemática</figcaption></figure><figure><img src="_images/_jogos/chess.jpg" class="item" id="tela3" onclick="seleciona(this.src)" /><figcaption>Xadrez</figcaption></figure><figure><img src="_images/_jogos/chess2.jpg" class="item" id="tela3" onclick="seleciona(this.src)" /><figcaption>Xadrez de 2 Jogadores</figcaption></figure><figure><img src="_images/_jogos/damas.jpg" class="item" id="tela3" onclick="seleciona(this.src)" /><figcaption>Damas</figcaption></figure>';
		}
		if(page==2){

			document.getElementById("conteudo_interativo").innerHTML = '<figure><img src="_images/_jogos/mahjong.jpg" class="item" id="tela2" onclick="seleciona(this.src)" /><figcaption>Mahjong</figcaption></figure><figure><img src="_images/_jogos/gamao.jpg" class="item" id="tela1" onclick="seleciona(this.src)" /><figcaption>Gamão</figcaption></figure><figure><img src="_images/_jogos/ludo.jpg" class="item" id="tela3" onclick="seleciona(this.src)" /><figcaption>Ludo</figcaption></figure>';
		}

	}
	if(conteudo == "historinhas"){

		document.getElementById("btIndex").style = "animation: animationMenu 2s infinite; color : black; box-shadow: -2px -2px 4px black;";


		if(page==0){

			document.getElementById("conteudo_interativo").innerHTML = '<figure><img src="_images/_historinhas/bela-adormecida.jpg" class="item" id="tela1" onclick="seleciona(this.src)"/><figcaption>Bela Adormecida</figcaption></figure><figure><img src="_images/_historinhas/chapeuzinho-vermelho.jpg" class="item" id="tela2" onclick="seleciona(this.src)"/><figcaption>Chapeuzinho Vermelho</figcaption></figure><figure><img src="_images/_historinhas/o-principe-sapo.jpg" class="item" id="tela3" onclick="seleciona(this.src)" /><figcaption>Príncipe Sapo</figcaption></figure><figure><img src="_images/_historinhas/pinoquio.jpg" class="item" id="tela4" onclick="seleciona(this.src)" /><figcaption>Pinóquio</figcaption></figure><figure><img src="_images/_historinhas/alladin-e-a-lampada-maravilhosa.jpg" class="item" id="tela5" onclick="seleciona(this.src)"/><figcaption>Alladin</figcaption></figure><figure><img src="_images/_historinhas/a-pequena-sereia.jpg" class="item" id="tela6" onclick="seleciona(this.src)"/><figcaption>Pequena Sereia</figcaption></figure>';
		}
		if(page==1){			

			document.getElementById("conteudo_interativo").innerHTML = '<figure><img src="_images/_historinhas/o-gato-de-botas.jpg" class="item" id="tela1" onclick="seleciona(this.src)"/><figcaption>Gato de Botas</figcaption></figure><figure><img src="_images/_historinhas/branca-de-neve-e-os-7-anoes.jpg" class="item" id="tela2" onclick="seleciona(this.src)"/><figcaption>Branca de Neve</figcaption></figure><figure><img src="_images/_historinhas/pintinho-amarelinho.jpg" class="item" id="tela3" onclick="seleciona(this.src)"/><figcaption>Pintinho Amarelinho</figcaption></figure><figure><img src="_images/_historinhas/trem-de-ferro.jpg" class="item" id="tela4" onclick="seleciona(this.src)" /><figcaption>Trem de Ferro</figcaption></figure><figure><img src="_images/_historinhas/paciente.jpg" class="item" id="tela5" onclick="seleciona(this.src)"/><figcaption>O Paciente</figcaption></figure><figure><img src="_images/_historinhas/ocorrencia.jpg" class="item" id="tela6" onclick="seleciona(this.src)"/><figcaption>Ocorrência</figcaption></figure>';
		}
		if(page==2){

			document.getElementById("conteudo_interativo").innerHTML = '<figure><img src="_images/_historinhas/a-ponte.jpg" class="item" id="tela1" onclick="seleciona(this.src)"/><figcaption>A Ponte</figcaption></figure><figure><img src="_images/_historinhas/bolhas.jpg" class="item" id="tela2" onclick="seleciona(this.src)"/><figcaption>Bolhas</figcaption></figure><figure><img src="_images/_historinhas/caprichos-e-relaxos.jpg" class="item" id="tela3" onclick="seleciona(this.src)" /><figcaption>Caprichos e Relaxos</figcaption></figure><figure><img src="_images/_historinhas/casa-em-ruinas.jpg" class="item" id="tela4" onclick="seleciona(this.src)" /><figcaption>Casa em Ruínas</figcaption></figure><figure><img src="_images/_historinhas/eco.jpg" class="item" id="tela5" onclick="seleciona(this.src)"/><figcaption>O Eco</figcaption></figure><figure><img src="_images/_historinhas/relogio.jpg" class="item" id="tela6" onclick="seleciona(this.src)"/><figcaption>O Relógio</figcaption></figure>';
		}
		if(page==2){

			document.getElementById("conteudo_interativo").innerHTML = '<figure><img src="_images/_historinhas/a-ponte.jpg" class="item" id="tela1" onclick="seleciona(this.src)"/><figcaption>A Ponte</figcaption></figure><figure><img src="_images/_historinhas/bolhas.jpg" class="item" id="tela2" onclick="seleciona(this.src)"/><figcaption>Bolhas</figcaption></figure><figure><img src="_images/_historinhas/caprichos-e-relaxos.jpg" class="item" id="tela3" onclick="seleciona(this.src)" /><figcaption>Caprichos e Relaxos</figcaption></figure><figure><img src="_images/_historinhas/casa-em-ruinas.jpg" class="item" id="tela4" onclick="seleciona(this.src)" /><figcaption>Casa em Ruínas</figcaption></figure><figure><img src="_images/_historinhas/eco.jpg" class="item" id="tela5" onclick="seleciona(this.src)"/><figcaption>O Eco</figcaption></figure><figure><img src="_images/_historinhas/relogio.jpg" class="item" id="tela6" onclick="seleciona(this.src)"/><figcaption>O Relógio</figcaption></figure>';
		}

	}
	if(conteudo == "colorir"){

		document.getElementById("btColorir").style = "animation: animationMenu 2s infinite; color : black;box-shadow: -2px -2px 4px black;";

		if(page==0){

			document.getElementById("conteudo_interativo").innerHTML = '<figure><img src="_images/_colorir/pantera.jpg" class="item" id="tela1" onclick="seleciona(this.src)" /><figcaption>Pantera Cor de Rosa</figcaption></figure><figure><img src="_images/_colorir/timao.jpg" class="item" id="tela2" onclick="seleciona(this.src)" /><figcaption>Timão e Pumba</figcaption></figure><figure><img src="_images/_colorir/picapau.jpg" class="item" id="tela3" onclick="seleciona(this.src)" /><figcaption>Pica-pau</figcaption></figure><figure><img src="_images/_colorir/polly.jpg" class="item" id="tela4" onclick="seleciona(this.src)" /><figcaption>Polly</figcaption></figure><figure><img src="_images/_colorir/scooby.jpg" class="item" id="tela5" onclick="seleciona(this.src)" /><figcaption>Scooby Doo</figcaption></figure><figure><img src="_images/_colorir/spiderman.jpg" class="item" id="tela6" onclick="seleciona(this.src)" /><figcaption>Homem Aranha</figcaption></figure>';
		}


		if(page==1){

			document.getElementById("conteudo_interativo").innerHTML = '<figure><img src="_images/_colorir/princesas.jpg" class="item" id="tela1" onclick="seleciona(this.src)" /><figcaption>Princesas Disney</figcaption></figure><figure><img src="_images/_colorir/frozen.jpg" class="item" id="tela2" onclick="seleciona(this.src)" /><figcaption>Frozen</figcaption></figure><figure><img src="_images/_colorir/carros.jpg" class="item" id="tela3" onclick="seleciona(this.src)" /><figcaption>Carros</figcaption></figure>';
		}
	
	}
}

