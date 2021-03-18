<svelte:head>
	<title>About</title>
</svelte:head>


<style>
	*{
		margin: 0;
		padding: 0;
	}
	.About{
		color: #414042; 
		padding-bottom: 3rem;
	}
	.About-personal{
		margin-bottom: 1.2rem;
	}
	.About-personal span{
		color:#6F6F6F;
	}
	.About-main-title{
		font-size: 2rem;
		font-weight: 700;
	}
	.About-title {
		font-weight: 700;
		margin-bottom: 1rem;
	}
	.About-subtitle{
		font-weight: 700;
		margin-bottom: 1rem;
	}

	.About-whoami{
		margin-bottom: 1.2rem;
	}

	.About-specialities{
		margin-bottom: 1.2rem;
	}
	.About-specialities li {
		list-style: none;
		margin-left: 16px;
	}
	.About-history{
		margin-bottom: 1.2rem;
	}
	.About-history-text{
		margin-left: 1rem;
		margin-bottom: 1.2rem;
	}
	.About-wanabe li{
		list-style: none;
		margin-left: 16px;
	}



</style>


<div class="About">
	<div class="About-personal">
		<h2 class="About-main-title ">Guillermo Castaño Vélez</h2>
		<span>Diseñador Industrial - Diseñador UI/UX - FrontEnd Developer - Ingeniero de Software(en proyecto)</span>
	</div>
	<div class="About-whoami">
		<h2 class="About-title">Quén soy?</h2>
		<p>
			Colombiano, de un pueblo del departamento de Caldas llamado Villamaría, aunque actualmente vivo en Manizales. Después de una larga trayectoria como diseñador industrial en diferentes sectores de publicidad y manufactura, he redescubierto un camino que empecé hace mucho tiempo y que por vueltas de la vida terminé abandonando. Hoy, a mis 37 años me encuentro aprendiendo a programar.
		</p>
	</div>

	<div class="About-specialities">
		<h2 class="About-title">Especialidades</h2>
		<ul>
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>Svelte(En progreso)</li>
			<li>Diseño UI/UX</li>
			
		</ul>
	</div>

	<div class="About-history">
		<h2 class="About-title">Un poco de historia</h2>
		<h3 class="About-subtitle">Educación</h3>
		<p class="About-history-text">8 semestres de ingeniería electrónica, 5 semestres de ingeniería de sistemas, diseñador industrial (de esta si me gradué) con una maestría en desarrollo sostenible y medio ambiente, actualmente estudio ingeniería de software (de esta también me pienso graduar) y estudiante de plataformas como Platzi y Udemy fortaleciendo conocimientos día a día. </p>
		<h3 class="About-subtitle">Trayectoria laboral</h3>
		<p class="About-history-text">A parte de prácticas, trabajos cortos y freelancers, solo he tenido dos trabajos en mi vida, ¿porqué con tantos años? Pues salí tarde de la universidad, y me gusta mucho la estabilidad, así que he durado bastante tiempo en los dos. El primero en Bogotá con una empresa llamada <a href="http://dipro.com.co/">Dipro</a> que se encarga de hacer muebles para punto de venta y exhibiciones comerciales, un gran aprendizaje. El segundo en Manizales, en una empresa llamada <a href="https://www.bellota.com/">Bellota</a>, fabricante y distribuidor de herramientas para la agricultura y la construcción en todo el mundo. Hoy en día, esperando que se me haga el milagrito de entrar en el mundo de la tecnología.</p>
	</div>
	<div class="About-wanabe">
		<h2 class="About-title">Siempre quise ser</h2>
		<ul>
			<li><strong>Artista, dibujante y pintor</strong>. Tengo mis habilidades muy desarrolladas, pero nunca al nivel de lo que yo considero un artista.</li>
			<li><strong>Músico</strong>, toco el bajo y le doy al piano, pero no tengo la consistencia ni el talento, lo hago para relajarme un rato.</li>
			<li><strong>Escritor</strong>, acá la pena de que lean lo mio me supera. Esta página es un avance muy grande.</li>
			<li><strong>Profesor</strong>, es un gran deseo mio poder ser profesor algún día.</li>
			<li><strong>Diseñador de páginas web</strong>, pues ahí voy....</li>
		</ul>
	</div>
</div>

