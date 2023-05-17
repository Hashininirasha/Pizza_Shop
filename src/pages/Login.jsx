import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Card, CardHeader, CardContent, CardActions, Button, TextField } from '@mui/material';


const Login = () => {
    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');

    const usenavigate=useNavigate();

    useEffect(()=>{
sessionStorage.clear();
    },[]);

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
        
            if (username === "Hashini" && password === "123") {
                // Successful login
                toast.success('Success');
                sessionStorage.setItem('username', username);
                // sessionStorage.setItem('userrole', resp.role);
                usenavigate('/');
            } else {
                // Invalid username or password
                toast.error('Please enter valid credentials');
            }
        }
    }
    
    const ProceedLoginusingAPI = (e) => {
      e.preventDefault();
      if (validate()) {
        let inputobj = {
          "username": username,
          "password": password
        };
        fetch("https://localhost:44308/User/Authenticate", {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(inputobj)
        }).then((res) => {
          return res.json();
        }).then((resp) => {
          console.log(resp);
          if (Object.keys(resp).length === 0) {
            toast.error('Login failed, invalid credentials');
          } else {
            toast.success('Success');
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('jwttoken', resp.jwtToken);
            usenavigate('/');
          }
        }).catch((err) => {
          toast.error('Login Failed due to: ' + err.message);
        });
      }
    };
    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Please Enter Username');
        } else if (!/^[A-Za-z]+$/.test(username)) {
          result = false;
          toast.warning('Username should only contain alphabetic characters');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }
    return (
       
        <div className="row" style={{ backgroundImage: `url("https://hdwallpaperim.com/wp-content/uploads/2017/09/17/60012-food-pizza-cheese.jpg")`, backgroundSize: 'cover' }}>
      
        <div className="row">
  <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
    <form onSubmit={ProceedLogin} className="container">
      <Card>
        <CardHeader>
          <h2>User Login</h2>
        </CardHeader>
        <CardContent>
          <div className="form-group">
            <label>User Name <span className="errmsg">*</span></label>
            <TextField value={username} onChange={e => usernameupdate(e.target.value)} variant="outlined" className="form-control"/>
          </div>
          <div className="form-group">
            <label>Password <span className="errmsg">*</span></label>
            <TextField type="password" value={password} onChange={e => passwordupdate(e.target.value)} variant="outlined" className="form-control" />
          </div>
        </CardContent>
        <CardActions>
          <Button type="submit" variant="contained" color="primary">Login</Button>
        </CardActions>
      </Card>
    </form>
  </div>
</div>
</div>

    );
}

export default Login;