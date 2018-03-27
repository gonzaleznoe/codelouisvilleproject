# codelouisvilleproject
final project and work in pogress for codelouisve front-end class. 


REQUIREMENTS
jquery
https://code.jquery.com/
bootstrap
https://www.bootstrapcdn.com/

https://www.instagram.com/developer/

 var accessToken = 'instagram token'; // use your own token
  
  $.getJSON('https://api.instagram.com/v1/users/self/media/recent/?access_token='+accessToken+'&callback=?',function (insta) {
    $.each(insta.data,function (photos,src) {
      if ( photos === 9 ) { return false; }
      $('<a class="post" href="#"> <img src=" '
        + this.images.standard_resolution.url + 
        '" /> '
        ).appendTo('#instafeed');
    }); 
  });

});



