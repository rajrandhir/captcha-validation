<Box
                    key={i}
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
                        sx={{ width: 90, height: 90 }}
                        src="/static/images/avatar/2.jpg"
                      />
                    </div>
                    <Typography variant="h6" sx={{ textAlign: "center", my: 2 }}>
                      Login Form
                    </Typography>
                    <div>
                      <TextField
                        type="text"
                        label="Name"
                        size="small"
                        value={item.name}
                        onChange={(e) => onChangeHandler(e,i)}
                        name="name"
                        fullWidth
                      />
                    </div>
                    <div>
                      <TextField
                        type="email"
                        label="Emaiil"
                        size="small"
                        onChange={(e) => onChangeHandler(e,i)}
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
                        onChange={(e)=> onChangeHandler(e,i)}
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
                        onChange={e => onChangeHandler(e,i)}
                        value={item.conformpassword}
                        name="conformpassword"
                        fullWidth
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "1.5rem",
                      }}
                    >
                      <Button variant="contained" sx={{ mx: 2 }}>
                        Summit
                      </Button>
                      <Button variant="contained" onClick={addMore}>Add More</Button>
                    </div>
                  </Box>

// box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;