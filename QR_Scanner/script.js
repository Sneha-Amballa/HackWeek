function onScanSuccess(decodedText, decodedResult) {
  document.getElementById("result").textContent = decodedText;
  html5QrcodeScanner.clear();
}

const html5QrcodeScanner = new Html5QrcodeScanner(
  "reader", { fps: 10, qrbox: 250 }
);
html5QrcodeScanner.render(onScanSuccess);

document.getElementById('file-input').addEventListener('change', async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const qrCode = new Html5Qrcode("reader");
  try {
    const result = await qrCode.scanFile(file, true);
    document.getElementById("result").textContent = result;
  } catch (err) {
    document.getElementById("result").textContent = "QR Code not found!";
  }
});
