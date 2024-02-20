document.getElementById('logo').addEventListener('click', function() {
    const menu = document.getElementById('mobile-nav');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});

document.getElementById('close-menu').addEventListener('click', function() {
    document.getElementById('mobile-nav').classList.add('hidden');
});
/**************************/
document.addEventListener("DOMContentLoaded", function() {
    adjustLayoutForMobile();

    // Also adjust layout on window resize
    window.addEventListener('resize', adjustLayoutForMobile);
});

function adjustLayoutForMobile() {
    const downloadButtons = document.querySelector('.download-buttons');
    const imageContent = document.querySelector('.image-content');
    const contentContainer = document.querySelector('.content');

    if (window.innerWidth < 1024) {
        downloadButtons.style.display = 'flex';
        contentContainer.insertBefore(downloadButtons, imageContent.nextSibling);
    } else {
        downloadButtons.style.display = 'flex';

        const textContent = document.querySelector('.text-content');
        contentContainer.insertBefore(downloadButtons, textContent.nextSibling); // Move download-buttons after text-content
    }
}
/*Carousel*/
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1;
    }
    updateCarousel();
});

function updateCarousel() {
    const newTranslateValue = -110 * currentIndex + '%';
    document.querySelector('.carousel-inner').style.transform = `translateX(${newTranslateValue})`;
}



