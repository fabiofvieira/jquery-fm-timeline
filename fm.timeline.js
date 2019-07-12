$.fn.fmTimeline = function(data) {
  var card = function(k, date, content, push) {
    var date = "Mar 2019";
    var html = "<div id='card-time-"+k+"' style='margin-top: " + (push ? '60' : '0') + "px'>";
    html += "<div class='time-date'>" + date + "</div>";
    html += "<div class='timeline-content'>" + content + "</div>";
    return html + "</div>";
  }
  var lastHeight = 0;
  $(data.items).each(function(k, v) {
    setTimeout(function(){
      var sizes = {
        left: $('.box-esquerda .box-container').innerHeight(),
        right: $('.box-direita .box-container').innerHeight(),
      }
      if(sizes.left <= sizes.right) {
        var push = sizes.right == lastHeight && k !== 0;
        $('.box-esquerda .box-container').append(card(k, v.data, v.content, push));
        lastHeight = $('.box-esquerda .box-container').innerHeight();
      } else {
        var push = sizes.left == lastHeight && k !== 0;
        $('.box-direita .box-container').append(card(k, v.data, v.content, push));
        lastHeight = $('.box-direita .box-container').innerHeight();
      }
    }, 100 * (k+1));
  });
};

$(".boxes").fmTimeline({
items: [
  { data: new Date("2015-01-02"), content: "<div><img src='http://placekitten.com/300/200'/>1</div>" },
    { data: new Date("2015-01-02"), content: "<div><img src='http://placekitten.com/500/200'/>2</div>" },
  { data: new Date("2015-01-02"), content: "<div><img src='http://placekitten.com/100/200'/>3</div>" },
  { data: new Date("2015-01-02"), content: "<div><img src='http://placekitten.com/250/200'/>4</div>" },
]
});