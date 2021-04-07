<script>
    import analyticsTraking from '../utils/analytics';
    import logo from '../../static/Logo.png';
    import git from '../../static/github.png';
    import behance from '../../static/behance.png';
    import logoUi from '../../static/LogoHeaderUIqui.png'
</script>

<style>
    .Projects-message{
        color: #414042; 
		padding-bottom: 3rem;
        font-size: 0.8rem;
    }
    ul{
        margin: 0;     
        padding: 0;
    }
    .Projects li {
        list-style: none;   
        margin: 0;     
        padding: 0;
    }
    .Projects li a {
        text-decoration: none;
        color: #EF4228;
    }

    .Projects-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap:32px;
    }
    .project{
        margin-bottom: 32px;
        align-self: baseline;
    }
    .Project-img{
        width: 200px;
    }
    .Projec-img_font{
        align-self: flex-start;
        font-size: 32px;
        color: #EF4228;
    }
    .Project-description{
        font-size: 12px;
        color:#414042;
    }
    .Project-btn{
        background:linear-gradient(to top, #ef4228 5%, #ff6f59 100%);   
        color: white;
        font-weight: 700;
        padding: 8px 16px;
        border:none;
        border-radius: 8px;
        outline: none;
        cursor: pointer;
    }
    .Project-btn:active{
        transform:scale(0.90);
    }
    @media screen and (max-width:920px){
        .Projects-container{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap:32px;
    }
    }
    </style>


<svelte:head>
    <title>Proyectos</title>
</svelte:head>
<div class="Projects">

    <div class="Projects-container">
        <div class="project">
            <img class="Project-img" src={logo} alt="">
            <p class="Project-description">Matematips es un proyecto personal que nació de la necesidad de practicar JavaScript, manipulación del DOM y fortalecer la lógica de programación con métodos numérico para resolver problemas matemáticos.</p>
           <a href="https://matematips.vercel.app/" target="_blank"> <button class="Project-btn" >Ir al sitio</button></a>
        </div>
        <div class="project">
            <img class="Project-img" src={logoUi} alt="">
            <p class="Project-description">La UIquipedia es una librería de recursos de UI/UX hecha por un diseñador para desarrolladores con el fin de darle solución a los problemas más comunes de usabilidad en la WEB (en desarrollo).</p>
           <a href="https://www.behance.net/gallery/116898473/La-UIquipedia" target="_blank"> <button class="Project-btn" >Ir al sitio</button></a>
        </div>
       
        <div class="project">
            <img class="Project-img" src={git} alt="">
            <p class="Project-description">Repositorio de Github donde están publicados todos los proyectos en los que estoy trabajando, algunos en Github Pages.</p>
            <a href="https://github.com/guillermocvelez" target="_blank"> <button class="Project-btn" >Ir al sitio</button></a>
        </div>
        <div class="project">
            <img class="Project-img" src={behance} alt="">
            <p class="Project-description">Portafolio de Behance donde publico algunos proyectos de UI y otras cosas relacionadas con diseño</p>
            <a href="https://www.behance.net/guillermocv" target="_blank"> <button class="Project-btn" >Ir al sitio</button></a>
        </div>
    </div>

    


</div>
