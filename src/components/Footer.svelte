


<style>
    .Footer{
        background: rgba(28,41,56,0.8);
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
    .footer-svelte {
        display: flex;
        align-self: center;
    }
    
</style>

<footer class="Footer">
    <div class="Footer-container">
        <div class="Footer-content">
            <div class="Footer-copy">
                <h4>Hecho por GCV</h4>
            </div>
            <div class="Footer-svelte">
                <h4>Hecho con Svelte</h4>
            </div>
        </div>
    </div>
</footer>