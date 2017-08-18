$(document).ready(function(){
  $('#scroll').css('margin-left', '-' + $('#scroll').width()/2 + 'px');




var sundaySessions = {
  day: 'Sunday',
  date: '7th',
  month: 'May',
  time: '16:00',
  eventTitle: 'Sunday Sessions present the Bromleys',
  venue: 'The Grayston Unity',
  town: 'Halifax',
  description: 'Sunday sessions at the Grayston Unity. Free entry. In the back yard (weather permitting).',
  website: 'https://www.facebook.com/thegraystonunity/'
}

var todFolkFest = {
  day: 'Sunday',
  date: '30th',
  month: 'April',
  time: '18:00',
  eventTitle: 'The Bromleys at Todmorden Folk Festival',
  venue: 'Fielden Centre',
  town: 'Todmorden',
  description: "We're very excited to be playing the closing concert at this year's Todmorden Folk Festival with Murston Bapchild and The Braxton Hicks and Isaac (Trickstar Entertainment). For further information and tickets (£10) please go to todfolkfest.co.uk.",
  website: 'https://todfolkfest.co.uk/'
}

/* look into creating objects from form fields */


$("#eventForm").submit(function(event) {
  var x = ( $(this).serializeArray() );
  event.preventDefault();

  var newGig = {
    day: x[0].value,
    date: x[1].value,
    month: x[2].value,
    time: x[3].value,
    eventTitle: x[4].value,
    venue: x[5].value,
    town: x[6].value,
    description: x[7].value,
    website: x[8].value
  }
  createGig(newGig)
  alert('Gig Created!')
});

createGig(todFolkFest);
createGig(sundaySessions);

function createGig(gig) {
  $('#gigList').append(`<div class="list-group-item gigEntry"><a target='_blank' href='${gig.website}'><h4 class='list-group-item-heading'> ${gig.day} ${gig.date} ${gig.month} ${gig.time} - ${gig.eventTitle} -  ${gig.venue}, ${gig.town}</h4><p class='list-group-item-text'>${gig.description}</p></a></div>`);
}

$('#firstGigDelete').click(function(){
  $('.gigEntry').first().remove();
})

$('#lastGigDelete').click(function(){
  $('.gigEntry').last().remove();
})


});
