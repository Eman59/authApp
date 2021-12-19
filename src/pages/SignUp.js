import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {Link} from "react-router-dom";

const SignUp = () => {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}>
            <h3 className='form-header my-3'>SignUp Page</h3>
            <form>
                <TextField
                label="Name"
                id="outlined-start-adornment"
                sx={{ m: "auto", width: '30ch', display: 'flex' }}
                />
                <TextField
                label="Email"
                id="outlined-start-adornment"
                sx={{ m: "auto", width: '30ch', display: 'flex', mt: 2 }}
                />
                <FormControl sx={{ m: "auto", width: '30ch', display: 'flex', mt: 2  }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Password"
                />
                <p className='form-text'>return to <Link to="/login">Login</Link> page</p>
                </FormControl>
            </form>
        </Box>
    )
}

export default SignUp
