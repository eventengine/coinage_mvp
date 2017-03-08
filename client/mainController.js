var Coinage = angular.module('coinage_mvp', []);


Coinage.controller('mainController', function($scope, $http) {

  // ================== default display ===========================
    // $scope.input = "[placeholder for search input]";
    $scope.title = "Law Enforcement Strikes Back in Bitcoin Hearing";
    $scope.byline = "By NATHANIEL POPPER";
    $scope.pub_date = "2014-01-29T16:16:03Z";
    $scope.intro = "Government officials testified on Wednesday that virtual currencies like Bitcoin had opened up new avenues for crime that the authorities had not been able to keep up with....";
    $scope.url = "http://dealbook.nytimes.com/2014/01/29/law-enforcement-strikes-back-in-bitcoin-hearing/";
    $scope.type = "article";

    $scope.source = "NYTimes";
    // $scope.user_tags = "Lawsky, Benjamin M; Vance, Cyrus R Jr";
    // $scope.user_notes = "Ben Lawsky - the guy who put in place the first digital currency regulation in the US and then left to start a consulting firm advising companies how to deal with crypto regulation.";
    // $scope.createdAt = "2017-03-06T23:41";
    // $scope.updatedAt = null;

// database section: server should send these; no default
    // $scope.dbtitle = "SendGrid Account Breach Was Used to Attack Coinbase, a Bitcoin Exchange";
    // $scope.url = "http://bits.blogs.nytimes.com/2015/04/09/sendgrid-email-breach-was-used-to-attack-coinbase-a-bitcoin-exchange/";
    // $scope.dbpub_date = "2015-04-09T20:09:02Z";

  $scope.searchRequest = function(input) {
    console.log('mainController.js l 21 post request: mainController / search box input (request) = ', input);

    $http.post('/searchRequest', {search: input}).then(function(resp) {
      console.log('mainController.js l 21: mainController / search box input; response = ', resp);


      $scope.title = resp.data.response.docs[0].headline.main;
      $scope.byline = resp.data.response.docs[0].byline.original;;



      var dateFormat = resp.data.response.docs[0].pub_date;
          $scope.pubdate = dateFormat.slice(5,7) + '/' + dateFormat.slice(8,10) + '/' + dateFormat.slice(0,4);
      $scope.pub_date = dateFormat;

      $scope.intro = resp.data.response.docs[0].lead_paragraph;
      $scope.url = resp.data.response.docs[0].web_url;
      $scope.type = resp.data.type;
      $scope.source = resp.data.source;
      $scope.user_tags = resp.data.user_tags;
      $scope.user_notes = resp.data.user_notes;
      $scope.createdAt = resp.data.createdAt;
      $scope.updatedAt = resp.data.updatedAt;
    })
  };

  var fullRecord = {
    title: "SendGrid Account Breach Was Used to Attack Coinbase, a Bitcoin Exchange",
    byline: "By NICOLE PERLROTH",
    pub_date: "2015-04-09T20:09:02Z",
    intro: "Government officials testified on Wednesday that virtual currencies like Bitcoin had opened up new avenues for crime that the authorities had not been able to keep up with....",
    type: "article",
    source: "NYTimes",
    createdAt: "2017-03-06T15:02",
    updatedAt: "null",
    user_tags: "null",
    user_notes: "This is a note the dev put in manually in mLab when setting up the initial record. Now that he's reading it, he's made good progress."
  };

  $scope.saveData = function (fullRecord) { // fullRecord will be search result obj
    console.log('mainController.js l 28; .saveData. fullRecord = ', fullRecord);
// { chili: fullRecord}
    $http.post('/saveData', {
      title: "SendGrid Account Breach Was Used to Attack Coinbase, a Bitcoin Exchange",
      byline: "By NICOLE PERLROTH",
      pub_date: "2015-04-09T20:09:02Z",
      intro: "Government officials testified on Wednesday that virtual currencies like Bitcoin had opened up new avenues for crime that the authorities had not been able to keep up with....",
      type: "article",
      source: "NYTimes",
      createdAt: "2017-03-06T15:02",
      updatedAt: "null",
      user_tags: "null",
      user_notes: "This is a note the dev put in manually in mLab when setting up the initial record. Now that he's reading it, he's made good progress."
    }).then(function(resp) {
    console.log('mainController.js l 29, .saveData, resp = ', resp.data);

    $scope.dbtitle = resp.data.dbtitle;
    $scope.url =resp.data.url;
    $scope.dbpub_date = resp.data.dbpub_date;

    })
  }
});
