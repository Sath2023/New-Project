document.addEventListener('DOMContentLoaded', function () {
    // Add click event listeners to category headings
    const categoryBoxes = document.querySelectorAll('.category-box');
    categoryBoxes.forEach(box => {
        box.addEventListener('click', toggleSubItems);
    });
});

function toggleSubItems(event) {
    // Toggle visibility of sub-items when category heading is clicked
    const subItems = event.currentTarget.nextElementSibling;
    subItems.style.display = subItems.style.display === 'none' ? 'block' : 'none';
}