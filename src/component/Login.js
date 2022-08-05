import React, { useState } from "react";
import "../component/LoginStyle.css";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/system";
import CancelIcon from "@mui/icons-material/Cancel";
import ReCAPTCHA from "react-google-recaptcha";


const Login = () => {
  const [verified, setVerified] = useState(false)
  const [val, setVal] = useState([
    {
      name: "",
      email: "",
      password: "",
      conformpassword: "",
    },
  ]);
 

  const onChangeHandler = (e, i) => {
    const newVal = [...val];
    newVal[i][e.target.name] = e.target.value;
    setVal(newVal);
  };


  const addMore = () => {
    setVal([...val, val]);
  };
  const removeFormField = (i) => {
    let formVal = [...val];
    formVal.splice(i, 1);
    setVal(formVal);
  };

  const sumitHandler = (e) => {
    e.preventDefault();
    // setFormErrors(validate(val))
   val.map((item)=>{
    if(item.name === "" || item.email === "" || item.password === "" || item.conformpassword === ""){
      alert("name field is empty")
    }else{
      alert('All is Well')
    }
   })
  setVal(val)
    
  };
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(!verified)
  }

  return (
    <>
      <section className="container_main">
       
            <Card className="card_wrap">
              <CardContent>
                <form onSubmit={sumitHandler}>
                  <Box
                    sx={{
                      "& .MuiTextField-root": { my: 1.5 },
                      margin: "0 0.5rem 0rem 1rem",
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <div className="user_img">
                      <Avatar
                        alt="T"
                        sx={{ width: 60, height: 60 }}
                        src="/static/images/avatar/2.jpg"
                      />
                    </div>
                    <Typography
                      variant="h6"
                      sx={{ textAlign: "center", my: 2}}
                    >
                      Registration Form
                    </Typography>
                    {val.map((item, i) => (
                      <div
                        key={i}
                        style={{
                          border: "0.5px solid #e6e6e6",
                          marginBottom: "1rem",
                          padding: "1rem",
                          borderRadius: "8px",
                          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                          position: "relative",
                        }}
                      >
                        {i ? (
                          <div
                            style={{
                              position: "absolute",
                              top: "-8px",
                              right: "-8px",
                            }}
                          >
                            <IconButton
                              color="secondary"
                              onClick={() => removeFormField(i)}
                            >
                              <CancelIcon />
                            </IconButton>
                          </div>

                        ) : null}
                        <div>
                          <TextField
                            type=""
                            label="Name"
                            size="small"
                            value={item.name}
                            onChange={(e) => onChangeHandler(e, i)}
                            name="name"
                            fullWidth
                          />
                          <p>{}</p>
                        </div>
                        <div>
                          <TextField
                            type="email"
                            label="Emaiil"
                            size="small"
                            onChange={(e) => onChangeHandler(e, i)}
                            value={item.email}
                            name="email"
                            fullWidth
                          />
                        </div>
                        <div>
                          <TextField
                            type="password"
                            label="Password"
                            size="small"
                            onChange={(e) => onChangeHandler(e, i)}
                            value={item.password}
                            name="password"
                            fullWidth
                          />
                        </div>
                        <div>
                          <TextField
                            type="password"
                            label="conform Password"
                            size="small"
                            onChange={(e) => onChangeHandler(e, i)}
                            value={item.conformpassword}
                            name="conformpassword"
                            fullWidth
                          />
                        </div>
                        
                       
                      </div>
                    ))}
                    
                          <div style={{textAlign: "end"}}>
                          <Button variant="outlined" size="small" onClick={addMore}>
                        Add More
                      </Button>
                          </div>

                          <div>
                          <ReCAPTCHA
                            sitekey="6Lc3mEshAAAAALvoXGzqKsxMivoqbnccfPr0OtZw"
                            onChange={onChange}
                          />
                          </div>
                       
                        
                    <div
                      style={{
                        textAlign:"center",
                        marginTop: "1rem",
                      }}
                      className="sumit_btn"
                    >
                       
                      <Button variant="contained" size="small" type="submit">
                        Summit
                      </Button>
                      
                    </div>
                  </Box>
                </form>
              </CardContent>
            </Card>
        
      </section>
    </>
  );
};

export default Login;
