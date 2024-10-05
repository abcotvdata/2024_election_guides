
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
    $('#nav-us-president-tab').click(function() {
        loadCSV('Excel_Files/WLS_Chicago_Races/Presidential_Election_Race.csv', '#nav-us-president-table', updateImagesPresident);
    });
    // Load US House Race data
    $('#nav-us-house-tab').click(function() {
        loadCSV('Excel_Files/WLS_Chicago_Races/US_House_Races.csv', '#nav-us-house-table', updateImagesUSHouse);
    });
     // Load US House Race data
     $('#nav-IL-house-tab').click(function() {
        loadCSV('Excel_Files/WLS_Chicago_Races/IL_House_Races.csv', '#nav-IL-house-table', updateImagesILHouse);
    });
     // Load IL Senate Race data
     $('#nav-us-senate-tab').click(function() {
        loadCSV('Excel_Files/WLS_Chicago_Races/IL_Senate_Races.csv', '#nav-us-senate-table', updateImagesILSenate);
    });
    // Load Cook County Race data
    $('#nav-cook-tab').click(function() {
        loadCSV('Excel_Files/WLS_Chicago_Races/Cook_County_Races.csv', '#nav-cook-table', updateImageCook);
    });
    // Load DuPage County Race data
   $('#nav-dupage-tab').click(function() {
        loadCSV('Excel_Files/WLS_Chicago_Races/DuPage_County_Races.csv', '#nav-dupage-table', updateImageDuPage);
    });

    // Load Lake County Race data
    $('#nav-lake-tab').click(function() {
        loadCSV('Excel_Files/WLS_Chicago_Races/Lake_County_Races.csv', '#nav-lake-table', updateImageLake);
    });
    // Load Kane County Race data
    $('#nav-kane-tab').click(function() {
        loadCSV('Excel_Files/WLS_Chicago_Races/Kane_County_Races.csv', '#nav-kane-table', updateImageKane);
    });

     // Load Kendall County Race data
    $('#nav-kendall-tab').click(function() {
        loadCSV('Excel_Files/WLS_Chicago_Races/Kendall_County_Races.csv', '#nav-kendall-table', updateImageKendall);
        });
    $('#nav-will-tab').click(function() {
        loadCSV('Excel_Files/WLS_Chicago_Races/Will_County_Races.csv', '#nav-will-table', updateImageWill);
    });

    $('#nav-judiciary-tab').click(function() {
        loadCSV('Excel_Files/WLS_Chicago_Races/Judiciary_Races.csv', '#nav-judiciary-table', updateImageJudiciary);
    });
    
            // Function to update images for Kane County
function updateImageKendall() {
    $('#nav-kendall-table tr').each(function() {
        if ($(this).index() === 0) return; // Skip header
        updatePartyImage($(this));
    });
}

// Function to update images for Lake County
function updateImagesPresident() {
    $('#nav-us-president-table tr').each(function() {
        if ($(this).index() === 0) return; // Skip header
        updatePresidentImage($(this));
    });
}
// Function to update images for Lake County
function updateImagesUSHouse() {
    $('#nav-us-house-table tr').each(function() {
        if ($(this).index() === 0) return; // Skip header
        updatePartyImage($(this));
    });
}

// Function to update images for IL House
function updateImagesILHouse() {
    $('#nav-IL-house-table tr').each(function() {
        if ($(this).index() === 0) return; // Skip header
        updatePartyImage($(this));
    });
}
// Function to update images for Lake County
function updateImagesILSenate() {
    $('#nav-us-senate-table tr').each(function() {
        if ($(this).index() === 0) return; // Skip header
        updatePartyImage($(this));
    });
}

// Function to update images for Cook County

function updateImageCook() {
    // Similar implementation as before, but scoped to Cook County
    $('#nav-cook-table tr').each(function() {
        if ($(this).index() === 0) return; // Skip header
        updatePartyImage($(this));
    });
}

// Function to update images for DuPage County
function updateImageDuPage() {
    $('#nav-dupage-table tr').each(function() {
        if ($(this).index() === 0) return; // Skip header
        updatePartyImage($(this));
    });
}

// Function to update images for Lake County
function updateImageLake() {
    $('#nav-lake-table tr').each(function() {
        if ($(this).index() === 0) return; // Skip header
        updatePartyImage($(this));
    });
}
// Function to update images for Kane County
function updateImageKane() {
    $('#nav-kane-table tr').each(function() {
        if ($(this).index() === 0) return; // Skip header
        updatePartyImage($(this));
    });
}

// Function to update images for Will County
function updateImageWill() {
    $('#nav-will-table tr').each(function() {
        if ($(this).index() === 0) return; // Skip header
        updatePartyImage($(this));
    });
}

function updateImageJudiciary() {
    $('#nav-judiciary-table tr').each(function() {
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
