json.user_name    @message.user.name
json.created_time @message.created_at.strftime("%Y/%m/%d(%a) %H:%M:%S")
json.content      @message.content
json.image_url    @message.image.url