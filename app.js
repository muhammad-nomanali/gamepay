window.addEventListener("load", function () {
    document.getElementById("loader").style.display = "none";
  });


//   
function copyContractAddress() {
    const contractText = document.getElementById("contract-text").textContent;
    navigator.clipboard.writeText(contractText).then(() => {
        alert("Contract address copied!");
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}