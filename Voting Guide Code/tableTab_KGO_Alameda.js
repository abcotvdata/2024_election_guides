

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

    // Load US House Race data
    $('#nav-us-house-tab').click(function() {
        loadCSV('Excel_Files/KGO_Alameda_Races/US_House_Races.csv', '#nav-us-house-table', updateImagesUSHouse);
    });
          // Load US Senate Race data
    $('#nav-us-senate-tab').click(function() {
        loadCSV('Excel_Files/KGO_SF_Races/US_Senate_Race.csv', '#nav-us-senate-table', updateImagesUSSenate);
    });

    // Load CA Senate Race data
    $('#nav-ca-senate-tab').click(function() {
      loadCSV('Excel_Files/KGO_CC_Races/CA_Senate_Race.csv', '#nav-ca-senate-table', updateImagesCASenate);
  });
   // Load CA Assembly Race data
   $('#nav-ca-assembly-tab').click(function() {
    loadCSV('Excel_Files/KGO_CC_Races/CA_Assembly_Race.csv', '#nav-ca-assembly-table', updateImagesCAAssembly);
});
    
     // Load Oakland Mayor Race data
     $('#nav-oakland-mayor-tab').click(function() {
        loadCSV('Excel_Files/KGO_Alameda_Races/Oakland_Mayor_Races.csv', '#nav-oakland-mayor-table');
    });
    // Load Alameda DA data
    $('#nav-alameda-da-tab').click(function() {
        loadCSV('Excel_Files/KGO_Alameda_Races/Alameda_DA_Races.csv', '#nav-alameda-da-table');
    });
    // Load District 5 Supervisor Race data
   $('#nav-sup-dist-5-tab').click(function() {
        loadCSV('Excel_Files/KGO_Alameda_Races/Sup_Dist_5_Races.csv', '#nav-sup-dist-5-table');
    });

    // Load Berkeley Mayor Race data
    $('#nav-berkeley-mayor-tab').click(function() {
        loadCSV('Excel_Files/KGO_Alameda_Races/Berkeley_Mayor_Races.csv', '#nav-berkeley-mayor-table');
    });
    // Load Dublin Mayor Race data
    $('#nav-dublin-mayor-tab').click(function() {
        loadCSV('Excel_Files/KGO_Alameda_Races/Dublin_Mayor_Races.csv', '#nav-dublin-mayor-table');
    });

     // Load Fremont Mayor Race data
    $('#nav-fremont-mayor-tab').click(function() {
        loadCSV('Excel_Files/KGO_Alameda_Races/Fremont_Mayor_Races.csv', '#nav-fremont-mayor-table');
        });

    $('#nav-livermore-mayor-tab').click(function() {
        loadCSV('Excel_Files/KGO_Alameda_Races/Livermore_Mayor_Races.csv', '#nav-livermore-mayor-table');
    });

    $('#nav-newark-mayor-tab').click(function() {
        loadCSV('Excel_Files/KGO_Alameda_Races/Newark_Mayor_Races.csv', '#nav-newark-mayor-table');
    });

    $('#nav-pleasanton-mayor-tab').click(function() {
        loadCSV('Excel_Files/KGO_Alameda_Races/Pleasanton_Mayor_Races.csv', '#nav-pleasanton-mayor-table');
    });

    $('#nav-union-mayor-tab').click(function() {
        loadCSV('Excel_Files/KGO_Alameda_Races/Union_City_Mayor_Races.csv', '#nav-union-mayor-table');
    });

    $('#nav-oakland-tab').click(function() {
        loadCSV('Excel_Files/KGO_Alameda_Races/Oakland_Races.csv', '#nav-oakland-table');
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
