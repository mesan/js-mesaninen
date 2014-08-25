(function () {
  var words = {
    'bord': 'table',
    'prosjekt': 'project',
    'ansikt': 'face',
    'jeg': 'I',
    'samma': 'whatever',
    'bacon': 'bacon'
  };

  var viewModel = {
    word: ko.observable(),
    translatedWord: ko.observable(),
    noResults: ko.observable(false),
    translate: function () {
      var translatedWord = words[this.word()];

      this.noResults(translatedWord === undefined);

      this.translatedWord(translatedWord);
    }
  };

  ko.applyBindings(viewModel);
})();