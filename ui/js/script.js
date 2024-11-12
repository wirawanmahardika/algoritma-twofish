const kunci = document.getElementById("kunci")
const plainText = document.getElementById("plainText")
const cipherText = document.getElementById("cipherText")

const encryptBtn = document.getElementById("encrypt")
const decryptBtn = document.getElementById("decrypt")

const hasilEncrypt = document.getElementById("hasilEnc")
const hasilDecrypt = document.getElementById("hasilDec")

encryptBtn.addEventListener("click", async () => {
    const body = {
        kunci: kunci.value,
        text: plainText.value
    }

    const res = await fetch("http://localhost:1000/encrypt", {
        body: JSON.stringify(body),
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
    })

    const hasil = await res.text()
    hasilEncrypt.textContent = hasil
})


decryptBtn.addEventListener("click", async () => {
    const body = {
        kunci: kunci.value,
        cipherText: cipherText.value
    }

    const res = await fetch("http://localhost:1000/decrypt", {
        body: JSON.stringify(body),
        method: "POST",
        headers: {
            'Content-Type': 'application/json' // Memberitahu server bahwa data dalam format JSON
        },
    })

    const hasil = await res.text()
    hasilDecrypt.textContent = hasil
})