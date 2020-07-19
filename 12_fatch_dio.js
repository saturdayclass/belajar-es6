const element = document.getElementById("hasil");



const requestApi = async () => {
    try{
        // request ke api dengan method get
    const req = await fetch("https://natours-raihan.herokuapp.com/api/v1/tours")

    // convert hasil request ke API ke json
    const res = await req.json();

    // memasukan hasil convert json ke dalam element html
    element.innerHTML = `<h1>${res.data.data[0].startLocation.address}</h1>`;
}
    catch(error){
    console.log(error)
    } 
    }
   
requestApi();