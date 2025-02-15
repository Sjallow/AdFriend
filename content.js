document.querySelectorAll("iframe, .ad-container, .advertisement, [id^='ad'], [class*='ad-']").forEach(ad => {
    let newWidget = document.createElement("div");
    newWidget.innerText = "💪 Allahou Akbar, God is great. The most Grecious The most Merciful?";
    newWidget.style.cssText = "background:#f9f9f9; padding:15px; border-radius:10px; text-align:center; font-size:18px; color:#333; font-weight:bold; box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);";
    ad.replaceWith(newWidget);
});
