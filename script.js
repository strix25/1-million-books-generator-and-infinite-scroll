// var booksJSON;

// var self = this;
var allBooks;
$.getJSON("books.json", function (data) {
    // booksJSON = data;
    // console.log(booksJSON);
    allBooks = data;
    // for (const key in data) {
    //     arej.push(data[key]);
    // }

    //console.log(data);
    var hot = data.slice(0,100);
    for (let i = 0; i < hot.length; i++) {
        $( "#bookList" ).append( `
        <tr>
        <td>
          <span>${hot[i].name}</span>
        </td>
        <td>
          <span>${hot[i].author}</span>
        </td>
        <td>
          <span>${hot[i].gender}</span>
        </td>
        <td>
          <span>${hot[i].genre}</span>
        </td>
        <td>
         <span>${hot[i].publish_date}</span>
        </td>
        <td>
         <span></span>
        </td>
      </tr>` );
    }
    
    // for (let i = 0; i < arej.length; i++) {
    //     $( "#test" ).append( `<p>${son[i].name}</p>` );
        
    // }
});

var page = 0;

//Infinite Scrolling
$(window).scroll(function () {
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {

        if (parseInt(page, "10") * 100 < parseInt(100000, "10")) {

            var startIndex = (parseInt(page, "10") + 1) * 100;
            console.log(startIndex);

            var newBooks = allBooks.slice(startIndex, startIndex + 100);
            
            //displaya jeh na DOM
            // newBooks.forEach(function (element) {
            //     $( "#test" ).append( `<p>${newBooks[element].name}</p>` );
            // });

            for (let j = 0; j < newBooks.length; j++) {
                $( "#bookList" ).append( 
                    `
                    <tr>
                    <td>
                      <span>${newBooks[j].name}</span>
                    </td>
                    <td>
                      <span>${newBooks[j].author}</span>
                    </td>
                    <td>
                      <span>${newBooks[j].gender}</span>
                    </td>
                    <td>
                      <span>${newBooks[j].genre}</span>
                    </td>
                    <td>
                     <span>${newBooks[j].publish_date}</span>
                    </td>
                    <td>
                     <span></span>
                    </td>
                  </tr>`
                 );
                
            }

            page++;
        }
    }
});

//console.log(booker.books[1]);
// for (var key in booker.books) {
//     $( "#test" ).append( `<p>${booker.books[key].name}</p>` );
// }
//////////
// for (let i = 0; i < arej.length; i++) {
//     $( "#test" ).append( `<p>${son[0].name}</p>` );
    
// }

function sortBookName (a, b) {
  var myNode = document.getElementById("bookList");
  myNode.innerHTML = '';
              // pre-sorted by name so we can use reverse for faster sort reversal
              allBooks.reverse();
              

              var hot = allBooks.slice(0,100);
              for (let i = 0; i < hot.length; i++) {
                  $( "#bookList" ).append( `
                  <tr>
                  <td>
                    <span>${hot[i].name}</span>
                  </td>
                  <td>
                    <span>${hot[i].author}</span>
                  </td>
                  <td>
                    <span>${hot[i].gender}</span>
                  </td>
                  <td>
                    <span>${hot[i].genre}</span>
                  </td>
                  <td>
                   <span>${hot[i].publish_date}</span>
                  </td>
                  <td>
                   <span></span>
                  </td>
                </tr>` );
              }
  
  
          };
          var ascending = true;
          function sortAuthor (a, b) {
            ascending = !ascending;

            allBooks.sort(function (a, b) {
                return a.author > b.author ? (ascending ? -1 : +1)
                    : a.author < b.author ? (ascending ? +1 : -1)
                        : 0;
            });

            var myNode = document.getElementById("bookList");
            myNode.innerHTML = '';

            var hot = allBooks.slice(0,100);
            for (let i = 0; i < hot.length; i++) {
                $( "#bookList" ).append( `
                <tr>
                <td>
                  <span>${hot[i].name}</span>
                </td>
                <td>
                  <span>${hot[i].author}</span>
                </td>
                <td>
                  <span>${hot[i].gender}</span>
                </td>
                <td>
                  <span>${hot[i].genre}</span>
                </td>
                <td>
                 <span>${hot[i].publish_date}</span>
                </td>
                <td>
                 <span></span>
                </td>
              </tr>` );
            }


        }