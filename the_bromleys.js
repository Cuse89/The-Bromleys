var photos = [
  'https://scontent-sjc2-1.xx.fbcdn.net/v/t31.0-8/20626729_1948119205403523_3714528780057573921_o.jpg?oh=8349094dc375858c60d99f6f7b2ba350&oe=5A35EA8F',
  'https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/20914444_1955022508046526_8090067511524461303_n.jpg?oh=5bd795349161e2e705c1433d05664c0e&oe=5A1F847D',
  'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/20604477_1948119068736870_3928721377895027446_n.jpg?oh=40e5197499460edc6ea03a5d1dec3dc9&oe=5A2AC777',
  'https://scontent-sjc2-1.xx.fbcdn.net/v/t31.0-8/14939367_1815232805358831_8299599505136130288_o.jpg?oh=855b0be40a86d53d1e3d40cb77d39331&oe=5A27CCF7',
  'https://scontent-sjc2-1.xx.fbcdn.net/v/t31.0-8/15000635_1815232802025498_5891123757261380191_o.jpg?oh=98f6c1da8553df1fa64a3d5be1392a9b&oe=5A16AF60',
  'https://scontent-sjc2-1.xx.fbcdn.net/v/t31.0-8/15025219_1815232808692164_1069023235331712728_o.jpg?oh=0559309565785ac6be9540ab579f3f4b&oe=5A3050B5',
  'https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/1916679_1707679202780859_3292656403658918189_n.jpg?oh=b11260ddf71fef2bb8a398473b770b6e&oe=5A278FEA',
  'https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/995346_1707675712781208_5713377040191280885_n.jpg?oh=429ae406cbaaa910d73d4e377d2d02eb&oe=5A241E03',
  'https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/12208318_1707668839448562_359292381025869912_n.jpg?oh=9993f81cfd8c78f73ee49c06d205090c&oe=5A390BC0',
  'https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/12688177_1693582467523866_4638810967759931870_n.jpg?oh=40de53eff5f110190bcb633ff55b3baa&oe=5A1C18E4',
  'https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/14915258_1815232865358825_6440374645781736228_n.jpg?oh=92d34ac98e62174c39cbd4f5cb6777f0&oe=5A31B21B',
  'https://scontent-sjc2-1.xx.fbcdn.net/v/t31.0-8/20626180_1948119062070204_2780033433523831354_o.jpg?oh=9d8ace0d6134fcb46bc26b2a51e92953&oe=5A1B9FC4',
]

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

$(document).ready(function(){
  $('#scroll').css('margin-left', '-' + $('#scroll').width()/2 + 'px');

for (var i = 0; i < photos.length; i++) {
  $('#grid').append(`<div class='grid_list'><div class='image_holder'><img class='grid_photo' id='grid_photo${i}' src='${photos[i]}' data-number = '${i}'/></div></div>`);

};


  $('.grid_photo').click(function() {
    var photoArrayIndex = $(this).data('number')
  $('#grid_photo_big_wrapper').show();
  $('#grid_photo_big_wrapper').append(`<span id='close'>&times;</span><img class='grid_photo_big' id='grid_photo_big${photoArrayIndex}' src='${photos[photoArrayIndex]}'/>`);
  $('.grid_photo_big').css('margin-left', '-' + $('#grid_photo_big' + photoArrayIndex).width()/2 + 'px');
  $('.grid_photo_big').css('margin-top', '-' + $('#grid_photo_big' + photoArrayIndex).height()/2 + 'px');
  $('body').css('overflow-y', 'hidden');
  /*Using 'event delegation', as the span ('#close') is added dynamically*/
    $(document).on('click', '#close', function(){
      $('#grid_photo_big_wrapper').empty();
      $('#grid_photo_big_wrapper').hide();
      $('body').css('overflow-y', 'auto');
    });
});






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
