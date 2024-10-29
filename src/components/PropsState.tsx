import { Button, Typography } from "@mui/material";
import React from "react";

interface PropsStateProps {
    another: string
}
 
interface PropsStateState {
    messege: string
    someNumber: number
}
 
class PropsState extends React.Component<PropsStateProps, PropsStateState> {
    state: Readonly<PropsStateState> ={
        messege: "Welcome visitor",
        someNumber: 0
    }
    render() { 
        return ( 
            <>
                <Typography>{this.state.messege}</Typography>
                <Typography>From Props: {this.props.another}</Typography>
                <Typography>From State: {this.state.someNumber}</Typography>
                <Button onClick={() => this.setState({messege: 'Thank you for subscribing', someNumber: 5})}>Subscribe</Button>
            </>
         );
    }
}
 
export default PropsState;