const element = document.getElementById("hasil");

const reqApi = async() => {
    try {
        // request ke API
        const req = await fetch("https://natours-raihan.herokuapp.com/api/v1/tours")

        // convert hasil request ke JSON
        const res = await req.json();

        // menampilkan hasil convert request ke HTML
        element.innerHTML = `<h1>${res.data.data[1].startLocation.address}</h1>`;
    } catch(error) {
        element.innerHTML = '<h1>error</h1>';
    }
}

reqApi();
