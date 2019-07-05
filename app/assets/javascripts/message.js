$(function() {
  function buildHTML(message) {
    var image = message.image_url ? `<img src=${message.image_url}>` : ``;
    var html = `<div class='message'>
                  <div class='upper-info'>
                    <div class='upper-info__talker'>
                      ${ message.user_name }
                    </div>
                    <p class='upper-info__date'>
                      ${ message.created_time }
                    </p>
                  </div>
                  <div class='lower-info'>
                    <p class='lower-info__text'>
                      ${ message.content }
                    </p>
                    ${ image }
                  </div>
                </div>`
    return html;
  }
  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    }).done(function(data) {
      var html = buildHTML(data);
      $('.messages').append(html);
      $('form')[0].reset();
      $('.messages').animate({scrollTop:$('.messages')[0].scrollHeight});
      $('.submit-btn').prop('disabled',false);
    }).fail(function() {
      alert('error');
      $('.submit-btn').prop('disabled',false);
    })
  })
});