import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

interface UserResponse {
    id: number;
    name: string;
    displayName: string;
    role: string;
    reservationDisabled: boolean;
}

const Login: React.FC = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [userResponse, setUserResponse] = useState<UserResponse | null>(null);


    useEffect(() => {
        const fetchDataForPosts = async () => {
            try {
                const response = await fetch(`https://localhost:7099/User/LoggedIn`, {
                    method: 'GET',
                    headers: {
                        'accept': 'text/plain',
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include'
                });
    
                console.log(response);
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`HTTP error ${response.status}: ${errorText}`); // Dodaj errorText do komunikatu
                }
    
                const loginData = await response.json();
    
                console.log(loginData);
                setUserResponse(loginData);
            } catch (error) {
                console.error('Error during login:', error);
                // Dodaj tutaj obsługę błędów, np. wyświetlenie komunikatu użytkownikowi
            }
        };

        fetchDataForPosts();
    }, []);

    const onLoggedOut = async () => {
        console.log({ login, password }); 
        try {
            const response = await fetch(`https://localhost:7099/Authentication/Logout`, {
                method: 'POST',
                headers: {
                    'accept': 'text/plain',
                    'Content-Type': 'application/json',
                },
                credentials: 'include'
            });

            console.log(response);
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`HTTP error ${response.status}: ${errorText}`); // Dodaj errorText do komunikatu
            }

            setUserResponse(null);
        } catch (error) {
            console.error('Error during login:', error);
            // Dodaj tutaj obsługę błędów, np. wyświetlenie komunikatu użytkownikowi
        }
    };


    const onClickButton = async () => {
        console.log({ login, password }); 
        try {
            const response = await fetch('https://localhost:7099/Authentication/Login', {
                method: 'POST',
                headers: {
                    'accept': 'text/plain',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: login,
                    password: password,
                }),
                credentials: 'include'
            });

            console.log(response);
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`HTTP error ${response.status}: ${errorText}`); // Dodaj errorText do komunikatu
            }

            const loginData = await response.json();

            console.log(loginData);
            setUserResponse(loginData);
        } catch (error) {
            console.error('Error during login:', error);
            // Dodaj tutaj obsługę błędów, np. wyświetlenie komunikatu użytkownikowi
        }
    };

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
                    value={login}
                    onChange={(event) => setLogin(event.target.value)}
                />
                <TextField
                    required
                    margin="dense"
                    id="password" // Poprawione id na "password"
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <Button variant="contained" size="large" onClick={onClickButton}>Login</Button>
                <Button variant="contained" size="large" onClick={onLoggedOut}>Log Out</Button>
            </Container>
            {userResponse && <Typography>Hello {userResponse.displayName}</Typography>}
        </>
    );
};

export default Login;
