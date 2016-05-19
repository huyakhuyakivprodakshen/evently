(function(){
  $('#form-contact').submit(function(e){
    if ($('#notice').length) {
      $('#notice').remove();
    }
    clearInputs();
    $.ajax({
      type: 'POST',
      url: 'contact.php',
      data: $(this).serialize(),
      success: function(response) {
        var data = $.parseJSON(response);
        if (data.success == 1) {
          flashMessage(data.message);
          clearForm('#form-contact');
        } else {
          flashInputs($('#form-contact .input'), data.fields);
          flashMessage(data.errors.join('<br>'));
        }
      }
    });
    e.preventDefault();
  });

  $('#form-register').submit(function(e){
    if ($('#notice').length) {
      $('#notice').remove();
    }
    clearInputs();
    $.ajax({
      type: 'POST',
      url: 'register.php',
      data: $(this).serialize(),
      success: function(response) {
        var data = $.parseJSON(response);
        if (data.success == 1) {
          flashMessage(data.message);
          clearForm('#form-register');
        } else {
          flashInputs($('#form-register .input'), data.fields);
          flashMessage(data.errors.join('<br>'));
        }
      }
    });
    e.preventDefault();
  });

  function clearForm(id) {
    $(id+' .input').val('');
  }

  function clearInputs() {
    $('#form-register input.input--invalid').removeClass('input--invalid');
  }

  function flashInputs(inputs, fields) {
    for (var i=0;i<fields.length;i++) {
      $(inputs[fields[i]-1]).addClass('input--invalid');
    }
  }
  function flashMessage(msg) {
    $('.page').prepend("<div id='notice' class='notice'>"+msg+"<svg><use xlink:href='img/design/sprite.svg#icon-arrow-up-s'></use></svg></div>");
    $('#notice').slideDown();
  }
})()
