SMARTPOS PRO - PAKET PWA
========================
Isi paket:
  index.html            aplikasi kasir
  manifest.webmanifest  data aplikasi (nama, ikon, warna)
  sw.js                 service worker (agar bisa jalan offline)
  icons/                ikon aplikasi

CARA PASANG (pilih salah satu, semuanya gratis)
1. Netlify Drop: buka app.netlify.com/drop, seret seluruh isi folder ini.
2. Cloudflare Pages: Create project > Direct Upload > unggah folder ini.
3. GitHub Pages: unggah semua file ke repository, aktifkan Pages.
Wajib HTTPS (ketiganya sudah otomatis HTTPS). Jangan buka index.html langsung
dari folder (file://) karena PWA dan fitur printer tidak aktif di mode itu.

CARA INSTAL DI KASIR
Buka alamat situs di Chrome/Edge, klik ikon "Instal" di kolom alamat
(atau menu > Instal SmartPOS Pro). Setelah itu bisa dibuka dari desktop/HP
dan tetap jalan tanpa internet. Buka online sekali dulu agar file
tersimpan.

PRINTER
Karena situs dibuka langsung (bukan di dalam frame), Chrome/Edge bisa
meminta izin USB / Serial / Bluetooth ke printer thermal. Pilih printer
sekali saat klik Cetak.

UPDATE VERSI
Setiap mengganti index.html, ubah VERSION di sw.js (mis. smartpos-v2)
lalu unggah ulang, supaya perangkat kasir memakai versi terbaru.

PENTING: DATA
Data tersimpan di browser perangkat kasir masing-masing (tidak
tersinkron antar perangkat). Biasakan unduh cadangan (Pengaturan >
Cadangkan) secara rutin.
