import React, {useState} from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confpassword, setConfpassword] = useState(''); 
    const [msg,setMsg] = useState('');
    const history = useHistory();

    const Register = async(e) =>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/register',{
                name: name,
                email: email,
                password: password,
                confpassword: confpassword
            });
            history.push("/");
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            } 
        }
    }

  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
         <div className="columns is-centered">
            <div className="column is-4-desktop">
                <form onSubmit={Register} className="box">
                <p className='has-text-centered'>{msg}</p>
                    <div className="field mt-5">
                        <label className="label">name</label>
                        <div className="controls">
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="input" placeholder='name'/>
                        </div>
                    </div>
                    <div className="field mt-5">
                        <label className="label">email</label>
                        <div className="controls">
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="input" placeholder='email'/>
                        </div>
                    </div>
                    <div className="field mt-5">
                        <label className="label">password</label>
                        <div className="controls">
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="input" placeholder='******'/>
                        </div>
                    </div>
                    <div className="field mt-5">
                        <label className="label">Confirm password</label>
                        <div className="controls">
                            <input value={confpassword} onChange={(e) => setConfpassword(e.target.value)} type="password" className="input" placeholder='******'/>
                        </div>
                    </div>
                    <div className="field mt-5">
                        <button className='button is-success is-fullwidth'>Register</button>
                    </div>
                </form>
            </div>
         </div>
        </div>
      </div>
    </section>
  )
}

export default Register