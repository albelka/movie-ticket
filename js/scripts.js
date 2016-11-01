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
    return this.price - 15;
  } else if(this.age <= 13) {
    return this.price - 11;
  } else if(this.age >= 65){
    return this.price - 7;
  } else if(this.time === "2" || this.time === "12"){
    return this.price - 4;
  } else {
    return this.price;
  }
}
var showImage = function(movie){
  if(movie === "Star Wars"){
    return $("#darth").show();
  } else if(movie === "Lo and Behold"){
    return $("#behold").show();
  } else if(movie === "It Follows"){
    return $("#follows").show();
  } else if(movie === "Rocky Horror Picture Show"){
    return $("#rocky").show();
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
    showImage(movie);


  });
});
