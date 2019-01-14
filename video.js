$.ajax({
    url: "data.json",
    dataType: "json",
    success: function(data) {
        var identifier = 0;
        var items = data['items'];
        for (let index = 0; index < items.length; index++) {
            
            if (items[index]['id']['kind'].indexOf('channel')>-1) {
                $('.container').append('<div class="channel">'+ items[index]['id']['kind'] + '</div>');
                
            } else if (items[index]['id']['kind'].indexOf('video')> -1) {
                $('.container').append('<div class="video"><iframe width="420" height="345" src="https://www.youtube.com/embed/'+ items[index]['id']['videoId']
                +  '"></iframe></div>');
            }
            
        }
     
    }
});
