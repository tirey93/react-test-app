import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import React from "react";

interface DialogMineProps {
    open: boolean;
    handleClose: () => void;
    currentId: number;
}

interface DialogMineState {
    titles: Map<number, string>
}

class DialogMine extends React.Component<DialogMineProps, DialogMineState> {
    constructor(props: DialogMineProps) {
        super(props);
        this.state = {
            titles: new Map([
                [1, "title1"],
                [2, "title2"],
                [3, "title3"],
            ])
        };
    }

    render() {
        return (
            <>
                <Dialog
                    fullWidth
                    maxWidth="xs"
                    open={this.props.open}
                    onClose={this.props.handleClose}
                    PaperProps={{
                        component: 'form',
                        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                            event.preventDefault();
                            const formData = new FormData(event.currentTarget);
                            const formJson = Object.fromEntries((formData as any).entries());
                            console.log(formJson);
                            this.props.handleClose();
                        },
                    }}
                >
                    <DialogTitle>Editing</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Editing user nr: {this.props.currentId}
                        </DialogContentText>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="title"
                            name="title"
                            label="Title"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={this.state.titles.get(this.props.currentId)}
                            onChange={(event) => {
                                 return this.setState({titles: this.state.titles.set(this.props.currentId, event.target.value)});
                            }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleClose}>Cancel</Button>
                        <Button type="submit">Subscribe</Button>
                    </DialogActions>
                </Dialog>
            </>
        );
    }
}

export default DialogMine;