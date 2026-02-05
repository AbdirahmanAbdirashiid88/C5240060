/**
 * PROJECT: Dynamic Story Creator
 * AUTHOR: Mohamed Abdirahmaan Mohamed
 * CLASS: CM241
 * DESCRIPTION: Handles story generation and navigation
 */

// Function lagu kala beddelo bogga (Home, Services, About)
function showSection(id) {
    // Hel dhammaan qaybaha (sections)
    const sections = document.querySelectorAll("section");
    
    // Ka saar class-ka 'active' dhammaan qaybaha
    sections.forEach(function(sec) {
        sec.classList.remove("active");
    });

    // U dhig qaybta la gujiyay inay noqoto mid muuqata
    const targetSection = document.getElementById(id);
    if (targetSection) {
        targetSection.classList.add("active");
    }
}

// Qaybta maaraysa foomka sheekada (Story Form Logic)
const storyForm = document.getElementById("storyForm");

if (storyForm) {
    storyForm.addEventListener("submit", function(event) {
        // Jooji inuu boggagu refresh gareeyo
        event.preventDefault();

        // Soo qaado xogta uu user-ku doortay
        const heroName = document.getElementById("hero").value.toLowerCase();
        const sidekickName = document.getElementById("sidekick").value.toLowerCase();
        const storyTitle = document.getElementById("mission").value.toLowerCase();
        const location = document.getElementById("place").value;

        // Meesha sheekada lagu soo bandhigayo
        const outputDisplay = document.getElementById("storyOutput");
        let finalStory = "";

        // Hubi haddii Jamiila iyo Faadumo la doortay (Java Story)
        if (heroName === "jamiila" && sidekickName === "faadumo" && storyTitle === "java") {
            finalStory = `CIWAAN: JAVA\n\n`;
            finalStory += `Jamiila waa macallimad Java ah oo wax ka dhigta ${location}.\n`;
            finalStory += `Faadumo waa ardayad aad u jecel barashada barnaamijyada.\n`;
            finalStory += `Jamiila ayaa ka caawisay mashruuc adag ilaa ay guul weyn ka gaarto.`;
        } 
        // Hubi haddii Mohamed iyo Ali la doortay (Orod Yahan Story)
        else if (heroName === "mohamed" && sidekickName === "ali" && storyTitle === "orod yahan") {
            finalStory = `CIWAAN: OROD YAHAN\n\n`;
            finalStory += `Mohamed iyo Ali waa laba orodyahan oo caan ka ah ${location}.\n`;
            finalStory += `Tartan weyn ayay galeen saaka, ugu dambeyntiina Mohamed ayaa guuleystay.\n`;
            finalStory += `Ali-na wuxuu soo galay kaalinta labaad, isagoo aad u faraxsan.`;
        } 
        // Haddii xogta la geliyay ay khaldan tahay
        else {
            finalStory = "⚠️ Error: Doorashada magacyada iyo story-ga isma laha. Fadlan isku day mar kale.";
        }

        // Ku qor sheekada sanduuqa loogu talagalay
        outputDisplay.textContent = finalStory;
    });
}

/**
 * Function-kan wuxuu u oggolaanayaa user-ka inuu share gareeyo sheekada.
 * Haddii browser-ku taageerayo Web Share API, waa la dirayaa.
 * Haddii kale, Clipboard-ka ayaa lagu koobiyeynayaa.
 */
function shareStory() {
    const storyContent = document.getElementById("storyOutput").textContent;

    // Hubi in sheeko jirto marka hore
    if (!storyContent || storyContent === "Story will appear here...") {
        alert("Fadlan marka hore samee story si aad u wadaagto.");
        return;
    }

    // Isku day in aad isticmaasho Share API
    if (navigator.share) {
        navigator.share({
            title: "Sheekadayda Dynamic Story Creator",
            text: storyContent
        })
        .then(() => console.log("Sheekada waa la wadaagay!"))
        .catch((error) => console.log("Cillad ayaa dhacday:", error));
    } 
    else {
        // Haddii kale koobbi garee sheekada
        const dummyInput = document.createElement("textarea");
        document.body.appendChild(dummyInput);
        dummyInput.value = storyContent;
        dummyInput.select();
        document.execCommand("copy");
        document.body.removeChild(dummyInput);
        
        alert("Story-ga waa la copy gareeyay! Hadda meel kasta ku paste garee.");
    }
}

// Dhammaadka koodhka - Project CM241
console.log("System Ready: Dynamic Story Creator Loaded Successfully.");
// Line 101: Script-ku halkan ayuu ku dhamaanayaa.