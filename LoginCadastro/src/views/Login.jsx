import './Login.css'
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { AiFillInstagram } from "react-icons/ai";
import { FaApple } from "react-icons/fa";

export default function Login(){
    return(
        <>
            <div className="container">
                <div className="containerCadastro">
                    <h1>Login</h1>
                    <form>
                        <div className="inputs">    
                            <input type="email" placeholder='Email' id='email' name='email' />
                        </div>
                        <div className="inputs">
                            <input type="password" placeholder='Senha' id='password' name='password' />
                        </div>
                        <p>Não tem uma conta? <Link to='/cadastro'>Cadastrar</Link></p>
                        <button>Fazer Login!</button>
                        <div className="container-icons">
                            <FcGoogle id='google' size={36}/>
                            <p>Logar com o Google</p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}