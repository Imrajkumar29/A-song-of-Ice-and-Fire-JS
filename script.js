const fetchdata =async() =>{

    const response =await fetch('https://www.anapioficeandfire.com/api/books');
    const bookdetails =await response.json();
    console.log(bookdetails);
    return bookdetails;
  }
window.addEventListener('DOMContentLoaded',async()=>{
    let bookdata = {};
    let tableData="";
    let tableHead="<tr>";
    try{
        bookdata =await fetchdata();


        Object.keys(bookdata[1]).forEach(function printhead(cvalue,cindex){
         if(cvalue!=="povCharacters" && cvalue!=="characters" 
         && cvalue!=='url' && cvalue!=="mediaType" )
         {
          tableHead+=`<th>${cvalue.toUpperCase()}</th>`;
         }
        }
          );
          tableHead+= '</tr>';
          console.log(`tableHead is ${tableHead}`);


        
        bookdata.map((values)=>{
          tableData+=`<tr>
          <td>${values.name}</td>
          <td>${values.isbn}</td>          
          <td>${values.authors}</td>
          <td>${values.numberOfPages}</td>
          <td>${values.publisher}</td>
          <td>${values.country}</td>
          <td>${values.released}</td>
      </tr>`;
          console.log(`tableData is ${tableData}`);
      });
    
      document.getElementById("table_head").innerHTML=tableHead;
      document.getElementById("table_body").innerHTML=tableData;

        for (var key1 in bookdata)
        {
          for (var key2 in bookdata[key1])
          {
            console.log('The value of '+key2+ ' is '+bookdata[key1][key2]);
          }
        }
    }
    catch(e)
    {
        console.log("Error");
        console.log(e);
    }
});

function searchBookDetails() {
    // Declare variables
    let input, filter, table, tr, td, i, txtValue,th;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("listofbooks");
    tr = table.getElementsByTagName("tr");
    th = table.getElementsByTagName("th");
    console.log('th is'+th.length);
    
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        tr[i].style.display = "none";
        console.log('thead' ||thead);
       for(j=0;j<th.length;j++) {
      td = tr[i].getElementsByTagName("td")[j];
      if (td) {
        txtValue = td.textContent || td.innerText;
        console.log(txtValue);
        tr[i].getElementsByTagName("td")[j].innerHTML=txtValue;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = ""; 
            if(filter.trim()!=='' && filter!==null)
            {        
          tr[i].getElementsByTagName("td")[j].innerHTML=`<mark>${txtValue}<\mark>`;  
            }
            else{
        tr[i].getElementsByTagName("td")[j].innerHTML=`${txtValue}`;   
            }
            break;
        } 
      }
    }
  }
}
