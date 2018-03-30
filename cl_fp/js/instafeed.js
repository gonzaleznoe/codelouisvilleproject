$(function(){
	
	// first script to pull posts
	
  var accessToken = '18283176.1677ed0.411ba12f574e4083b4a966fc78dfa68d'; // use your own token
  
  $.getJSON('https://api.instagram.com/v1/users/self/media/recent/?access_token='+accessToken+'&callback=?',function (insta) {
    $.each(insta.data,function (photos,src) {
      if ( photos === 6 ) { return false; }
      $('<a class="post" href="#"> <img src=" '
        + this.images.standard_resolution.url + 
        '" /> '
        ).appendTo('#instafeed');
    }); 
  });

});
