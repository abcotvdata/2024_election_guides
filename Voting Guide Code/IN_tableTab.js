
$(document).ready(function() {
    // Function to load CSV data
    function loadCSV(url, tableId, updateImageFunction) {
        $.ajax({
            contentType: 'text/plain; charset=utf-8',
            url: url,
            dataType: "text",
            success: function(data) {
                console.log(data); 
                var race_data = data.split(/\r?\n|\r/);
                var table_data = '<table class="table table-bordered table-striped">';
                for (var count = 0; count < race_data.length; count++) {
                    var cell_data = race_data[count].split(",");
                    if (cell_data.length === 1 && cell_data[0] === '') {
                        continue;
                    }
                    table_data += '<tr>';
                    for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
                        if (count === 0) {
                            table_data += '<th>' + cell_data[cell_count] + '</th>';
                        } else { //This adds a hyperlink column for candidate campaigns
                            if (cell_count === 4) { // Assuming the third column is the URL
                                table_data += '<td class="table-cell"><a href="' + cell_data[cell_count] + '" target="_blank">' + cell_data[cell_count] + '</a></td>';
                            } else {
                                table_data += '<td>' + cell_data[cell_count] + '</td>';
                            }
                        }
                    }
                    table_data += '</tr>';
                }
                table_data += '</table>';
                $(tableId).html(table_data);
                updateImageFunction();
            },
            error: function(xhr, status, error) {
                console.error('Error loading CSV:', error);
            }
        });
    }

    // Load US President Race data
    //$('#nav-us-president-tab').tabs({ active: 1 });
   
    loadCSV('Excel_Files/WLS_Indiana_Races/Presidential_Election_Race.csv', '#nav-us-president-table', updateImagesPresident);

     // Load US House Race data
     $('#nav-IN-house-tab').click(function() {
        loadCSV('Excel_Files/WLS_Indiana_Races/IN_House_Races.csv', '#nav-IN-house-table', updateImagesINHouse);
    });
     // Load IL Senate Race data
     $('#nav-IN-senate-tab').click(function() {
        loadCSV('Excel_Files/WLS_Indiana_Races/IN_Senate_Races.csv', '#nav-IN-senate-table', updateImagesINSenate);
    });
    // Load Cook County Race data
    $('#nav-gov-tab').click(function() {
        loadCSV('Excel_Files/WLS_Indiana_Races/IN_Governor_Races.csv', '#nav-gov-table', updateImageGov);
    });
    // Load DuPage County Race data
   $('#nav-lt-gov-tab').click(function() {
        loadCSV('Excel_Files/WLS_Indiana_Races/IN_LT_Governor_Races.csv', '#nav-lt-gov-table', updateImageLtGovernor);
    });

    // Load Lake County Race data
    $('#nav-atty-tab').click(function() {
        loadCSV('Excel_Files/WLS_Indiana_Races/IN_Attorney_General_Races.csv', '#nav-atty-table', updateImageAttorneyGeneral);
    });
    
// Function to update images for Presidential Race
function updateImagesPresident() {
    $('#nav-us-president-table tr').each(function() {
        if ($(this).index() === 0) return; // Skip header
        updatePresidentImage($(this));
    });
}
// Function to update images for Indiana House
function updateImagesINHouse() {
    $('#nav-IN-house-table tr').each(function() {
        if ($(this).index() === 0) return; // Skip header
        updatePartyImage($(this));
    });
}
// Function to update images for Indiana Senate
function updateImagesINSenate() {
    $('#nav-IN-senate-table tr').each(function() {
        if ($(this).index() === 0) return; // Skip header
        updatePartyImage($(this));
    });
}

// Function to update images for Indiana Governor

function updateImageGov() {
    // Similar implementation as before, but scoped to Indiana Governor
    $('#nav-gov-table tr').each(function() {
        if ($(this).index() === 0) return; // Skip header
        updatePartyImage($(this));
    });
}

// Function to update images for Indiana Lt Governor 
function updateImageLtGovernor() {
    $('#nav-lt-gov-table tr').each(function() {
        if ($(this).index() === 0) return; // Skip header
        updatePartyImage($(this));
    });
}

// Function to update images for Lake County
function updateImageAttorneyGeneral() {
    $('#nav-atty-table tr').each(function() {
        if ($(this).index() === 0) return; // Skip header
        updatePartyImage($(this));
    });
}

function updatePresidentImage(row) {
    var firstCell = row.find('td').first();
    var cellText = firstCell.text().trim();
    var img = $('<img>').attr('width', '100');
    var partyName = '';

    // Set the image source based on the cell text
    if (cellText === 'R') {
        img.attr('src', 'IMAGES/TRUMP-01.png').attr('alt', 'Republican');
        partyName = ' Republican';
    } else if (cellText === 'D') {
        img.attr('src', 'IMAGES/HARRIS-01.png').attr('alt', 'Democrat');
        partyName = ' Democrat';
    } else if (cellText === 'G') {
        img.attr('src', 'IMAGES/STEIN-01.png').attr('alt', 'Green');
        partyName = ' Green';
    } else if (cellText === 'L') {
        img.attr('src', 'IMAGES/OLIVER-01.png').attr('alt', 'Libertarian');
        partyName = ' Libertarian';
    }else {
        img.attr('src', 'IMAGES/DEFAULT-01.png').attr('alt', 'Unknown');
    }

    firstCell.empty().append(img);
}

// General function to update party images
function updatePartyImage(row) {
    var firstCell = row.find('td').first();
    var cellText = firstCell.text().trim();
    var img = $('<img>').attr('width', '50');
    var partyName = '';

    // Set the image source based on the cell text
    if (cellText === 'R') {
        img.attr('src', 'IMAGES/REPUBLICAN-01.png').attr('alt', 'Republican');
        partyName = ' Republican';
    } else if (cellText === 'D') {
        img.attr('src', 'IMAGES/DEMOCRAT-01.png').attr('alt', 'Democrat');
        partyName = ' Democrat';
    }else if (cellText === 'WCP') {
        img.attr('src', 'IMAGES/WCP-01.png').attr('alt', 'Working Class Party');
        partyName = ' Working Class Party';
    } 
    else if (cellText === 'G') {
        img.attr('src', 'IMAGES/GREEN-01.png').attr('alt', 'Green');
        partyName = ' Green';
    } else if (cellText === 'L') {
        img.attr('src', 'IMAGES/LIBERTARIAN-01.png').attr('alt', 'Libertarian');
        partyName = ' Libertarian';
    } else {
        img.attr('src', 'IMAGES/DEFAULT-01.png').attr('alt', 'Independent');
        partyName = ' Independent';
    }

    firstCell.empty().append(img);
}})
