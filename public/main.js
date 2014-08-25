(function () {
  var translatedWords = {
    'bord': 'table',
    'prosjekt': 'project',
    'ansikt': 'face',
    'jeg': 'I',
    'samma': 'whatever',
    'bacon': 'bacon'
  };

  function getTranslatedWord(word) {
    return translatedWords[word];
  }

  var viewModel = {
    word: ko.observable(),
    translatedWord: ko.observable(),
    noResults: ko.observable(false),
    translate: function () {
      var translatedWord = getTranslatedWord(this.word());
      this.noResults(translatedWord === undefined);
      this.translatedWord(translatedWord);
    }
  };

  ko.applyBindings(viewModel);
})();