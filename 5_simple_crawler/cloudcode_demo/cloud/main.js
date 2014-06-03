Parse.Cloud.job("webpage_scraping", function(request, status) {
  var xmlreader = require('cloud/xmlreader.js');
  Parse.Cloud.httpRequest({
    url: 'http://www.ericclapton.com/tour',
    success: function (httpResponse) {
      xmlreader.read(httpResponse.text, function(err, doc){
        var arena = doc.HTML.BODY.DIV.at(1).DIV.at(0).DIV.at(2).DIV.at(0).DIV.at(2).DIV.at(0).DIV.at(0).TABLE.at(0).TBODY.at(0).TR.at(1).TD.at(1).A.at(0).text();
        ///html/body/div[2]/div/div[3]/div/div[3]/div/div/table/tbody/tr[2]/td[2]/a
        var ConcertArenaClass = Parse.Object.extend('ConcertArenaClass');
        var obj = new ConcertArenaClass();
        obj.set('arena', arena);
        obj.save(null, {
          success: function(obj){
            status.success('arena saved.');
          }, error: {}
        });
      });
    },
    error: function (httpResponse) {
      console.error('Request failed with response code ' + httpResponse.status);
    }
  });
});
