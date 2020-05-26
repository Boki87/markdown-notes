import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import {useAuth} from '../store'

import loginSvg from  "../assets/images/login.svg"
import InputGroup from '../components/form/InputGroup'

import {StyledBgGradient, BtnPrimary} from '../styledComponents'

const Signin = ({history}) => {

    const [loginObj, setLoginObj] = useState({
        email: '',
        password: ''
    })

    const {userLogin, user, loading, setLoading} = useAuth()

    useEffect(() => {
        if(user) {
            history.push('/')
        }
    }, [user])

    const submitHandler = (e) => {
        e.preventDefault()
        setLoading(true)
        userLogin(loginObj.email, loginObj.password)        
    }

    const changeHandler = (e) => {        
        setLoginObj({...loginObj, [e.target.name]: e.target.value})
    }


    return (
        <StyledBgGradient>

            <StyledFormWrapper> 

                <StyledForm onSubmit={submitHandler}>
                    <img className='loginIcon' src={loginSvg} alt=""/>

                    <h1>Sign in</h1>


                   
                    <InputGroup type="email" name="email" value={loginObj.email} onChange={changeHandler} placeholder='JohnDoe@gmail.com'/>                    
                    <InputGroup type="password" name="password" value={loginObj.password} onChange={changeHandler} placeholder='Password'/>                      
                  

                    <BtnPrimary style={{margin: '10px auto'}} type="submit">
                        {!loading ? 'Sign in' : 'Signing in...'}
                    </BtnPrimary>


                    <div style={{marginTop:'20px'}}>
                        Dont have an account? <Link to='/signup'>Signup here</Link>.
                    </div>
                </StyledForm>
            </StyledFormWrapper>
        </StyledBgGradient>
    )
}

export default Signin


export const StyledFormWrapper = styled.div`

    width: 500px;    
    border-radius: 5px;
    background: #fff;
    display: flex;    
    box-shadow: 0px 4px 5px rgba(0,0,0,.5);
    padding: 10px;
`



export const StyledForm = styled.form`
    height:100%;
    width: 100%;
    text-align: center;
    h1 {
        color: var(--main);
    }

    .loginIcon {
        width:100px;
        height: auto;
        margin-top: -50px;
    }
`

