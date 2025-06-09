
document.getElementById("pigBtn").addEventListener("click", function() {
    for (let i = 0; i < 10; i++) {
        createMoney();
    }
});

function createMoney() {
    const money = document.createElement("div");
    money.classList.add("money");
    money.innerText = "🪙"; // Eller en annan symbol för pengar
    
    // Random spridning för att skapa variation
    const spread = (Math.random() - 0.5) * 200; // Justera 300 för mer spridning
    const heightOffset = (Math.abs(spread) / 90) * 150; // Beräkna höjd baserat på spridning
    money.style.setProperty('--spread', `${spread}px`);
    money.style.setProperty('--heightOffset', `${-heightOffset}px`); // Negativt för att öka höjden
    
    money.style.left = '50%'; // Centrera på knappen
    money.style.bottom = '0px'; // Starta vid botten

    document.getElementById("moneyFountain").appendChild(money);

    // Ta bort pengarna efter animationen
    setTimeout(() => {
        money.remove();
    }, 1000);
}
