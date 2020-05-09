import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import {useAuth} from '../store'

import loginSvg from  "../assets/images/login.svg"
import InputGroup from '../components/form/InputGroup'


const Login = ({history}) => {

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
        <StyledWrapper>

            <StyledFormWrapper>
                <StyledIlustrationDiv>
                        <img src={loginSvg} alt=""/>
                </StyledIlustrationDiv>

                <StyledForm onSubmit={submitHandler}>

                    <h1>Sign in</h1>


                    <InputGroup type="email" name="email" value={loginObj.email} onChange={changeHandler}/>                    
                    <InputGroup type="password" name="password" value={loginObj.password} onChange={changeHandler}/>                    
                  

                    <StyledBtn style={{margin: '10px auto'}} type="submit">
                        {!loading ? 'Sign in' : 'Loading...'}
                    </StyledBtn>


                    <div style={{marginTop:'20px'}}>
                        Dont have an account? <Link to='/signup'>Signup here</Link>.
                    </div>
                </StyledForm>
            </StyledFormWrapper>
        </StyledWrapper>
    )
}

export default Login



const StyledWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: #2D3E50;
    background: -webkit-linear-gradient(top, #2D3E50, #6791BA);
    background: -moz-linear-gradient(top, #2D3E50, #6791BA);
    background: linear-gradient(to bottom, #2D3E50, #6791BA);
    display: flex;
    justify-content: center;
    align-items: center;
`


const StyledFormWrapper = styled.div`

    width: 800px;
    height: 500px;
    border-radius: 5px;
    background: #fff;
    display: flex;    
    box-shadow: 0px 4px 5px rgba(0,0,0,.5);

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
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        color: var(--main);
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