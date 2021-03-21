<script>
    import analyticsTraking from '../utils/analytics';
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
    </style>

<svelte:head>
    <title>General</title>
</svelte:head>
<div class="Projects">

    <h2 class="Projects-message">Me encuentro desarrollando una api para visualizar productos, de momento puedes consultarlos en los repositorios</h2>

    <ul>
        <li>
            <a href="https://github.com/guillermocvelez" target="_blank" reel="noreferrer" on:click={analyticsTraking}>Repositorio de Github <i class="fab fa-github-square"></i></a>
            <img src="" alt="">
        </li>
        <li>
            <a href="https://www.behance.net/guillermocv" target="_blank" reel="noreferrer" on:click={analyticsTraking}>Portafolio en Behance <i class="fab fa-behance-square"></i></a>
            <img src="" alt="">
        </li>
       
    </ul>


</div>