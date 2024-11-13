self.onmessage = function(e) {
    const num = e.data.num;
    console.log("in worker")
    let result = 0;
    let message = '';

    for (let i = 1; i <= num; i++) {
        message = `Loaded ${i} / ${num}`;
        self.postMessage({ result, message });
        for (let j = 0; j < i; j++) {
            result++;
        }
    }

    self.postMessage({ result, complete: true });
};