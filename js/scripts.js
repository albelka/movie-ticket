var Ticket = function(movie, ofAge, time){
  this.movieName = movie;
  this.age = ofAge;
  this.time = time;
}

Ticket.prototype.ticketDetails = function(){
  return this.movieName = "<br> " + this.time +  ".";
}
//
// if(Ticket.time === 4){
//   var newPrice = price;
// }


// User Interface
$(document).ready(function(){
  $().submit(function(event){
    event.preventDefault();
    var movie = $("#movieSelect").val();
    console.log(movie);
    var times = parseInt($("#times").val());
    var age = parseInt($("input#enterAge").val());
    var newTicket = new Ticket(movie, times, age);
console.log( newTicket);
    $("ul#result").append("<li><span class='movie'>" + newTicket.ticketDetails() + "</span></li>");



  });
});
