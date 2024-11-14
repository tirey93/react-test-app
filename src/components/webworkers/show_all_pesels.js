importScripts('./pesel_calculations.js');

self.onmessage = function(e) {
    const num = e.data.pesel;
    
    const day = e.data.day;
    const month = e.data.month;
    const year = e.data.year;
    let isData = false;
    console.log(day, month, year);
    
    for (let i = 0; i < 99999; i++) {
        let digits = i.toString().padStart(5, '0');
        let pesel = combinePesel(day, month, year, digits);
        if(isValidPesel(pesel)){
            self.postMessage({ result: {
                pesel: pesel,
                sex: getSex(pesel),
                day: day,
                month: month,
                year: year,
                digits: digits
            } });
            isData = true;
        }
    }
    
    if(!isData){
        self.postMessage({ error: true });
    }
};