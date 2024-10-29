import { Button, Container, TextField, Typography } from "@mui/material";
import React from "react";

interface LoginProps {
    
}
 
interface UserResponse {
    id: number;
    name: string;
    displayName: string;
    role: string;
    reservationDisabled: boolean;
  }

interface LoginState {
    login: string;
    password: string;
    userResponse: UserResponse | null;
}
 
class Login extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);
        this.state = {
            login: "",
            password: "",
            userResponse: null
        }
    }
    onClickButton = async () => {
        console.log(this.state);

        try {
            const response = await fetch('https://localhost:7099/Authentication/Login', {
                method: 'POST',
                headers: {
                    'accept': 'text/plain',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: this.state.login, // Użyj loginu ze stanu
                    password: this.state.password, // Użyj hasła ze stanu
                }),
                cache: "force-cache"
            });

            console.log(response);
            if (!response.ok) {
                const errorText = await response.text(); // Pobierz treść błędu
                throw new Error(`HTTP error ${response.status}: ${errorText}`);
            }

            let loginData = await response.json();
            this.setState({userResponse: loginData});

            // Przekierowanie lub inna akcja po udanym logowaniu
            // np.: this.props.history.push('/dashboard');


        } catch (error) {
            console.error('Error during login:', error);
            // Wyświetl komunikat o błędzie użytkownikowi
            // np.: alert("Błąd logowania: " + error.message);
        }
    }
    render() { 

        return ( 
            <>
                <Container maxWidth="xs">
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="login"
                        name="login"
                        label="Login"
                        type="text"
                        fullWidth
                        value={this.state.login}
                        onChange={(event) => this.setState({login: event.target.value})}
                        />
                    <TextField
                        required
                        margin="dense"
                        id="passowrd"
                        name="password"
                        label="Password"
                        type="password"
                        fullWidth
                        value={this.state.password}
                        onChange={(event) => this.setState({password: event.target.value})}
                        />
                    <Button variant="contained" size="large" onClick={this.onClickButton}>Login</Button>
                </Container>
                {
                    this.state.userResponse && <Typography>Hello {this.state.userResponse.displayName}</Typography>
                }
            </>
         );
    }
}
 
export default Login;