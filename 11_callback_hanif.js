// const posts = [
// 	{
// 		title: 'Post Satu',
// 		body: 'Ini adalah post pertama saya'
// 	},
// 	{
// 		title: 'Post Dua',
// 		body: 'Ini adalah post kedua saya'
// 	}
// ];

const getCake = (callback) => {
	let cake = null;
	console.log('sedang membuat kue...');
	setTimeout(() => {
		cake = 'Kue siap!';
		callback(cake);
	}, 3000);
};

getCake((cake) => {
	console.log(cake);
});
