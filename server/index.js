const express = require("express")
const cors = require("cors")
const { encryptTwofish, decryptTwofish } = require("./utils/twofishAlgo")

const app = express()

app.use(cors())
app.use(express.json())


app.post("/encrypt", (req, res) => {
    const kunci = req.body.kunci
    const text = req.body.text

    const hasil = encryptTwofish(text, kunci)
    res.send(hasil)
})

app.post("/decrypt", (req, res) => {
    const kunci = req.body.kunci
    const text = req.body.cipherText

    res.set('Content-Type', 'text/plain')
    const hasil = decryptTwofish(text, kunci)
    const validText = hasil.replace(/[^\x20-\x7E]/g, '');
    res.send(validText)
})

app.listen(1000, () => console.log("server berjalan di port 1000"))