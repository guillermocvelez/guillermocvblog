

<style>
    input {
        width: 100%;
        background-color: white;
        background-image: none;
        border-radius: 4px;
        border:1px solid #ef4228;
        color:#6F6F6F;
        display: inline-block;
        font-feature-settings: "tnum";
        font-size: 0.8rem;
        height: 32px;
        line-height: 32px;
        list-style: none;
        margin: 0;
        outline: 0;
        padding: 4px 12px;
        width: 100%;
        box-sizing: border-box;
    }
    h4 {
        font-size: 16px;
    }
    p {
        width: 100%;
        font-weight: 300;
        color: #414042;
        font-size: 15px;
        margin-bottom: 10px;
    }
    form {
        position: relative;
        width: 100%;
    }
    .btn{
        box-shadow: inset 0px 1px 0px 0px #bee2f9;
        background: linear-gradient(to bottom, #ff6f59 0%, #ef4228 100%);
        background-color: #63b9ee;
        border-radius: 6px;
        border: none;
        display: inline-block;
        cursor: pointer;
        color:white;
        font-family: 'Arial';
        font-size: 15px;
        font-weight: bold;
        padding: 6px 24px;
        text-decoration: none;       
        width: 100%;
    }

    .btn:hover {
        background: linear-gradient(to bottom, #ef4228 5%, #ff6f59 100%);        
    }
    
    .btn:active{
        position: relative;
        top: 1px;
        outline: none;
        border:none;
    }
    .btn:focus{
        outline: none;
        border:none;
    }
    label {
        font-size: 12px;
    }
    .Newsletter h4{
        font-weight: 700;
        color: #414042;
    }
</style>


<div class="Newsletter">
    <h4>NEWSLETTER</h4>
    <p>Escribo sobre Diseño, Desarrollo Web y a veces de otras cosas</p>
    <form action="https://tinyletter.com/memorando" method="post" target="popupwindow" onsubmit="window.open('https://tinyletter.com/memorando', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
        <p>
            <label for="tlemail" >Entra tu dirección de correo</label>
        </p>
        <p>
            <input type="text"  name="email" id="tlemail" placeholder="@" autocomplete="off"/>
        </p>
        <input type="hidden" value="1" name="embed"/>
        <button class="btn" type="submit" value="Subscribe" >Suscribirse</button>
        </form>
        <p>No enviamos Spam</p>
        
</div>

