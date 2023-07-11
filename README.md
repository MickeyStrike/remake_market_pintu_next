# Remake Market Pintu
Dibuat menggunakan NextJs 13.4.9
## Langkah Untuk Memulai Mode Developer

Di dalam project directory, kamu dapat menjalankan:

### `npm install`
npm install untuk menginstall package yang digunakan pada apps ini.

### `npm run dev`

npm run dev untuk menjalankan app pada mode development.\
Buka [http://localhost:3000](http://localhost:3000) untuk melihat di browser.

# Online Akses
Selain akses lokal atau mode developer kita juga dapat mengakses website ini secara online berikut merupakan linknya:
[https://remake-market-pintu-next.vercel.app/market](https://remake-market-pintu-next.vercel.app/market)

# Penjelasan Singkat Apps
Di dalam project ini terdapat 2 tampilan yaitu :
## Tampilan Desktop
<br/>
<img width="1440" alt="Screen Shot 2023-07-09 at 23 23 17" src="https://github.com/MickeyStrike/remake_market_pintu/assets/53706066/6ec98805-bac3-445a-aae9-bbfbcf71dcf2">
<br/>

Pada tampilan desktop terdapat beberapa bagian berikut penjelasannya:
### `Section Header`
Section Header memungkinkan pengguna untuk beralih antar halaman pada website ini, ketika halaman tidak ditemukan maka akan otomatis diarahkan ke halaman 404 Not Found.
### `Section Sub Header`
Dalam section sub header terdapat 3 komponen yaitu title, kotak pencarian dan tombol refresh data.

Kotak Pencarian digunakan untuk mencari data pada table. Ketika user mencari data, filter yang digunakan ada pada frontend jadi dapat mengurangi beban pada server.

Terdapat juga sebuah tombol untuk menyegarkan data yang ada, sehingga data yang ditampilkan dapat diperbarui dengan mudah.
### `Section Tag`
Selanjutnya, terdapat section tag yang memungkinkan pengguna untuk menyaring data berdasarkan tag yang tersedia.
### `Section Table`
Di bawahnya terdapat sebuah tabel yang digunakan untuk menampilkan data secara rapi dan terstruktur.
Terdapat juga fungsi pengurutan di dalam tabel, yang memungkinkan pengguna untuk mengurutkan data sesuai dengan preferensi mereka.

## Tampilan Mobile
<br>
<img width="408" alt="Screen Shot 2023-07-09 at 23 35 08" src="https://github.com/MickeyStrike/remake_market_pintu/assets/53706066/98444c5a-40c6-48ea-92aa-d5977f4185ba">



Pada tampilan mobile terdapat beberapa bagian berikut penjelasannya:
### `Section Header`
Section Header pada mobile berbeda dengan desktop dikarenakan semua menu di hide.
### `Section Sub Header`
Dalam section sub header terdapat 2 komponen yaitu title dan kotak pencarian.

Kotak Pencarian digunakan untuk mencari data pada table. Ketika user mencari data, filter yang digunakan ada pada frontend jadi dapat mengurangi beban pada server.
### `Section Tag`
Selanjutnya, terdapat section tag yang memungkinkan pengguna untuk menyaring data berdasarkan tag yang tersedia.

### `Additional Section`
Selanjutnya terdapat tambahan section. pada tambahan section ini terdapat tombol refresh dan filter perubahan persentase harga.

User dapat merubah persentase harga dalam 24 Jam, 1 Minggu, 1 Bulan, dan 1 Tahun.

### `Section Table`
Di bawahnya terdapat sebuah tabel yang digunakan untuk menampilkan data secara rapi dan terstruktur.
Terdapat juga fungsi pengurutan di dalam tabel, yang memungkinkan pengguna untuk mengurutkan data sesuai dengan preferensi mereka.