const profile = {
    nama: 'sigit',
    umur: 18,
    hobby: ['code', 'makan', 'tidur'],
};

const {nama, umur} = profile;
const [code, makan, tidur] = profile.hobby;

console.log(tidur);
