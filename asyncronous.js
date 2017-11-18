function hitung(callback) {
	setTimeout(function() {
		callback("Hitungan selesai..")
	}, 1000);
}

console.log("Satu");
hitung(function(cb) {
	console.log(cb)
});
console.log("Dua");
console.log("Tiga");