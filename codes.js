//TableSort

document.getElementById("sortButton").addEventListener("click", () => {
    const dropdown = document.getElementById("dropdown");
    if (dropdown.classList.contains("hidden")) {
        dropdown.classList.remove("hidden");
    } else {
        dropdown.classList.add("hidden");
    }
});

function sortTable(type) {
    const table = document.getElementById("fishTable");
    const rows = Array.from(table.tBodies[0].rows);

    if (type === "fish") {
        rows.sort((a, b) => {
            const aText = a.cells[0].innerText.trim().toLowerCase();
            const bText = b.cells[0].innerText.trim().toLowerCase();
            return aText.localeCompare(bText);
        });
    } else if (type === "alphabet") {
        rows.sort((a, b) => {
            const aText = a.cells[1].innerText.trim().toLowerCase();
            const bText = b.cells[1].innerText.trim().toLowerCase();
            return aText.localeCompare(bText);
        });
    }

    rows.forEach(row => table.tBodies[0].appendChild(row));

    // Dropdown schließen, wenn die Sortierung abgeschlossen ist
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.add("hidden");
}



//Cookies
document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('cookie-popup');
    const overlay = document.createElement('div');
    overlay.id = 'popup-overlay';
    document.body.appendChild(overlay);

    const acceptBtn = document.getElementById('accept-cookies');
    const declineBtn = document.getElementById('decline-cookies');

    const cookiesAccepted = localStorage.getItem('cookiesAccepted');

    // Pop-up und Overlay nur anzeigen, wenn keine Entscheidung getroffen wurde
    if (cookiesAccepted === null) {
        popup.style.display = 'block';
        overlay.style.display = 'block';
        document.body.classList.add('no-scroll');
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        alert('Danke für dein Vertrauen! Viel Spaß auf der Website! 🍪');
        popup.style.display = 'none';
        overlay.style.display = 'none';
        document.body.classList.remove('no-scroll');
    });

    declineBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'false');
        alert('Oh nein, ohne Cookies wird es hier schwierig... 😜');
        window.location.href = 'https://img.chefkoch-cdn.de/rezepte/2257651361176625/bilder/1501872/crop-642x428/subway-cookies.jpg';
    });
});
