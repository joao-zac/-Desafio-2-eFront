import './App.css'

import logo from "./assets/logo.svg"
import eye from "./assets/eye.svg"
import arroba from "./assets/arroba.svg"

function App() {

  return (
    <main>

      <div className='photo'>
        <p>Aprenda desenvolvimento frontend do zero agora mesmo</p>
        {/* <img src={backimg} alt="" /> */}
      </div>

      <div className='user'>

        
        <div className="presentation">

          <img src={logo} alt="" />
          <span>EFRONT</span>

        </div>  
        
        <div className="datas">

          <form action="">

            <h1>Faça seu login na plataforma</h1>

            <div className='inputs'>
              
              <div className="field">
                <img src={arroba} alt="" />
                <input type="text" placeholder='E-mail'/>
              </div>
              
              <div className="field">
                  <img src={eye} alt="" />
                  <input type="text" placeholder='Senha'/>
              </div>
              
              
            </div>

            <a href="https://www.google.com">Esqueci minha senha</a>

            <button>Entrar</button>

          </form>

        </div>
        

      </div>

    </main>
  )
}

export default App
