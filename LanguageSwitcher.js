
function switchLanguage(lang) {
    localStorage.setItem("language", lang); // Save the selected language in localStorage

    if (lang === "es") {
        window.location.href = "index.html"; // Redirect to the Spanish version
    } else if (lang === "en") {
        window.location.href = "index-en.html"; // Redirect to the English version
    }
}
  
// Automatically redirect to the preferred language on page load
document.addEventListener("DOMContentLoaded", () => {
const savedLanguage = localStorage.getItem("language");

// Only redirect if a preference is saved and it doesn't match the current language
if (savedLanguage && savedLanguage !== currentLanguage()) {
    switchLanguage(savedLanguage);
}
});
  
// Helper function to get the current language from the document's lang attribute
function currentLanguage() {
return document.documentElement.lang || "en";
}
  