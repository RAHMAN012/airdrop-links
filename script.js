const fullWalletAddress = "0x3daE23c5B3A5B206316733f0B4b46ddBca6e12f2"; // Full address

function copyToClipboard() {
    navigator.clipboard.writeText(fullWalletAddress).then(() => {
        Toastify({
            text: "Wallet address copied!",
            duration: 3000,
            gravity: "top", // Position at the top
            position: "center", // Center align
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
            close: true,
        }).showToast();
    }).catch(err => {
        console.error("Error copying text: ", err);
    });
}