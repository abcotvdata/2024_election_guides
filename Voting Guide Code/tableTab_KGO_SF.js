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
        loadCSV('Excel_Files/KGO_SF_Races/Presidential_Election_Race.csv', '#nav-us-president-table', updateImagesPresident);

        // Load US Senate Race data
    $('#nav-us-senate-tab').click(function() {
        loadCSV('Excel_Files/KGO_SF_Races/US_Senate_Race.csv', '#nav-us-senate-table', updateImagesUSSenate);
    });
     // Load US House Race data
     $('#nav-us-house-tab').click(function() {
        loadCSV('Excel_Files/KGO_SF_Races/US_House_Races.csv', '#nav-us-house-table', updateImagesUSHouse);
    });
    // Load CA Senate Race data
    $('#nav-ca-senate-tab').click(function() {
      loadCSV('Excel_Files/KGO_SF_Races/CA_Senate_Race.csv', '#nav-ca-senate-table', updateImagesCASenate);
  });
  // Load CA Assembly Race data
  $('#nav-ca-assembly-tab').click(function() {
    loadCSV('Excel_Files/KGO_SF_Races/CA_Assembly_Race.csv', '#nav-ca-assembly-table', updateImagesCAAssembly);
});

  // Load Mayor Race data
  $('#nav-mayor-tab').click(function() {
    loadCSV('Excel_Files/KGO_SF_Races/Mayor_Race.csv', '#nav-mayor-table');
});

  // Load DA Race data
  $('#nav-da-tab').click(function() {
    loadCSV('Excel_Files/KGO_SF_Races/DA_Race.csv', '#nav-da-table');
});

 // Load City Attorney Race data
 $('#nav-city-attorney-tab').click(function() {
  loadCSV('Excel_Files/KGO_SF_Races/City_Attorney_Race.csv', '#nav-city-attorney-table');
});

 // Load Sheriff data
 $('#nav-sheriff-tab').click(function() {
  loadCSV('Excel_Files/KGO_SF_Races/Sheriff_Race.csv', '#nav-sheriff-table');
});

 // Load Supervisors data
 $('#nav-sups-tab').click(function() {
  loadCSV('Excel_Files/KGO_SF_Races/Supervisor_Race.csv', '#nav-sups-table');
});
     

// Function to update images for President
function updateImagesPresident() {
    $('#nav-us-president-table tr').each(function() {
        if ($(this).index() === 0) return; // Skip header
        updatePresidentImage($(this));
    });
}
// Function to update images for US Senate
function updateImagesUSSenate() {
    $('#nav-us-senate-table tr').each(function() {
        if ($(this).index() === 0) return; // Skip header
        updateSenateImage($(this));
    });
}

// Function to update images for US House
function updateImagesUSHouse() {
    $('#nav-us-house-table tr').each(function() {
        if ($(this).index() === 0) return; // Skip header
        updatePartyImage($(this));
    });
}

// Function to update images for CA Senate
function updateImagesCASenate() {
  $('#nav-ca-senate-table tr').each(function() {
      if ($(this).index() === 0) return; // Skip header
      updatePartyImage($(this));
  });
}

// Function to update images for CA Assembly
function updateImagesCAAssembly() {
  $('#nav-ca-assembly-table tr').each(function() {
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
    } else if (cellText === 'K') {
        img.attr('src', 'IMAGES/KENNEDY-01.png').attr('alt', 'Independent');
        partyName = ' Independent';
    } else {
        img.attr('src', 'IMAGES/DEFAULT-01.png').attr('alt', 'Unknown');
    }

    firstCell.empty().append(img);
}

function updateSenateImage(row) {
    var firstCell = row.find('td').first();
    var cellText = firstCell.text().trim();
    var img = $('<img>').attr('width', '100');
    var partyName = '';

    // Set the image source based on the cell text
    if (cellText === 'A') {
        img.attr('src', 'IMAGES/SCHIFF-01.png').attr('alt', 'Democrat');
        partyName = ' Democrat';
    } else if (cellText === 'S') {
        img.attr('src', 'IMAGES/GARVEY-01.png').attr('alt', 'Republican');
        partyName = ' Republican';
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
}
})
