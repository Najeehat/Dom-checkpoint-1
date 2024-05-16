// Sélection des icônes
const decreaseIcons = document.querySelectorAll('.fa-minus-circle');
const increaseIcons = document.querySelectorAll('.fa-plus-circle');
const quantityInputs = document.querySelectorAll('.quantity');

// Ajout des écouteurs d'événements pour chaque icône
decreaseIcons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        if (parseInt(quantityInputs[index].innerText) > 0) {
            quantityInputs[index].innerText = parseInt(quantityInputs[index].innerText) - 1;
        }
    });
});

increaseIcons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        quantityInputs[index].innerText = parseInt(quantityInputs[index].innerText) + 1;
    });
});

// Sélection de tous les icônes de la corbeille (trash icons)
const trashIcons = document.querySelectorAll('.fa-trash-alt');

// Ajout d'un écouteur d'événements pour chaque icône de la corbeille
trashIcons.forEach(trashIcon => {
    trashIcon.addEventListener('click', () => {
        // Sélection de l'élément parent de l'icône de la corbeille (le div contenant toute la carte)
        const card = trashIcon.closest('.card');
        
        // Suppression de l'élément parent (la carte entière) lors du clic sur l'icône de la corbeille
        card.remove();
    });
});

// Sélection de tous les boutons en forme de cœur
const heartIcons = document.querySelectorAll('.fa-heart');

// Parcourir tous les boutons en forme de cœur
heartIcons.forEach(heartIcon => {
    // Ajout d'un écouteur d'événements pour le clic sur chaque bouton
    heartIcon.addEventListener('click', () => {
        // Changement de la couleur du cœur en fonction de son état actuel
        if (heartIcon.classList.contains('liked')) {
            heartIcon.style.color = 'red'; // Changer en noir si déjà aimé
            heartIcon.classList.remove('liked'); // Retirer la classe "liked"
            // Ajouter ici la logique pour supprimer l'article du panier
        } else {
            heartIcon.style.color = 'black'; // Changer en rouge si non aimé
            heartIcon.classList.add('liked'); // Ajouter la classe "liked"
            // Ajouter ici la logique pour ajouter l'article au panier
        }
    });
});


const quantityInput = document.getElementById('quantity');
        const unitPriceElement = document.getElementById('unit-price');
         increaseIcons = document.getElementById('fa-plus-circle');
         decreaseIcons = document.getElementById('fa-minus-circle');
        const deleteButton = document.getElementById('delete-Button');
        const totalPriceElement = document.getElementById('total-Price');

        const unitPrice = 10;
        let totalPrice = unitPrice;

        function updateTotalPrice() {
            totalPrice = unitPrice * parseInt(quantityInput.value);
            totalPriceElement.textContent = totalPrice;
        }

        increaseIcons.addEventListener('click', () => {
            quantityInput.value = parseInt(quantityInput.value) + 1;
            updateTotalPrice();
        });

        decreaseIcons.addEventListener('click', () => {
            if (parseInt(quantityInput.value) > 0) {
                quantityInput.value = parseInt(quantityInput.value) - 1;
                updateTotalPrice();
            }
        });

        deleteButton.addEventListener('click', () => {
            quantityInput.value = 0;
            updateTotalPrice();
        });

// Ajout d'un événement de clic pour le bouton de suppression
decreaseIcons.addEventListener('click', () => {
    if (parseInt(quantityInputs.value) > 0) {
        quantityInputs.value = parseInt(quantityInputs.value) - 1;
        updateTotalPrice();
    }
});

// Ajout d'un événement de clic pour le bouton de suppression d'article
deleteButton.addEventListener('click', () => {
    quantityInputs.value = 0;
    updateTotalPrice();
});