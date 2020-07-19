
const boom = callback => {
    console.log('wait for boom');
    setTimeout(() => {
        suara = 'DUARR';
        callback(suara);
    },3000)
};

boom((suara) => {
    console.log(suara);
})