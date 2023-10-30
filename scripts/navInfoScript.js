$(function() {
  

  const links = [
    {
      title: "My GitHub Account",
      link: "", 
    },
    {
      title: "See The Code",
      link: "", 
    },
    {
      title: "Page Validity",
      link: "",
      },
      {
    title: "Class GitHub Page",
    link: "",
    },
  {
    title: "Here if needed",
    link: "",
    },
    {
      title: "Here if needed",
      link: "",
      },
  ];

// iterate over the JSON array
$.each(links, function (index, item) {
  console.log("Game Title: " + item.title);
  console.log("Game URL: " + item.link);

  // create a brand new HTML element JUST with code
var el = `<div class='card text-center  card-item' style="width: 200px"> \
  <a href="${ item.link}" target="_blank" class="cardOpen2 btn btn-outline-info"></a>
 </div>`; 

 console.log(el); 


$('#card-list').append(el);

$('.nav-dropdown').append($(`<li><a href=" ${item.link} " target ="_blank"> ${item.title} </a></li>`));

});


});