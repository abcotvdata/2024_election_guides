$(document).ready(function () {
    // Show suggestions as user types
    $('#addressInput').on('input', function () {
        const input = $(this).val().toLowerCase();
        $('#suggestions').empty();

        if (input.length > 2) {
            $.ajax({
                url: 'http://localhost:8000/suggest',  // Ensure this URL is correct
                method: 'GET',
                data: { q: input },
                success: function (data) {
                    data.forEach(address => {
                        $('#suggestions').append(`<a href="#" class="list-group-item list-group-item-action">${address}</a>`);
                    });
                }
            });
        }
    });

    // Handle selection of a suggestion
    $('#suggestions').on('click', 'a', function () {
        const selectedAddress = $(this).text();
        $('#addressInput').val(selectedAddress);
        $('#suggestions').empty();

        $.ajax({
            url: 'http://localhost:8000/details',  // Ensure this URL is correct
            method: 'GET',
            data: { address: selectedAddress },
            success: function (data) {
                displayResults(data);
            }
        });
    });

    // Display results in a table
    function displayResults(result) {
        if (!result) return;

        const keyMappings = {
            address_full: "Full Address",
            precinct: "Precinct",
            ward: "Ward",
            congress_district: "U.S. House District",
            senate_district: "IL State Senate District",
            house_district: "IL Gen. Assembly District",
            dem_candidate_president: "President (D)",
            rep_candidate_president: "President (R)",
            green_candidate_president: "President (G)",
            lib_candidate_president: "President (L)",
            dem_candidate_us_house: "U.S. House Rep (D)",
            rep_candidate_us_house: "U.S. House Rep (R)",
            dem_candidate_state_senate: "IL State Senate (D)",
            rep_candidate_state_senate: "IL State Senate (R)",
            dem_candidate_state_house: "IL Gen. Assembly (D)",
            rep_candidate_state_house: "IL Gen. Assembly (R)",
            dem_candidate_cook_state_attorney: "Cook County State's Attorney (D)",
            rep_candidate_cook_state_attorney: "Cook County State's Attorney (R)",
            lib_candidate_cook_state_attorney: "Cook County State's Attorney (L)",
            dem_candidate_cook_circuit_court_clerk	: "Cook County Circuit Court Clerk (D)",
            rep_candidate_cook_circuit_court_clerk	: "Cook County Circuit Court Clerk (R)",
            lib_candidate_cook_circuit_court_clerk	: "Cook County Circuit Court Clerk (L)",
            dem_candidate_1_mwrdc_6yr: "Metropolitan Water Reclamation District, 6 year (Choose 3) (D)",
            dem_candidate_2_mwrdc_6yr: "Metropolitan Water Reclamation District, 6 year (Choose 3) (D)",
            dem_candidate_3_mwrdc_6yr: "Metropolitan Water Reclamation District, 6 year (Choose 3) (D)",
            rep_candidate_1_mwrdc_6yr: "Metropolitan Water Reclamation District, 6 year (Choose 3) (R)",
            rep_candidate_2_mwrdc_6yr: "Metropolitan Water Reclamation District, 6 year (Choose 3) (R)",
            rep_candidate_3_mwrdc_6yr: "Metropolitan Water Reclamation District, 6 year (Choose 3) (R)",
            green_candidate_mwrdc_6yr: "Metropolitan Water Reclamation District, 6 year (Choose 3) (G)",
            rep_candidate_mwrdc_2yr: "Metropolitan Water Reclamation District, 2 year (Choose 1) (R)",
            dem_candidate_mwrdc_2yr: "Metropolitan Water Reclamation District, 2 year (Choose 1) (D)",
            dem_candidate_burke_vacancy_il_supreme_court: "IL Supreme Court (Burke Vacancy) (D)",
            dem_candidate_connors_vacancy_il_appellate: "IL Appellate Court (Connors Vacancy) (D)",
            dem_candidate_cunningham_vacancy_il_appellate: "IL Appellate Court (Cunningham Vacancy) (D)",
            dem_candidate_delort_vacancy_il_appellate: "IL Appellate Court (Delort Vacancy) (D)",
            dem_candidate_oneilburke_vacancy_il_appellate: "IL Appellate Court (O'Neil Burke Vacancy) (D)"
        };
        

        let tableHtml = '<table class="table table-striped"><thead><tr><th>Field</th><th>Value</th></tr></thead><tbody>';

        for (let key in result) {
            if (result.hasOwnProperty(key)) {
                // Use the mapping for the key or fallback to the original key if no mapping exists
                let rowName = keyMappings[key] || key; // This line fetches the user-friendly name
    
                // Debug: log the key and the row name
                console.log(`Key: ${key}, Row Name: ${rowName}`);
                
                // Generate table row using the user-friendly row name
                tableHtml += `<tr><td>${rowName}</td><td>${result[key]}</td></tr>`;
            }
        }
    
        tableHtml += '</tbody></table>';
    
        // Set the inner HTML of the resultsTable element
        $('#resultsTable').html(tableHtml);
    }
});
