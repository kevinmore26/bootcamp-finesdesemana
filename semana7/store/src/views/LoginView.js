import {useState,useEffect,useContext} from 'react'
import { AuthContext } from '../context/authContext'
import imgLogin from '../assets/login.jpg'
//ctrl + tecla espacio
export default function LoginView(){

    const {signIn} = useContext(AuthContext)    

    return(
        <div className='h-100 row' >
             <div className='col-sm-12 col-md-6'>
                    <img src={imgLogin} style={{
                        width:'100%',
                        height:'100%',
                        objectFit:'cover'
                    }}
                    alt="imagen login"
                    />
              </div>   
              <div className='col-sm-12 col-md-6 d-flex justify-content-center align-items-center'> 
                        <div className='text-center'>
                                <h2>Ingresa ! :D</h2>
                                <button className='btn  ' onClick={signIn} style={{backgroundColor:'#E94235',color:'white'}}>
                                <i className="fab fa-brands fa-google me-2"></i>
                                    Ingresa con google

                                </button>
                        </div>
              </div>

        </div>
        
    )
}