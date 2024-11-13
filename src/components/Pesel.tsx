import { Button, Grid2, Stack, TextField, Typography } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateValidationError, LocalizationProvider, PickerChangeHandlerContext } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import 'dayjs/locale/pl';
import PeselCard from "./PeselCard";


const Pesel = () => {
  const [numbers, setNumbers] = useState("");
  const [numbersError, setNumbersError] = useState("");
  const [date, setDate] = useState<dayjs.Dayjs | null>(null);

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
      <Grid2 spacing={1} container sx={{ maxWidth: '80vh' }} alignItems={"center"}>
        <Grid2 size={4}>
          <LocalizationProvider adapterLocale="pl" dateAdapter={AdapterDayjs}>
            <DatePicker
              value={date}
              onChange={onDateChange}
              label="Wybierz datę" />
          </LocalizationProvider>
        </Grid2>
        <Grid2 size={6}>
          <TextField
            required
            error={!!numbersError}
            helperText={numbersError}
            id="numbers"
            name="numbers"
            label="Wpisz cyfry"
            type="text"
            placeholder="12345"
            fullWidth
            value={numbers}
            onChange={onNumberChanged}
          />
        </Grid2>
        <Grid2 size={2}>
          <Button variant="contained" size="large" >Go</Button>
        </Grid2>
        <Grid2 size={12}>
          <Typography>No Result</Typography>
        </Grid2>
        <Grid2 size={6}>
          <Stack spacing={1}>
            <PeselCard day={26} month={11} year={1998} digits="12346"></PeselCard>
            <PeselCard day={26} month={11} year={1998} digits="12346"></PeselCard>
          </Stack>
        </Grid2>
      </Grid2>
    </>
  );
}

export default Pesel;