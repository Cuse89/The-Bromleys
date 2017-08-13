$(document).ready(function(){
  $('#scroll').css('margin-left', '-' + $('#scroll').width()/2 + 'px');
});



var sundaySessions = {
  day: 'Sunday',
  date: '7th',
  month: 'May',
  time: '16:00',
  eventName: 'Sunday Sessions present the Bromleys',
  venue: 'The Grayston Unity',
  town: 'Halifax',
  description: 'Sunday sessions at the Grayston Unity. Free entry. In the back yard (weather permitting).'
}

var todFolkFest = {
  day: 'Sunday',
  date: '30th',
  month: 'April',
  time: '18:00',
  eventName: 'The Bromleys at Todmorden Folk Festival',
  venue: 'Fielden Centre',
  town: 'Todmorden',
  description: 'We\'re very excited to be playing the closing concert at this year\'s Todmorden Folk Festival with Murston Bapchild and The Braxton Hicks and Isaac (Trickstar Entertainment). For further information and tickets (£10) please go to todfolkfest.co.uk.'
}

/* look into creating objects from form fields */

createGig(sundaySessions);
createGig(todFolkFest);

function createGig(event) {
  $('#gigs').append(event.day + ' ' + event.date + ' ' + event.month + ' ' + event.time + ' - ' + event.eventName + ' - ' + event.venue + ', ' + event.town + ' - ' + event.description);
}
