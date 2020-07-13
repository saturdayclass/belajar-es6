//spread operator
const profile = {
    nama: 'Rigen',
    umur: 16,
    isNikah: false
};

const {...nama} = profile;

console.log(...profile);