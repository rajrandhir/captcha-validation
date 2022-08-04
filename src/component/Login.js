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
  console.log(val);

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
    setVal(val);
  };
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true)
  }

  return (
    <>
      <section>
        <Grid container className="main-wrapper">
          <Grid item>
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
                        alt="Travis Howard"
                        sx={{ width: 75, height: 75 }}
                        src="/static/images/avatar/2.jpg"
                      />
                    </div>
                    <Typography
                      variant="h6"
                      sx={{ textAlign: "center", my: 2 }}
                    >
                      Login Form
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
                        <div className="captcha">
                          <ReCAPTCHA
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            onChange={onChange}
                          />
                        </div>
                      </div>
                    ))}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "1.5rem",
                      }}
                    >
                      <Button variant="contained" disabled={!verified} sx={{ mx: 2 }} type="submit">
                        Summit
                      </Button>
                      <Button variant="contained"  onClick={addMore}>
                        Add More
                      </Button>
                    </div>
                  </Box>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default Login;
