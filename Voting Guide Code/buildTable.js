$(document).ready(function(){
    $('#nav-house-tab').click(function(){
       /*$("#div1").load("US_House_IL_Districts.csv");*/
     $.ajax({
           
      contentType: 'text/plain; charset=utf-8',
       url: "US_House_IL_Districts.csv",
      dataType:"text",

      success:function(data)
      {
       var employee_data = data.split(/\r?\n|\r/);
       var table_data = '<table class="table table-bordered table-striped">';
       for(var count = 0; count<employee_data.length; count++)
       {
        var cell_data = employee_data[count].split(",");
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
       $('#house_race_table').html(table_data);
       updateTableImages();
      }
     });
    });
    
   });
   function updateTableImages() {
    // Select all rows in the table
    $('#house_race_table tr').each(function() {
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
            img.attr('src', 'IMAGES/DEMOCRAT-01.png'); // Replace with the path to your image
            img.attr('alt', 'Green');
            partyName = ' Green';
        } else if (cellText === 'L') {
            img.attr('src', 'IMAGES/DEMOCRAT-01.png'); // Replace with the path to your image
            img.attr('alt', 'Libertarian');
            partyName = ' Libertarian';
        }  
        
        else {
            img.attr('src', 'default.png'); // Replace with a default image path
            img.attr('alt', 'Unknown');
        }

        // Replace the text content with the image
        firstCell.empty().append(img, partyName);
    });
}