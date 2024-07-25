let nextDom = document.getElementById('next'); // Fixed the ID from 'nest' to 'next'
let prevDom = document.getElementById('prev');
let carouselDon = document.querySelector('.carousel');
let listItemDon = document.querySelector('.carousel .list'); // Added a dot to correctly select the class

nextDom.onclick = function() {
    showSlider('next');
}

prevDom.onclick = function() {
    showSlider('prev'); // Added functionality for the 'prev' button
}

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carousel .list .item'); // Added 'document.' to call querySelectorAll correctly
    
    if (itemSlider.length === 0) return; // Add check to prevent errors if there are no items

    if (type === 'next') {
        // Move the first item to the end
        listItemDon.appendChild(itemSlider[0]); // Correctly accessing the first item
    } else if (type === 'prev') {
        // Move the last item to the start
        listItemDon.insertBefore(itemSlider[itemSlider.length - 1], itemSlider[0]); // Correctly inserting the last item before the first item
    }
}
