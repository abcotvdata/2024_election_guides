document.addEventListener('DOMContentLoaded', function () {
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            // Hide all content sections
            document.querySelectorAll('.content').forEach(content => {
                content.style.display = 'none'; // Hide all content
            });
            
            // Show the relevant table
            const targetContent = 'dropdown-' + this.id;
            document.getElementById(targetContent).style.display = 'block'; // Show the selected content
        });
    });
    document.getElementById('dropdown-table1').style.display = 'block'; // Show the first content
});