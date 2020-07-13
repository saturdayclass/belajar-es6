// Desctucting Object
const profile = {
  nama: "Raihan",
  umur: 19,
  hobby: ["code", "ngapusi", "turu"],
};

const { nama, umur } = profile;
const [code, ngapusi, turu] = profile.hobby;

console.log(turu);
