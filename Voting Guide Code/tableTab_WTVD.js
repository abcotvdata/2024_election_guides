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
                            if (cell_count === 4) { // Assuming the fourth column is the URL
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
    
    loadCSV('Excel_Files/WTVD_Races/Presidential_Election_race.csv', '#nav-us-president-table', updateImagesPresident);

    // Load US House Race data
    $('#nav-us-house-tab').click(function() {
        loadCSV('Excel_Files/WTVD_Races/US_House_Races.csv', '#nav-us-house-table', updateImagesUSHouse);
    });
     // Load Governor Race data
     $('#nav-nc-governor-tab').click(function() {
        loadCSV('Excel_Files/WTVD_Races/NC_Governor_Race.csv', '#nav-nc-governor-table', updateImagesNCGovernor);
    });
     // Load Lt Governor Race data
     $('#nav-nc-lt-governor-tab').click(function() {
        loadCSV('Excel_Files/WTVD_Races/NC_Lt_Governor_Race.csv', '#nav-nc-lt-governor-table', updateImagesNCLtGovernor);
    });
    // Load Attorney General Race data
    $('#nav-nc-ag-tab').click(function() {
        loadCSV('Excel_Files/WTVD_Races/NC_Attorney_General_Race.csv', '#nav-nc-ag-table', updateImageNCAG);
    });
    // Load Superintendent of Public Instruction Race data
   $('#nav-nc-super-tab').click(function() {
        loadCSV('Excel_Files/WTVD_Races/NC_Superintendent_Public_Instruction_Race.csv', '#nav-nc-super-table', updateImageSuper);
    });

    // Load State Auditor Race data
    $('#nav-nc-auditor-tab').click(function() {
        loadCSV('Excel_Files/WTVD_Races/NC_Auditor_Race.csv', '#nav-nc-auditor-table', updateImageAuditor);
    });
    // Load Commissioner of Agriculture Race data
    $('#nav-nc-agriculture-tab').click(function() {
        loadCSV('Excel_Files/WTVD_Races/NC_Commissioner_Agriculture_Race.csv', '#nav-nc-agriculture-table', updateImageAgriculture);
    });

     // Load Commissioner of Labor Race data
    $('#nav-nc-labor-tab').click(function() {
        loadCSV('Excel_Files/WTVD_Races/NC_Commissioner_Labor_Race.csv', '#nav-nc-labor-table', updateImageLabor);
        });

    $('#nav-nc-insurance-tab').click(function() {
        loadCSV('Excel_Files/WTVD_Races/NC_Commissioner_Insurance_Race.csv', '#nav-nc-insurance-table', updateImageInsurance);
        });

    $('#nav-nc-sec-state-tab').click(function() {
        loadCSV('Excel_Files/WTVD_Races/NC_Secretary_State_Race.csv', '#nav-nc-sec-state-table', updateImageSecState);
    });

    $('#nav-nc-treasurer-tab').click(function() {
        loadCSV('Excel_Files/WTVD_Races/NC_Treasurer_Race.csv', '#nav-nc-treasurer-table', updateImageTreasurer);
    });

    $('#nav-ral-mayor-tab').click(function() {
        loadCSV('Excel_Files/WTVD_Races/Raleigh_Mayor_Race.csv', '#nav-ral-mayor-table', updateImageMayor);
    });

    $('#nav-ral-council-tab').click(function() {
        loadCSV('Excel_Files/WTVD_Races/Raleigh_City_Council_Races.csv', '#nav-ral-council-table', updateImageCouncil);
    });
    

// Function to update images for President
function updateImagesPresident() {
    $('#nav-us-president-table tr').each(function() {
        if ($(this).index() === 0) return; // Skip header
        updatePresidentImage($(this));
    });
}
// Function to update images for US House
function updateImagesUSHouse() {
    $('#nav-us-house-table tr').each(function() {
        if ($(this).index() === 0) return; // Skip header
        updatePartyImage($(this));
    });
}

// Function to update images for Governor
function updateImagesNCGovernor() {
    $('#nav-nc-governor-table tr').each(function() {
        if ($(this).index() === 0) return; // Skip header
        updatePartyImage($(this));
    });
}
// Function to update images for Lt Governor
function updateImagesNCLtGovernor() {
    $('#nav-nc-lt-governor-table tr').each(function() {
        if ($(this).index() === 0) return; // Skip header
        updatePartyImage($(this));
    });
}

// Function to update images for NC Attorney General

function updateImageNCAG() {
    $('#nav-nc-ag-table tr').each(function() {
        if ($(this).index() === 0) return; // Skip header
        updatePartyImage($(this));
    });
}

// Function to update images for SPI
function updateImageSuper() {
    $('#nav-nc-super-table tr').each(function() {
        if ($(this).index() === 0) return; // Skip header
        updatePartyImage($(this));
    });
}

// Function to update images for Auditor
function updateImageAuditor() {
    $('#nav-nc-auditor-table tr').each(function() {
        if ($(this).index() === 0) return; // Skip header
        updatePartyImage($(this));
    });
}
// Function to update images for Comm. Agriculture
function updateImageAgriculture() {
    $('#nav-nc-agriculture-table tr').each(function() {
        if ($(this).index() === 0) return; // Skip header
        updatePartyImage($(this));
    });
}

// Function to update images for Comm. Labor
function updateImageLabor() {
    $('#nav-nc-labor-table tr').each(function() {
        if ($(this).index() === 0) return; // Skip header
        updatePartyImage($(this));
    });
}

function updateImageInsurance() {
    $('#nav-nc-insurance-table tr').each(function() {
        if ($(this).index() === 0) return; // Skip header
        updatePartyImage($(this));
    });
}

function updateImageSecState() {
    $('#nav-nc-sec-state-table tr').each(function() {
        if ($(this).index() === 0) return; // Skip header
        updatePartyImage($(this));
    });
}

function updateImageTreasurer() {
    $('#nav-nc-treasurer-table tr').each(function() {
        if ($(this).index() === 0) return; // Skip header
        updatePartyImage($(this));
    });
}

function updateImageMayor() {
    $('#nav-ral-mayor-table tr').each(function() {
        if ($(this).index() === 0) return; // Skip header
        updatePartyImage($(this));
    });
}

function updateImageCouncil() {
    $('#nav-ral-council-table tr').each(function() {
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