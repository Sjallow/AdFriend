document.getElementById("refresh").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length === 0) {
            console.error("No active tabs found.");
            return;
        }

        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: replaceAds
        }).catch(error => console.error("Error executing script:", error));
    });
});

function replaceAds() {
    console.log("Replacing ads...");
    
    const adElements = document.querySelectorAll("iframe, .ad, .adsbygoogle, [id*=ads]");
    adElements.forEach(el => {
        el.style.display = "none";
    });

    // Insert a custom positive message
    const positiveMessage = document.createElement("div");
    positiveMessage.textContent = "Have you done your burpees today? 💪";
    positiveMessage.style.position = "fixed";
    positiveMessage.style.bottom = "20px";
    positiveMessage.style.right = "20px";
    positiveMessage.style.padding = "10px";
    positiveMessage.style.backgroundColor = "yellow";
    positiveMessage.style.color = "black";
    positiveMessage.style.fontSize = "16px";
    positiveMessage.style.borderRadius = "5px";
    document.body.appendChild(positiveMessage);
}
