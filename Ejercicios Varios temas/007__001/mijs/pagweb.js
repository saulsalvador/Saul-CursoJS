window.onload = function(){
	/*SE CREA BODY*/
	var body = document.body;
	console.log(body);

	/*SE CREA DIV PANEL DE NAVEGACION*/
	var nav = document.createElement("nav");
	body.appendChild(nav);
	var divcontainer = document.createElement("div");
	divcontainer.setAttribute("class","container");
	nav.appendChild(divcontainer);
	var divrow = document.createElement("div");
	divrow.setAttribute("class","row");
	divcontainer.appendChild(divrow);
	var divcolum = document.createElement("div");
	divcolum.setAttribute("class", "col-sm-3 col-md-3");
	divrow.appendChild(divcolum);
	var span_nav = document.createElement("span");
	span_nav.setAttribute("class","logo_spotify");
	divcolum.appendChild(span_nav);
	var divcolum2 = document.createElement("div");
	divcolum2.setAttribute("class","col-sm-9 col-md-9 menu");
	divrow.appendChild(divcolum2);
	var ulpanel = document.createElement("ul");
	divcolum2.appendChild(ulpanel);

	var array_li = ["Premium","Ayuda","Descargar","Registrar","Inicio de sesion"];
	for(var i = 0; i < array_li.length; i++ ){
		var li = document.createElement("li");
		var a = document.createElement("a");
		a.innerHTML = array_li[i];
		li.appendChild(a);
		ulpanel.appendChild(li);
	}

	/*SE CREA DIV FONDO*/
	var divfondo = document.createElement("div");
	divfondo.setAttribute("class","fondo");
	body.appendChild(divfondo);
	var divcontainer2 = document.createElement("div");
	divcontainer2.setAttribute("class","container tamaño");
	divfondo.appendChild(divcontainer2);
	var divclass = document.createElement("div");
	divclass.setAttribute("class","col-sm-12 col-md-12 tamañito");
	divcontainer2.appendChild(divclass);
	var h1 = document.createElement("h1");
	h1.innerHTML = "Música para todos";
	divclass.appendChild(h1);
	var boton1 = document.createElement("button");
	boton1.innerHTML = "OBTÉN SPOTIFY GRATIS";
	boton1.setAttribute("class","boton1");
	divcontainer2.appendChild(boton1);
	var boton2 = document.createElement("button");
	boton2.innerHTML = "SUSCRÍBETE A PREMIUM";
	boton2.setAttribute("class","boton2");
	divcontainer2.appendChild(boton2);

	/*SE CREA DIV FONDO 2*/

	var divfondo2 = document.createElement("div");
	divfondo2.setAttribute("class","fondo2");
	body.appendChild(divfondo2);
	var divcontainer3 = document.createElement("div");
	divcontainer3.setAttribute("class","container");
	divfondo2.appendChild(divcontainer3);
	var divrow2 = document.createElement("div");
	divrow2.setAttribute("class", "row");
	divcontainer3.appendChild(divrow2);
	var aside = document.createElement("aside");
	aside.setAttribute("class","col-sm-6 col-md-6");
	divrow2.appendChild(aside);
	var h1df2 = document.createElement("h1");
	h1df2.innerText = "¿Qué hay en spotify?";
	aside.appendChild(h1df2);
	var h3 = document.createElement("h3");
	h3.innerText = "Música";
	aside.appendChild(h3);
	var pt = document.createElement("p");
	pt.innerText = "Spotify tiene millones de canciones. Escucha tu música favorita, descubre nuevas canciones y arma tu colección personal.";
	aside.appendChild(pt);
	var h3_2 = document.createElement("h3");
	h3_2.innerText = "Playlist";
	aside.appendChild(h3_2);
	var pt_2 = document.createElement("p");
	pt_2.innerText = "Disfruta de playlists para cada estado de ánimo, armadas por fans y especialistas del mundo de la música.";
	aside.appendChild(pt_2);
	var h3_3 = document.createElement("h3");
	h3_3.innerText = "Nuevos lanzamientos";
	aside.appendChild(h3_3);
	var pt_3 = document.createElement("p");
	pt_3.innerText = "Escucha los lanzamientos de sencillos y álbumes de la semana, y descubre qué está sonando en el top 50..";
	aside.appendChild(pt_3);
	var aside2 = document.createElement("aside");
	aside2.setAttribute("class","col-sm-6 col-md-6");
	divrow2.appendChild(aside2);
	var section = document.createElement("section");
	aside2.appendChild(section);
	var article = document.createElement("article");
	section.appendChild(article);
	var imagen = document.createElement("img");
	imagen.setAttribute("src","#","alt","Imagen1");
	article.appendChild(imagen);
	var article_2 = document.createElement("article");
	section.appendChild(article_2);
	var imagen_2 = document.createElement("img");
	imagen_2.setAttribute("src","#","alt","Imagen2");
	article_2.appendChild(imagen_2);
	var article_3 = document.createElement("article");
	section.appendChild(article_3);
	var imagen_3 = document.createElement("img");
	imagen_3.setAttribute("src","#","alt","Imagen3");
	article_3.appendChild(imagen_3);
	var article_4 = document.createElement("article");
	section.appendChild(article_4);
	var imagen_4 = document.createElement("img");
	imagen_4.setAttribute("src","#","alt","Imagen4");
	article_4.appendChild(imagen_4);

	/*SE CREA DIV FONDO 3*/

	var divfondo3 = document.createElement("div");
	divfondo3.setAttribute("class","fondo3");
	body.appendChild(divfondo3);
	var divcontainer4 = document.createElement("div");
	divcontainer4.setAttribute("class","container");
	divfondo3.appendChild(divcontainer4);
	var aside3 = document.createElement("aside");
	divcontainer4.appendChild(aside3);
	var h5 = document.createElement("h5");
	h5.innerText = "Solo para ti.";
	aside3.appendChild(h5);
	var sectionf3 = document.createElement("section");
	aside3.appendChild(sectionf3);
	var articlef3 = document.createElement("article");
	sectionf3.appendChild(articlef3);
	var imagenf3 = document.createElement("img");
	imagenf3.setAttribute("src","#","alt","Your dayli mix");
	articlef3.appendChild(imagenf3);
	var spanf3 = document. createElement("span");
	spanf3.innerText = "Tu daily mix";
	articlef3.appendChild(spanf3)
	var articlef32 = document.createElement("article");
	sectionf3.appendChild(articlef32);
	var imagenf32 = document.createElement("img");
	imagenf32.setAttribute("src","#","alt","Your release radar");
	articlef32.appendChild(imagenf32);
	var spanf32 = document.createElement("span");
	spanf32.innerText = "Radar noveades";
	articlef32.appendChild(spanf32);
	var sectionf32 = document.createElement("section");
	aside3.appendChild(sectionf32);
	var ulf3 = document.createElement("ul");
	sectionf32.appendChild(ulf3);

	var array_li2 = ["Lista de éxitos","Nuevos lanzamientos","Videos","Podcasts","Descubrir","Conciertos"];
	for (var i = 0; i < array_li2.length; i++) {
		var lif3 = document.createElement("li");
		var img_lista = document.createElement("img");
		var pos = i + 1;
		lif3.innerHTML = '<img src="icon' + pos + '.jpg" alt="viñeta"> ' + array_li2[i];
		ulf3.appendChild(lif3);
	}

	var sectionf33 = document.createElement("section");
	divcontainer4.appendChild(sectionf33);
	var h1f3 = document.createElement("h1");
	h1f3.innerText = "Es muy fácil";
	sectionf33.appendChild(h1f3);
	var h3f32 = document.createElement("h3");
	h3f32.innerText = "Buscar";
	sectionf33.appendChild(h3);
	var pt3 = document.createElement("p");
	pt3.innerText ="¿Ya sabes lo que quieres escuchar?  Solo tienes que buscar y darle play."; 
	sectionf33.appendChild(pt);
	var h3_3 = document.createElement("h3");
	h3_3.innerText = "Explorar";
	sectionf33.appendChild(h3_3);
	var pt3 = document.createElement("p");
	pt3.innerText = "Echa un vistazo a las listas de éxitos más recientes, a los últimos lanzamientos y a las mejores playlists del momento.";
	sectionf33.appendChild(pt3);
	var h3_4 = document.createElement("h3");
	h3_4.innerText = "Descubrir";
	sectionf33.appendChild(h3_4);
	var pt4 = document.createElement("p");
	pt4.innerText = "Descubre nueva música todos los lunes, con una playlist creada especialmente para ti. O disfruta de una de las estaciones de radio.";
	sectionf33.appendChild(pt4);

	//CREANDO EL DIV FONDO4

	var divfondo4 = document.createElement("div");
	divfondo4.setAttribute("class","fondo");
	body.appendChild(divfondo4);
	var divcontainer5 = document.createElement("div");
	divcontainer5.setAttribute("class","container");
	divfondo4.appendChild(divcontainer5);
	var sectionf4 = document.createElement("section");
	divcontainer5.appendChild(sectionf4);
	var h1f4 = document.createElement("h1");
	h1f4.innerText = "Una cuenta. Escucha música en todas partes";
	sectionf4.appendChild(h1f4);
	var ulf4 = document.createElement("ul");
	sectionf4.appendChild(ulf4);

	var array_lif4 = ["MÓVIL","COMPUTADORA","TABLET","AUTO"];
	for(var i = 0; i < array_lif4.length; i++){
		var lif4 = document.createElement("li");
		lif4.innerHTML = array_lif4[i];
		ulf4.appendChild(lif4)
	}

	var ulf4_2 = document.createElement("ul");
	sectionf4.appendChild(ulf4_2);

	var array_lif4_2 = ["ALTA VOZ","PLAYSTATION","TV","REPRODUCTOR WEB"];
	for(var i = 0; i<array_lif4_2.length;i++ ){
		var lif4_2 = document.createElement("li");
		lif4_2.innerHTML = array_lif4_2[i];
		ulf4_2.appendChild(lif4_2);
	}
	var sectionf4_2 = document.createElement("section");
	divcontainer5.appendChild(sectionf4_2);
	var figure = document.createElement("figure");
	sectionf4_2.appendChild(figure);
	var imagenf4 = document.createElement("img");
	imagenf4.setAttribute("src","#","alt","Tipos de dispositivos.")

}

/*
<div class="fondo4">
	<div class="container">
		<section>
			<h1>Una cuenta. Escucha música en todas partes</h1>
			<ul>
				<li>MÓVIL</li>
				<li>COMPUTADORA</li>
				<li>TABLET</li>
				<li>AUTO</li>
			</ul>
			<ul>
				<li>ALTAVOZ</li>
				<li><a href="#">PLAYSTATION</a></li>
				<li>TV</li>
				<li><a href="#">REPRODUCTOR WEB</a></li>
			</ul>
		</section>
		<section>
			<figure>
				<img src="consolas.jpg" alt="Tipos de dispositivos">
			</figure>
		</section>
	</div>
</div>*/