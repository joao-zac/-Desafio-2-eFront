import { useForm } from 'react-hook-form'

import './App.css'
import { StylesForm } from './styles/StylesForm'

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

  const { register, handleSubmit, formState: {errors} } = useForm<dados>();

  const submitConsole = (data: dados) => console.log(data)

  return (
    <main>

      <div className='photo'>
        <p>Aprenda desenvolvimento frontend do zero agora mesmo</p>
        {/* <img src={backimg} alt="" /> */}
      </div>

      <div className='user'>
        
        <div className="presentation">

          <div className="circle">
            <img src={logo} alt="Logo" />
          </div>
          
          <span>EFRONT</span>

        </div>  
        
        <div className="datas">

          <h1>Faça seu login na plataforma</h1>

          <StylesForm onSubmit={handleSubmit(submitConsole)}>

            <div className='inputs'>
              
              <div className="field">
                <img src={arroba} alt="" />
                <input type="email" placeholder='E-mail' {...register("email", { required: true })}/>
                
              </div>
              
              <div className="field">
                <img src={eye} alt="" />
                <input type="password" placeholder='Senha' {...register("senha", { required: true, minLength: 8})}/>
                
              </div>
              
            </div>

            <a href="#">Esqueci minha senha</a>

            {errors.email && <span className='alert-span'>Coloque seu e-mail!</span>}
            {errors.senha && <span className='alert-span'>Coloque sua senha!</span>}
            {errors.senha?.type === "minLength" &&  
            <span className='alert-span'>A senha deve ter no mínimo 8 caracteres!</span>}

            <button type='submit'>ENTRAR</button>

          </StylesForm>

        </div>
        

      </div>

    </main>
  )
}

export default App
