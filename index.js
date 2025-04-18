
/* handle toggles function */

const handleSelection = (index) => {
    const cards = document.querySelectorAll('.deal-card');
    
    cards.forEach((card, i) => {
        const isActive = i + 1 === index;
        card.classList.toggle('active', isActive);
        card.querySelector('input[type=radio]').checked = isActive;
    });
};
