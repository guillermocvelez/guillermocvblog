


<style>
    .Footer{
        background: #414042;
        color: white;
        padding: 1.5em ;
        margin: 2em 0 0 0;
        font-size: 13px;
        font-weight: 300;
    }
    .Footer-container {
        display: grid;
        grid-template-columns: minmax(auto,1024px);
        justify-content: center;
        align-items: center;
    }
    .Footer-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .Footer-svelte{
        display: flex;
        align-items: center;
    }
    .Footer-svelte img {
        margin: 0 0 0 1rem;
        width: 25px;
    }
    
    
</style>

<footer class="Footer">
    <div class="Footer-container">
        <div class="Footer-content">
            <div class="Footer-copy">
                <h4>Guillermo Castaño Vélez 2021</h4>
            </div>
            <div class="Footer-svelte">
                <h4>Powered with</h4>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png" alt="">
            </div>
        </div>
    </div>
</footer>