# Submission Dicoding
Preview Project Demo: https://notebooks-apps-v3.netlify.app 


Kriteria
Kembangkan aplikasi catatan pribadi dengan kriteria berikut ini.


Kriteria Utama 1: Memanfaatkan RESTful API sebagai sumber data
Aplikasi harus memanfaatkan RESTful API sebagai sumber data dengan detail berikut.

RESTful API yang digunakan adalah https://notes-api.dicoding.dev/v1. Dokumentasi API bisa Anda akses pada tautan tersebut.
Harus menggunakan RESTful API sebagai sumber data dalam berbagai fitur di aplikasi catatan, seperti:
registrasi dan autentikasi,
daftar catatan,
daftar catatan terarsip (opsional),
detil catatan,
arsip/batal arsip catatan (opsional), dan
hapus catatan.
Karena kelas ini fokus membahas React, bukan penggunaan Fetch API, kami telah menyediakan fungsi dalam bertransaksi dengan API. Anda bisa melihatnya pada bilah Referensi.


Kriteria Utama 2: Registrasi dan Autentikasi Pengguna
Aplikasi memiliki fitur registrasi dan autentikasi (login) pengguna dengan detail berikut.

Membuat halaman baru untuk registrasi pengguna dengan input:
nama,
email,
password, dan
confirm password (opsional)
Membuat halaman baru untuk autentikasi (login) pengguna dengan input email dan password.
Menyimpan access token dari proses autentikasi di local storage (Anda bisa gunakan fungsi yang telah kami sediakan).
Simpan data pengguna yang terautentikasi pada komponen state untuk mengetahui pengguna telah terautentikasi atau belum.
Menyediakan tombol logout (keluar aplikasi) untuk menghapus autentikasi pengguna yang tersimpan.


Kriteria Utama 3: Memproteksi Fitur Catatan
Fitur catatan hanya dapat diakses oleh pengguna yang telah terautentikasi. Berikut detailnya.

Fitur catatan seperti daftar catatan, detail catatan, dan hapus catatan hanya dapat diakses bila pengguna telah melakukan autentikasi. Bila belum, pengguna hanya dapat mengakses halaman login atau registrasi saja.
Menampilkan resource catatan yang hanya dimiliki oleh pengguna yang terautentikasi.


Kriteria Utama 4: Ubah Tema
Aplikasi harus memiliki fitur ubah tema. Berikut detailnya:

Menyediakan tombol untuk mengubah tema gelap/terang.
Memanfaatkan React Context dalam membangun fitur ubah tema.
Menyimpan perubahan tema ke local storage agar perubahannya persisten.


Kriteria Utama 5: Menggunakan Hooks
Aplikasi menerapkan Hooks setidaknya untuk fitur/kode baru. Berikut detailnya:

Menerapkan Hooks dalam pengelolaan state setidaknya untuk fitur/kode pada halaman registrasi dan autentikasi pengguna.


Kriteria Utama 6: Memenuhi seluruh kriteria utama submission sebelumnya
Aplikasi harus dapat mempertahankan kriteria utama dari submission sebelumnya. Berikut detailnya.

Minimal terdapat 2 halaman yang berbeda.
Daftar catatan.
Detail catatan.
Menambahkan catatan baru.
Menghapus catatan.
Memvalidasi properti.


Selain kriteria utama, terdapat kriteria opsional yang yang dapat Anda penuhi agar mendapat nilai yang lebih tinggi.


Kriteria Opsional 1: Menampilkan indikasi loading
Berikut detailnya:

Aplikasi harus menampilkan indikasi loading ketika memuat data dari RESTful API sedang berlangsung.
Indikasi loading bisa apa pun, yang penting tidak mengganggu pengalaman pengguna. Gunakanlah kreativitas Anda.

Kriteria Opsional 2: Fitur ubah bahasa
Aplikasi harus memiliki fitur ubah bahasa. Berikut detailnya:

Menyediakan tombol untuk mengubah bahasa Indonesia ke Inggris, atau sebaliknya.
Memanfaatkan React Context dalam membangun fitur ubah bahasa.
Menyimpan perubahan tema ke local storage agar perubahannya persisten.

# Semua kriteria utama dan optional terpenuhi dan mendapatkan bintang 5 pada penilaian dicoding


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
