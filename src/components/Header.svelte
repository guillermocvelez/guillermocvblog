<script>
    import analyticsTraking from '../utils/analytics';
</script>


<header class="Header">
    <div class="Header-container">
        <div class="Header-content">
            <div class="Header-logo">
                <img src="https://es.gravatar.com/userimage/34292835/9979b2a714d39e255c9beb228f6a23a3.jpg" alt="Avatar de Guillermo">
                <div class="Header-logo-info">
                    <h1>Guillermo Castaño Vélez
                        <span>UI/UX Designer & Frontend Developer y más cosas</span>
                    </h1>
                </div>
            </div>
            <div class="Header-social">
                <ul>
                    <li>
                        <a href="https://github.com/guillermocvelez" target="_blank" reel="noreferrer" on:click={analyticsTraking}><i class="fab fa-github-square"></i></a>
                        <img src="" alt="">
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/guillermo-casta%C3%B1o-v%C3%A9lez-97b68360/" target="_blank" reel="noreferrer" on:click={analyticsTraking}><i class="fab fa-linkedin"></i></a>
                        <img src="" alt="">
                    </li>
                    <li>
                        <a href="https://www.behance.net/guillermocv" target="_blank" reel="noreferrer" on:click={analyticsTraking}><i class="fab fa-behance-square"></i></a>
                        <img src="" alt="">
                    </li>
                   
                </ul>
            </div>
        </div>
    </div>
</header>

<style>
    h1{
        margin: 0;
    }
    .Header {
        background-color: #fafbfc;
        color: #414042;
        padding: 1em 0 0 0;
    }
    .Header-logo{
        display: flex;
        align-items: center;
        
    }
    .Header-logo-info{
        width: 100%;
        display: flex;
        align-items: center;
        
    }
    .Header-logo img{
        width: 15%;
        margin-right: 16px;
        border-radius: 100px;
    }
    .Header-container {
        display: grid;
        grid-template-columns: minmax(auto,1024px);
        justify-content: center;
        align-items: center;
    }
    .Header-content {
        display: flex;
        justify-content: space-between ;
        align-items: center;
    }
    .Header h1 {
        color: #414042;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 0.8;
        cursor: pointer;        
    }
    .Header h1 span {
        display: block;
        font-size: 13px;
        font-weight: 300;
        letter-spacing: normal;
        margin: 0.3em 0 0 0;
    }
    .Header ul {
        margin: 0;
        padding: 0;
        list-style: none;

    }

    .Header li {
        display: inline-block;
        margin: 0 0.05em 0 0;
    }
    .Header a {
        text-decoration: none;
        font-weight: 300px;
        font-size: 14px;
    }
    .Header-social img {
        width: 20px;
    }

    a i{
        font-size: 1.5rem;
        transition: all 4ms ease-in-out;
    }
    a i:hover{
        color: #EF4228;        
    }
    a i:active{
        transform: scale(0.9);
    }

</style>
