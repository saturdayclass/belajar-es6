const elemen = document.getElementById('hasil');

// const requestApi = () => {
// 	fetch('https://natours-raihan.herokuapp.com/api/v1/tours')
// 		.then((ress) => {
// 			ress.json();
// 		})
// 		.then((ressJson) => {
// 			console.log(ressJson);
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 		});
// };

const requestApi = async () => {
	try {
		const req = await fetch('https://natours-raihan.herokuapp.com/api/v1/tours');
		const res = await req.json();
		elemen.innerHTML = res.status.data.data[0].startLocation.address;
	} catch (error) {
		console.log(error);
	}
};

requestApi();
