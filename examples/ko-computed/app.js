var ViewModel = function () {
  this.hours = ko.observable('00');
  this.seconds = ko.observable('00');
  this.hoursAndSeconds = ko.computed(function () {
    return this.hours() + ':' + this.seconds();
  }, this);
};

ko.applyBindings(ViewModel);