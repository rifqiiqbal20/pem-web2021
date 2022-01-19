console.log("Rifqi Store menjual produk berbagai macam Gadget dengan harga yang lebih terjangkau dari yang lain. Kepercayaan anda adalah yang paling utama. SELAMAT BERBELANJA!!!"); 

//barang
var barang = document.getElementsByClassName("barang"); console.log(barang);
setInterval(function () { barang[0].style.color = "red"; barang[1].style.color = "green"; barang[2].style.color = "blue"; 
setTimeout(function () { barang[0].style.color = "black"; barang[1].style.color = "black"; barang[2].style.color = "black"; 
}, 500)}, 1000);

const searchBox = document.querySelector(".search-box");

searchBtn.addEventListener("click", () => {
  searchBox.classList.add("active");
  navBtnContainer.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  searchBox.classList.remove("active");
  navBtnContainer.classList.remove("active");
});