import { useForm } from 'react-hook-form'

import './App.css'
import { StylesForm } from './StylesForm'

import logo from "./assets/logo.svg"
import eye from "./assets/eye.svg"
import arroba from "./assets/arroba.svg"

function App() {

  type dados = {
    email: string,
    senha: string
  }

  //  const { register, handleSubmit, formState: {errors} } = useForm<dados>();
  //  DESCOMENTAR QUANDO IMPLEMENTAR MENSAGEM DE ERRO!

  const { register, handleSubmit } = useForm<dados>();

  const submitConsole = (data: dados) => console.log(data)

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

          <h1>Faça seu login na plataforma</h1>

          <StylesForm onSubmit={handleSubmit(submitConsole)}>

            <div className='inputs'>
              
              <div className="field">
                <img src={arroba} alt="" />
                <input type="email" placeholder='E-mail' {...register("email", { required: true })}/>
                {/* {errors.email && <p>Coloque seu E-mail!</p>} */}
              </div>
              
              <div className="field">
                <img src={eye} alt="" />
                <input type="password" placeholder='Senha' {...register("senha", { required: true, minLength: 8})}/>
                {/* {errors.senha && <p>Coloque sua senha!</p>}
                {errors.senha?.type === "minLength" &&  
                <p>A senha deve ter no mínimo 8 caracteres!</p>}*/}
              </div>
              
            </div>

            <a href="https://www.google.com">Esqueci minha senha</a>

            <button type='submit'>ENTRAR</button>

          </StylesForm>

        </div>
        

      </div>

    </main>
  )
}

export default App
