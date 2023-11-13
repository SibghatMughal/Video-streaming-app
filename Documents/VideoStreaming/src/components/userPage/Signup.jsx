import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Typography } from "@mui/material";
import { Apple, Facebook, Google } from "@mui/icons-material";

const labelStyles = {
  fontWeight: "600",
  fontSize: "16px",
  color: "#101828",
};

const inputStyles = {
  borderRadius: "64px",
  borderColor: "#EAECF0",
  color: "#667085",
  fontSize: "18px",
  marginTop:'2px',
  height:'40px',
  backgroundColor: "transparent",
  "&:hover": {
    borderColor: "#EAECF0" // Change border color on hover
  },
  "&:focus": {
    borderColor: "#EAECF0", // Change border color on focus
  }
};

const buttonStyles = {
    borderRadius: '64px',
    borderColor: 'lightgray',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    width:'100%',
    color:'#101828',
    '&:hover': {
      borderColor: 'lightgray', // Change the border color on hover
      outline: 'lightgray', // Change the outline color on hover
    },
  };

const Signup = () => {
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
  return (
  
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <label htmlFor="name" style={labelStyles}>
              Name
            </label>
            <TextField
              fullWidth
              variant="outlined"
              id="name"
              placeholder="Enter your name"
              InputProps={{
                style: inputStyles
              }}
              InputLabelProps={{
                shrink: true,
                style: {
                  backgroundColor: "white",
                  padding: "0 5px"
                }
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <label htmlFor="email" style={labelStyles}>
              Email
            </label>
            <TextField
              fullWidth
              variant="outlined"
              id="email"
              placeholder="Enter your email"
              InputProps={{
                style: inputStyles
              }}
              InputLabelProps={{
                shrink: true,
                style: {
                  backgroundColor: "white",
                  padding: "0 5px"
                }
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <label htmlFor="password" style={labelStyles}>
              Password
            </label>
            <TextField
              fullWidth
              variant="outlined"
              id="password"
              type={values.showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              InputProps={{
                style: inputStyles,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                shrink: true,
                style: {
                  backgroundColor: 'white',
                  padding: '0 5px',
                },
              }}
              value={values.password}
              onChange={handleChange('password')}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                background: "#D62F7F",
                borderRadius: "64px",
                padding:'12px',
                "&:hover": {
                  background: "white",
                  color: "black"
                }
              }}
            >
              Signup
            </Button>
          </Grid>
        </Grid>
        <div className="signup-container">
      <div className="line"></div>
      <span className="signup-text">Or Sign Up with</span>
      <div className="line"></div>
    </div>
    <div className="d-flex align-items-center justify-content-between text-center w-100 gap-2 my-2">
    <Button variant="outlined" startIcon={<Google/>} sx={buttonStyles}>
    Google
      </Button>
      <Button variant="outlined" startIcon={<Facebook sx={{color:'blue'}}/>}  sx={buttonStyles}>
        Facebook
      </Button>
      <Button variant="outlined" startIcon={<Apple/>} sx={buttonStyles}>
        Apple
      </Button>
    </div>
    <div className="d-flex align-items-center justify-content-center  w-100 text-center mt-4">
      <Typography variant="body2" color="textSecondary" style={{width:'60%'}}>
        By continuing, you agree to{' '}
        <Typography variant="body2" component="span" color="textPrimary" fontWeight="bold">
          Str3mly Terms of Service
        </Typography>{' '}
        and{' '}
        <Typography variant="body2" component="span" color="textPrimary" fontWeight="bold">
          Privacy Policy
        </Typography>
        .
      </Typography>
    </div>
      </form>
 
  );
};

export default Signup;
