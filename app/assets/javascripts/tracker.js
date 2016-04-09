// This javascript will generate via localstorage(Cookies) a UID and will make posts on the Server Tracker
// You need to set the main url to provide the Tracker url to it to work

//Define all the vars that we need!
$(document).ready(function(){
  var trackerURL = "http://usertracker-rd.herokuapp.com/control/"; //UPDATE HERE TO YOUR TRACKER URL
  var useruid, finalURL,whereIAM, ready;


  //Discover where I am

  var url = window.location.href;
  if (url.indexOf("about") != -1) {
    whereIAM = 'about'
  }
  else if (url.indexOf("prices") != -1) {
    whereIAM = 'prices'
  }
  else if (url.indexOf("contact") != -1) {
    whereIAM = 'contact'
  }
  else {
    whereIAM = 'home'
  }



  //Get my UserUID or create one for me please :D
  if(localStorage.getItem('useruid')==null){
    localStorage.setItem('useruid', Math.floor((Math.random() * 1000000000) + 1).toString());
  }

  useruid = localStorage.getItem('useruid');


  //NOW we Know Where we are we just need to send the request
  $.ajax({
    url: trackerURL+useruid+"/"+whereIAM,
    type: "GET",
    success: function(resp){}
  });

  //EMAIL VALIDATION


  //FORM UPDATE EMAIL
  $("#formoid").submit(function(event) {

    /* stop form from submitting normally */
    event.preventDefault();

    if (isEmail($('#email').val())) {
      /* Send the data using post */
      var posting = $.post( trackerURL+"update/"+useruid, { email: $('#email').val() } );
      function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
      }
      /* Alerts the results */
      posting.done(function( data ) {
        alert('Email enviado com sucesso');
      });
    }
    else {
        alert('Email invalido');
    }
  });

});
