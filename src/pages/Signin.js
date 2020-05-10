import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import {useAuth} from '../store'

import loginSvg from  "../assets/images/login.svg"
import InputGroup from '../components/form/InputGroup'

import {StyledBgGradient} from '../styledComponents'

const Signin = ({history}) => {

    const [loginObj, setLoginObj] = useState({
        email: 'boki@gmail.com',
        password: 'bokili'
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
        console.log(loginObj)
    }

    const changeHandler = (e) => {        
        setLoginObj({...loginObj, [e.target.name]: e.target.value})
    }


    return (
        <StyledBgGradient>

            <StyledFormWrapper>
                {/* <StyledIlustrationDiv>
                        <img src={loginSvg} alt=""/>
                </StyledIlustrationDiv> */}

                <StyledForm onSubmit={submitHandler}>
                    <img className='loginIcon' src={loginSvg} alt=""/>

                    <h1>Sign in</h1>


                    <InputGroup type="email" name="email" value={loginObj.email} onChange={changeHandler}/>                    
                    <InputGroup type="password" name="password" value={loginObj.password} onChange={changeHandler}/>                    
                  

                    <StyledBtn style={{margin: '10px auto'}} type="submit">
                        {!loading ? 'Sign in' : 'Signing in...'}
                    </StyledBtn>


                    <div style={{marginTop:'20px'}}>
                        Dont have an account? <Link to='/signup'>Signup here</Link>.
                    </div>
                </StyledForm>
            </StyledFormWrapper>
        </StyledBgGradient>
    )
}

export default Signin


const StyledFormWrapper = styled.div`

    width: 500px;
    /* height: 500px; */
    border-radius: 5px;
    background: #fff;
    display: flex;    
    box-shadow: 0px 4px 5px rgba(0,0,0,.5);
    padding: 10px;
`

const StyledIlustrationDiv = styled.div`
    height:100%;
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 60%;

    }
`

const StyledForm = styled.form`
    height:100%;
    width: 100%;
    /* flex:1; */
    /* display: flex; */
    /* flex-direction: column;
    align-items: center;
    justify-content: center; */
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

const StyledBtn = styled.button`

    width: 100px;
    height:35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--main);
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: 0.9rem;

    &:hover {
        filter: brightness(90%);
    }

`