import { Button, Grid2, Stack, TextField } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateValidationError, LocalizationProvider, PickerChangeHandlerContext } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import 'dayjs/locale/pl';


const Pesel = () => {
  const [numbers, setNumbers] = useState("12345");
  const [numbersError, setNumbersError] = useState("");
  const [date, setDate] = useState(dayjs('1999-12-31'));

  const onDateChange = (value: Dayjs | null, context: PickerChangeHandlerContext<DateValidationError>) => {
    console.log(value)
  }

  const onNumberChanged = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let result = event.target.value;
    if (result.length != 5) {
      setNumbersError("Ilość cyfr musi być równa 5.")
    }
    else if (!containsDigit(result)) {
      setNumbersError("Jeden ze znaków nie jest liczbą.")
    }
    else {
      setNumbersError("")
    }
    setNumbers(result)
  }
  const containsDigit = (text: string): boolean => {
    for (let index = 0; index < [...text].length; index++) {
      const c = [...text][index];
      if (!is_numeric(c)) {
        return false;
      }
    }
    return true;
  }
  function is_numeric(str: string) {
    return /^\d+$/.test(str);
  }
  return (
    <>
      <Grid2 spacing={1} container sx={{maxWidth:'50vh'}}>
        <Grid2 size={4}>
        <LocalizationProvider adapterLocale="pl" dateAdapter={AdapterDayjs}>
            <DatePicker
              value={date}
              onChange={onDateChange}
              label="Wybierz datę" />
          </LocalizationProvider>
        </Grid2>
        <Grid2 size={8}>
          <TextField
            required
            error={!!numbersError}
            helperText={numbersError}
            id="numbers"
            name="numbers"
            label="Cyfry"
            type="text"
            fullWidth
            value={numbers}
            onChange={onNumberChanged}
          />
        </Grid2>
        <Grid2 size={4}>
          <Button variant="contained" size="large" >Login Out</Button>
        </Grid2>
        <Grid2 size={4}>
          <Button variant="contained" size="large" >Log Out</Button>
        </Grid2>
        <Grid2 size={4}>
          <Button variant="contained" size="large" >Log Out</Button>
        </Grid2>
      </Grid2>
    </>
  );
}

export default Pesel;