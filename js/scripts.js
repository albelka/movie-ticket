var Ticket = function(movie, time, ofAge, price){
  this.movieName = movie;
  this.time = time;
  this.age = ofAge;
  this.price = 15;
}

Ticket.prototype.ticketDetails = function(){
  return this.movieName + " <br>at " + this.time;
}

Ticket.prototype.findPrice = function(){
  if(this.age <= 13 && (this.movieName === "It Follows" || this.movieName === "Rocky Horror Picture Show")) {
    alert("You can't watch these adult films yet youngster!");
  } else if(this.age <= 13) {
    return this.price - 11;
    console.log(this.price - 11);
  }
}

// User Interface
$(document).ready(function(){
  $("form.movies").submit(function(event){
    event.preventDefault();
    var movie = $("#movieSelect").val();
    var time = $("#time").val();
    var age = parseInt($("input#enterAge").val());
    var newTicket = new Ticket(movie, time, age, price);
    var price = newTicket.findPrice();
console.log( newTicket);
    $("ul#result").append("<li><span class='movie'>" + newTicket.ticketDetails() + "<br> your price is $" + price + "</span></li>");


  });
});
