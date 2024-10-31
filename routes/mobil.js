import express, { Router } from "express";
const router = express.Router();

const hewan = [
  {
    nama_hewan: "Kucing",
    jenis: "Anggora",
    jenis_kelamin: "hitam",
    tahun: "2015",
  },
  {
    merk: "Ferari",
    model: "sport",
    warna: "Merah",
    tahun: "2015",
  },
];

router.get("/", (req, res) => {
  res.send(hewan);
});

export default router;