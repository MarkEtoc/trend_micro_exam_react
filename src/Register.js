import React, {useState} from "react";
import './register.css';
import { FaCheckCircle } from "react-icons/fa";

function Register() {


    const [formdata, setFormdata] = useState({
        firstName: '',
        lastName: '',
        email: '',
        isAcceptedThePolicy: false,
        isPasswordInvalidMinimum: '8 Characters min.',
        isPasswordInvalidOneNumber: 'One Number'
    })

    const [password, setPassword] = useState({
        password: ''
    })

    const [ischaracterMinTrue, setIsCharacterMinTrue] = useState(false)
    const [isoneNumberTrue, setIsOneNumberTrue] = useState(false)

    const handleChangePassword = (event) => {
        let computedInvalidPassword = event.target.value 

        setPassword(prevPassword => {
            return {
                ...prevPassword,
                [event.target.name]: event.target.value
            }
          })

        setIsCharacterMinTrue( () => {
            return computedInvalidPassword.length >= 8 ? true : false
        })
        setIsOneNumberTrue( () => {
            for(let i = 0; i < computedInvalidPassword.length; i++){
                if(!isNaN(computedInvalidPassword.charAt(i)) && !(computedInvalidPassword.charAt(i) === " ") ){
                    var res = 'true';
                }
            }
            return res == 'true'? true : false
        })
      }

    const handleChange = (event) => {
        const {name, value, type, checked} = event.target
        setFormdata(prevFormdata => {
            return {
                ...prevFormdata,
                [name] : type === "checkbox" ? checked : value
            }
        })
    }

    const handleSubmit= (event) => {
        event.preventDefault();
    }


    const showPassword = () => {

        let password = document.querySelector('[name=password]')

        if(password.getAttribute('type')==='password') {
            password.setAttribute('type', 'text');
            document.getElementById('faa-eye').style.color = 'blue'

        } else {
            password.setAttribute('type', 'password');
            document.getElementById('faa-eye').style.color = 'gray'
        }
    }


    return(<form className="register" onSubmit={handleSubmit}>
    <div className="register__back">
        <span><i class="fa-solid fa-left-long"></i> Back</span>
    </div>

    <div className='register__container'>

        <p className='register__start-from-free'>Start from free</p>

        <p className='register__create-an-account'>Create an account</p>
        
        <div className='register__div--google'>
        <i className="fa-brands fa-google"></i>
        <input className='register__input register__btn register__btn--google' 
        type='button' 
        value='Sign up with Google' />
        </div>

        <div className='register__div--facebook'>
        <i className="fa-brands fa-facebook-f"></i>
        <input className='register__input register__btn register__btn--facebook' 
        type='button' 
        value='Sign up with Facebook' />
        </div>

        <p className='register__p--or-use'>Or use your email for registration</p>

        <div className='register__line'></div>

        <input className='register__input register__input--text register__input--first-name' type='text' 
        placeholder='First Name' 
        onChange={handleChange}
        value={formdata.firstName}
        name='firstName' />
        

        <input className='register__input register__input--text register__input--last-name' type='text' 
        placeholder='Last Name' 
        onChange={handleChange}
        value={formdata.lastName} 
        name='lastName' />

        <input className='register__input register__input--text register__input--email' type='email' 
        placeholder='E-mail' 
        onChange={handleChange}
        value={formdata.email}
        name='email' />

        <div className="register__password">
            <input className='register__input register__input--text register__input--password' type='password' 
            placeholder='Password' 
            onChange={handleChangePassword}
            value={password.password} 
            name='password' />
            <i id="faa-eye" className="fa-solid fa-eye"
            onClick={showPassword}
            ></i>

        <div className="register__password-error-container">
            <div className="register__password-error-characters-minimum">
            <p className="register__characters-min">&nbsp;<FaCheckCircle color={ischaracterMinTrue? 'green': 'gray'}/>{formdata.isPasswordInvalidMinimum}</p>
            </div>

            &nbsp;<div className="register__password-error-one-number">
            <p className="register__characters-one-number"> &nbsp;<FaCheckCircle color={isoneNumberTrue? 'green': 'gray'}/>{formdata.isPasswordInvalidOneNumber}</p>
            </div>
            </div>
        </div>

        <div className='register__terms-of-service-container'>
            <input className='register__input register__input--text register__input--terms-of-service' 
            type='checkbox' 
            id='terms-of-service' 
            onChange={handleChange}
            checked={formdata.isAcceptedThePolicy} 
            name='isAcceptedThePolicy'/>
            <label className='register__label--terms-of-service' htmlFor='terms-of-service'>By creating account, you agree to accept our Privacy Policy, Terms of Service and Notification settings.</label>
        </div>

        <input className='register__input register__button--create-free-account' 
        type='button' 
        value='Create a Free Account!' 
        onClick={handleSubmit}/>

        <p className='register__p--already-have-account'>Already have an account? 
        <a href=''>Log in</a></p>

    </div>

    </form>)

}

export default Register;
