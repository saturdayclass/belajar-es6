const getCake = callback => {
    let cake = null;
    console.log("Sedang membuat kue...");
    setTimeout(() => {
        cake = "Kue siap!";
        callback(cake);
    }, 5000)
};

getCake((cake) => {
    console.log(cake);
})