/**$(document).ready(function(){
    $('#nav-us-house-tab').click(function(){
     $.ajax({
           
      contentType: 'text/plain; charset=utf-8',
      url: 'Excel_Files/US_House_IL_Districts.csv',
      dataType:"text",

      success:function(data){
       var race_data = data.split(/\r?\n|\r/);
       var table_data = '<table class="table table-bordered table-striped">';
       for(var count = 0; count<race_data.length; count++)
       {
        var cell_data = race_data[count].split(",");
        if (cell_data.length === 1 && cell_data[0] === '') {
          continue;
        }
        table_data += '<tr>';
        for(var cell_count=0; cell_count<cell_data.length; cell_count++)
        {
         if(count === 0)
         {
          table_data += '<th>'+cell_data[cell_count]+'</th>';
         }
         else
         {
          table_data += '<td>'+cell_data[cell_count]+'</td>';
         }
        }
        table_data += '</tr>';
       }
       table_data += '</table>';
       $('#nav-us-house-table').html(table_data);
       updateImagesUSHouse();
      }
     });
    });
   });


   function updateImagesUSHouse() {
    // Select all rows in the table
    $('#nav-us-house-table tr').each(function() {
        // Skip the header row
        if ($(this).index() === 0) return;

        // Get the first cell in the current row
        var firstCell = $(this).find('td').first();

        // Get the text content of the first cell
        var cellText = firstCell.text().trim();

        // Create an image element
        var img = $('<img>').attr('width', '50');
        var partyName = '';

        // Set the image source based on the cell text
        if (cellText === 'R') {
            firstCell.text().trim(); // Replace with the path to your image
            img.attr('src', 'IMAGES/REPUBLICAN-01.png');
            img.attr('alt', 'Republican');
            partyName = ' Republican';
        } else if (cellText === 'D') {
            img.attr('src', 'IMAGES/DEMOCRAT-01.png'); // Replace with the path to your image
            img.attr('alt', 'Democrat');
            partyName = ' Democrat';
        } else if (cellText === 'G') {
            img.attr('src', 'IMAGES/GREEN-01.png'); // Replace with the path to your image
            img.attr('alt', 'Green');
            partyName = ' Green';
        } else if (cellText === 'L') {
            img.attr('src', 'IMAGES/LIBERTARIAN-01.png'); // Replace with the path to your image
            img.attr('alt', 'Libertarian');
            partyName = ' Libertarian';
        }  
        
        else {
            img.attr('src', 'IMAGES/DEFAULT-01.png'); // Replace with a default image path
            img.attr('alt', 'Unknown');
        }

        // Replace the text content with the image
        firstCell.empty().append(img, partyName);
    });
}

$(document).ready(function(){
    $('#nav-us-senate-tab').click(function(){
     $.ajax({
           
      contentType: 'text/plain; charset=utf-8',
      url: 'Excel_Files/US_Senate_Races_2.csv',
      dataType:"text",

      success:function(data){
        console.log(data); 
       var race_data = data.split(/\r?\n|\r/);
       var table_data = '<table class="table table-bordered table-striped">';
       for(var count = 0; count<race_data.length; count++)
       {
        var cell_data = race_data[count].split(",");
        if (cell_data.length === 1 && cell_data[0] === '') {
          continue;
        }
        table_data += '<tr>';
        for(var cell_count=0; cell_count<cell_data.length; cell_count++)
        {
         if(count === 0)
         {
          table_data += '<th>'+cell_data[cell_count]+'</th>';
         }
         else
         {
          table_data += '<td>'+cell_data[cell_count]+'</td>';
         }
        }
        table_data += '</tr>';
       }
       table_data += '</table>';
       $('#nav-us-senate-table').html(table_data);
       updateImageUSSenate();
      
    }
     });
    });
   });

   function updateImageUSSenate() {
    // Select all rows in the table
    $('#nav-us-senate-table tr').each(function() {
        // Skip the header row
        if ($(this).index() === 0) return;

        // Get the first cell in the current row
        var firstCell = $(this).find('td').first();

        // Get the text content of the first cell
        var cellText = firstCell.text().trim();

        // Create an image element
        var img = $('<img>').attr('width', '50');
        var partyName = '';

        // Set the image source based on the cell text
        if (cellText === 'R') {
            firstCell.text().trim(); // Replace with the path to your image
            img.attr('src', 'IMAGES/REPUBLICAN-01.png');
            img.attr('alt', 'Republican');
            partyName = ' Republican';
        } else if (cellText === 'D') {
            img.attr('src', 'IMAGES/DEMOCRAT-01.png'); // Replace with the path to your image
            img.attr('alt', 'Democrat');
            partyName = ' Democrat';
        } else if (cellText === 'G') {
            img.attr('src', 'IMAGES/GREEN-01.png'); // Replace with the path to your image
            img.attr('alt', 'Green');
            partyName = ' Green';
        } else if (cellText === 'L') {
            img.attr('src', 'IMAGES/LIBERTARIAN-01.png'); // Replace with the path to your image
            img.attr('alt', 'Libertarian');
            partyName = ' Libertarian';
        }  
        
        else {
            img.attr('src', 'IMAGES/DEFAULT-01.png'); // Replace with a default image path
            img.attr('alt', 'Unknown');
        }

        // Replace the text content with the image
        firstCell.empty().append(img, partyName);
    });
}

$(document).ready(function(){
    $('#nav-cook-tab').click(function(){
     $.ajax({
           
      contentType: 'text/plain; charset=utf-8',
      url: 'Excel_Files/Cook_County_Races.csv',
      dataType:"text",

      success:function(data){
        console.log(data); 
       var race_data = data.split(/\r?\n|\r/);
       var table_data = '<table class="table table-bordered table-striped">';
       for(var count = 0; count<race_data.length; count++)
       {
        var cell_data = race_data[count].split(",");
        if (cell_data.length === 1 && cell_data[0] === '') {
          continue;
        }
        table_data += '<tr>';
        for(var cell_count=0; cell_count<cell_data.length; cell_count++)
        {
         if(count === 0)
         {
          table_data += '<th>'+cell_data[cell_count]+'</th>';
         }
         else
         {
          table_data += '<td>'+cell_data[cell_count]+'</td>';
         }
        }
        table_data += '</tr>';
       }
       table_data += '</table>';
       $('#nav-cook-table').html(table_data);
       updateImageCook();
      
    }
     });
    });
   });

   function updateImageCook() {
    // Select all rows in the table
    $('#nav-cook-table tr').each(function() {
        // Skip the header row
        if ($(this).index() === 0) return;

        // Get the first cell in the current row
        var firstCell = $(this).find('td').first();

        // Get the text content of the first cell
        var cellText = firstCell.text().trim();

        // Create an image element
        var img = $('<img>').attr('width', '50');
        var partyName = '';

        // Set the image source based on the cell text
        if (cellText === 'R') {
            firstCell.text().trim(); // Replace with the path to your image
            img.attr('src', 'IMAGES/REPUBLICAN-01.png');
            img.attr('alt', 'Republican');
            partyName = ' Republican';
        } else if (cellText === 'D') {
            img.attr('src', 'IMAGES/DEMOCRAT-01.png'); // Replace with the path to your image
            img.attr('alt', 'Democrat');
            partyName = ' Democrat';
        } else if (cellText === 'G') {
            img.attr('src', 'IMAGES/GREEN-01.png'); // Replace with the path to your image
            img.attr('alt', 'Green');
            partyName = ' Green';
        } else if (cellText === 'L') {
            img.attr('src', 'IMAGES/LIBERTARIAN-01.png'); // Replace with the path to your image
            img.attr('alt', 'Libertarian');
            partyName = ' Libertarian';
        }  
        
        else {
            img.attr('src', 'IMAGES/DEFAULT-01.png'); // Replace with a default image path
            img.attr('alt', 'Unknown');
        }

        // Replace the text content with the image
        firstCell.empty().append(img, partyName);
    });
}
    **/