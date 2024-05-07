import './App.css'

import backimg from  './assets/unsplash_Hcfwew744z4.svg' 
import logo from "./assets/logo.svg"

function App() {

  return (
    <main>

      <div className='photo'>
        <img src={backimg} alt="" />
        <p>Aprenda desenvolvimento frontend do zero agora mesmo</p>
      </div>

      <div className='user'>

        
        <div className="presentation">

          <img src={logo} alt="" />
          <span>EFRONT</span>

        </div>  
        
        
        <form action="">

          <h1>Faça seu login na plataforma</h1>

          <input type="text" placeholder='E-mail'/>
          <input type="text" placeholder='Senha'/>

          <a href="https://www.google.com">Esqueci minha senha</a>

          <button>Entrar</button>

        </form>

      </div>

    </main>
  )
}

export default App
