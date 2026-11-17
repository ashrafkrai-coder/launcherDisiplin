// ============================================================
//  SENARAI APLIKASI — edit fail ini sahaja untuk tambah/ubah app
// ============================================================
//  id       : nama unik (huruf kecil, tiada jarak)
//  name     : nama dipaparkan
//  desc     : penerangan ringkas
//  url      : pautan app
//  glyph    : ikon garisan — pilih satu: book, phone, shield, clock, scale, app
//             ATAU letak "icon": "icons/nama.png" untuk gambar sendiri
//  colors   : 2 warna gradient ikon bulat, cth ["#00c6ff", "#0072ff"]
//  category : kategori (tab dijana automatik)
//  fav      : true = masuk Dock secara lalai
//  isNew    : true = papar badge "Baru"
// ============================================================

const PORTAL = {
  title: "Portal Aplikasi",
  subtitle: "Unit HEM & Disiplin",
};

const APPS = [
  {
    id: "mytugas",
    name: "myTugas",
    desc: "Pengurusan tugasan",
    url: "https://mytugas-sigma.vercel.app/index.html",
    glyph: "book",
    colors: ["#7c4dff", "#448aff"],
    category: "Akademik",
    fav: true,
  },
  {
    id: "rampas-hp",
    name: "Rampas HP",
    desc: "Rekod rampasan telefon",
    url: "https://rekod-rampasan-telefon.vercel.app/",
    glyph: "phone",
    colors: ["#ff4d6d", "#ff8a3d"],
    category: "Disiplin",
    fav: true,
  },
  {
    id: "aduan",
    name: "Aduan",
    desc: "Aduan disiplin & buli",
    url: "https://aduan-disiplin-buli.vercel.app/",
    glyph: "shield",
    colors: ["#00c6ff", "#0072ff"],
    category: "Disiplin",
  },
  {
    id: "lewat-hadir",
    name: "Lewat Hadir",
    desc: "Rekod murid lewat hadir",
    url: "https://lewathadir.vercel.app/",
    glyph: "clock",
    colors: ["#ffb300", "#ff6f00"],
    category: "Kehadiran",
    fav: true,
  },
  {
    id: "mydisiplin",
    name: "myDisiplin",
    desc: "Sistem rekod disiplin",
    url: "https://my-disiplin.vercel.app/index.html",
    glyph: "scale",
    colors: ["#00e676", "#00b0a0"],
    category: "Disiplin",
    fav: true,
    isNew: true,
  },
];
