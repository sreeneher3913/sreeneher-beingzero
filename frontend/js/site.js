//1.  how to make backend call  
$.getJSON('/data', function(d){
    //alert(JSON.stringify(d));

    $('#name').text(d.name);
    $('#college').text(d.college);
    $('#regno').text(d.regno);

})
//2.  how to show data from js file to html file  