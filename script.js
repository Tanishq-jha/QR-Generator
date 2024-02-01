const container = document.querySelector(".container");
qrInput = container.querySelector(".form input");
generateBtn = container.querySelector(".form button");
qrImg = container.querySelector(".qr-code img");

let preValue;

generateBtn.addEventListener("click", () => {
    let qrVal = qrInput.value.trim();
    if (!qrVal || preValue === qrVal) return;
    preValue = qrVal;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrVal}`;

    qrImg.addEventListener("load", () => {
        container.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value.trim()) {
        container.classList.remove("active");
        preValue = "";
    }
});
