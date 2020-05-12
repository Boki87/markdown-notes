import React, {useState, useEffect, createRef} from 'react'
import {Link} from 'react-router-dom'

import {useAuth} from '../store'
import {useToasts} from '../store'

import signupSvg from  "../assets/images/signup.svg"
import InputGroup from '../components/form/InputGroup'

import {StyledBgGradient, BtnPrimary} from '../styledComponents'
import {StyledFormWrapper, StyledForm} from './Signin'

const Signup = ({history}) => {

    const [signupObj, setSignupObj] = useState({
        email:'',
        password:'',
        passwordConfirm:''
    })

    const {user, loading, setLoading, userSignup} = useAuth()
    const {setToast} = useToasts()

    const confirmPassword = createRef()

    useEffect(() => {
        if(user) {
            history.push('/')
        }
    }, [user])


    const changeHandler = (e) => {
        setSignupObj({...signupObj, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setLoading(true)

        if(signupObj.password.length > 0 && signupObj.password === signupObj.passwordConfirm) {
            userSignup(signupObj.email, signupObj.password)            
        }else{                        
            window.alert('Passwords dont match')
            setLoading(false)
        }
    }

    return (
        <StyledBgGradient>
            <StyledFormWrapper>        
                <StyledForm onSubmit={submitHandler}>
                    <img className='loginIcon' style={{width:'150px'}} src={signupSvg} alt=""/>

                    <h1>Sign up</h1>                    
                    
                    <InputGroup type="email" name="email" placeholder="Email" value={signupObj.email} onChange={changeHandler}/>    

                    <InputGroup type="password" name="password" placeholder='Password' value={signupObj.password} onChange={changeHandler}/>                    

                    <InputGroup type="password" name="passwordConfirm" placeholder='Confirm Password' value={signupObj.passwordConfirm} onChange={changeHandler}/>                    
                  
                    <BtnPrimary style={{margin: '10px auto'}} type="submit">
                        {!loading ? 'Sign up' : 'Signing up...'}
                    </BtnPrimary>


                    <div style={{marginTop:'20px'}}>
                        Already have an account? <Link to='/signin'>Signin here</Link>.
                    </div>


                </StyledForm>        
            </StyledFormWrapper>
        </StyledBgGradient>
    )
}

export default Signup

