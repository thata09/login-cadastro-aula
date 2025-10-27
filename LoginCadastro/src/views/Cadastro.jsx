import './Cadastro.css'
import Login from './Login'
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { AiFillInstagram } from "react-icons/ai";
import { FaApple } from "react-icons/fa";



export default function Cadastro(){
    return(
        <>
            <div className="container">
                <div className="containerCadastro">
                    <h1>Cadastro</h1>
                    <form>
                        <div className="inputs-cadastro" >
                            <input type="text" placeholder='Digite seu nome' id='name' name='name' />
                        </div>
                        <div className="inputs-cadastro">    
                            <input type="email" placeholder='Digite seu email' id='email' name='email' />
                        </div>
                        <div className="inputs-cadastro">
                            <input type="password" placeholder='Digite sua senha' id='password' name='password' />
                        </div>
                        <div className="inputs-cadastro">
                            <input type="password" placeholder='Confirme sua senha' id='name' name='name' />
                        </div>
                        <button>Enviar!</button>
                        <p>Já tem uma conta? <Link to='/'>Entrar</Link></p>
                        <div className="container-icons">
                            <AiFillInstagram  size={40}/>
                            <FcGoogle id='google' size={40}/>
                            <FaApple      size={42}/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}