const webView = document.getElementById("webView");
const urlInput = document.getElementById("urlInput");

document.getElementById("goButton").addEventListener("click", () => {
    let url = urlInput.value;

    // Vérifier si l'URL est entrée sans le protocole
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "http://" + url; // Ajouter "http://" par défaut
    }
    
    webView.src = url; // Charger l'URL dans l'iframe
});

document.getElementById("reloadButton").addEventListener("click", () => {
    webView.src = webView.src; // Recharger la page
});

document.getElementById("backButton").addEventListener("click", () => {
    webView.contentWindow.history.back(); // Revenir à la page précédente
});

document.getElementById("forwardButton").addEventListener("click", () => {
    webView.contentWindow.history.forward(); // Aller à la page suivante
});

// Navigation par "Entrée"
urlInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        document.getElementById("goButton").click(); // Cliquer sur le bouton "Aller"
    }
});
