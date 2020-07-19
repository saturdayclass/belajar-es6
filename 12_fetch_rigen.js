const element = document.getElementById('hasil');

const requestApi = async () => {
    try {
        //  result ke api dengan GET
        const req = await fetch('https://natours-raihan.herokuapp.com/api/v1/tours')

        //  convert hasil request ke API ke jsn
        const res = await req.json();

        //  menambahkan hasil convert json ke dalam elemen html
        element.innerHTML = `<h1>${res.data.data[0].startLocation.address}</h1>`;
    } catch(error) {
        console.log(error);
    }
};

requestApi();