$(function() {

  var search_list = $('#user-search-result');

  var member_list = $('#chat-group-users');

  function appendUser(user) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${ user.name }</p>
                  <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${ user.id } data-user-name=${ user.name }>追加</div>
                </div>`
                console.log(html)
    search_list.append(html);
  }

  function appendMember(id,name) {
    var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-${ id }'>
                  <input name='group[user_ids][]' type='hidden' value='${ id }'>
                  <p class='chat-group-user__name'>${ name }</p>
                  <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
                </div>`
    member_list.append(html)
  }


  $('#user-search-field').on('keyup', function() {
    var input = $('#user-search-field').val();
    $.ajax({
      type: 'GET',
      url: '/users/search',
      data: { name: input },
      dataType: 'json'
    })
    .done(function(users) {
      $('#user-search-result').empty();
      if (users.length !== 0) {
        users.forEach(function(user) {
          appendUser(user);
        })
      }
    })
    .fail(function() {
      alert('ユーザー検索に失敗しました');
    })
  })

  $(function() {
    $(document).on('click', '.user-search-add', function() {
      var id = $(this).attr('data-user-id');
      var name = $(this).attr('data-user-name');
      appendMember(id, name);
      $(this).parent().remove();
    })
  })

  $(function() {
    $(document).on('click', '.user-search-remove', function() {
      $(this).parent().remove();
    })
  })
});