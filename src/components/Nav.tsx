import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Dropdown = () => {
    const [age, setAge] = useState(0);

    const handleChange = (event: SelectChangeEvent) => {
      setAge(Number.parseInt(event.target.value));
    };
    const [ageDet, setAgeDet] = useState('');

    const handleDetChange = (event: SelectChangeEvent) => {
      setAgeDet(event.target.value as string);
    };

    const ages = [
        {value: 30, desc: "Thirty"},
        {value: 40, desc: "Thourty"},
    ];

    const dict = {
        30: [
            {value: 30, desc: "Thirty"},
            {value: 31, desc: "Thirty One"},
            {value: 32, desc: "Thirty Two"}
        ],
        40: [
            {value: 40, desc: "Thourty"},
            {value: 41, desc: "Thourty One"},
            {value: 42, desc: "Thourty Two"},
        ],
    }
    return ( 
        <>
            <Stack spacing={2}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age.toString()}
                label="Age"
                onChange={handleChange}
                >
                <MenuItem key={0} value={0}>None</MenuItem>
                {ages.map((a) => {
                    return (
                        <MenuItem key={a.value} value={a.value}>{a.desc}</MenuItem>
                    )
                })}
                </Select>
            </FormControl>
            <FormControl fullWidth  disabled={age == 0}>
                <InputLabel id="demo-simple-select-label-det">Age details</InputLabel>
                <Select
                labelId="demo-simple-select-label-det"
                id="demo-simple-select-det"
                value={ageDet}
                label="Age details"
                onChange={handleDetChange}
                >
                {
                
                age > 0 && dict[age as keyof typeof dict].map((a) => {
                    return (
                        <MenuItem key={a.value} value={a.value}>{a.desc}</MenuItem>
                    )
                })}
                </Select>
            </FormControl>
            <Typography>{ageDet}</Typography>
            </Stack>
        </>
     );
}
 
export default Dropdown;