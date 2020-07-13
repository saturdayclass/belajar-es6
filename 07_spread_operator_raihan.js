// Spread Operator
const profile = {
  nama: "Raihan",
  umur: 19,
  isNikah: false,
};

const { ...nama } = profile;

console.log(nama);
