//Business Logic

function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Ticket.prototype.ticketCost = function() {
  var cost = 0;
  if (this.age === "kid"){
    cost += 2.5;
  } else if (this.age === "teen") {
    cost += 5;
  } else if (this.age === "senior") {
    cost += 7;
  } else if (this.age === "adult") {
    cost += 10;
  }

  if (this.time === "morning") {
    cost -= 2.5;
  } else if (this.time === "afternoon") {
    cost -= 1;
  } else if (this.time === "weekend") {
    cost += 1;
  }
  return cost;
}




//User Logic
$(document).ready(function(){
  $("#ticket").submit(function(event){
    event.preventDefault();
    var nameInput = $("#name").val();
    var movieInput = $("#movies").val();
    var timeInput = $("#time").val();
    var ageInput = $("#age").val();

    var newTicket = new Ticket(movieInput, timeInput, ageInput);

    console.log(newTicket.ticketCost());
    $(".cost-show").show();


    $(".name").text(nameInput);
    $(".price").text(newTicket.ticketCost());

    $("#name").val("");

  });
});
