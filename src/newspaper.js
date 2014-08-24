function NewsPaper(pageCount) {
  this.pageCount = pageCount;
}

NewsPaper.prototype.addPages = function (pages) {
  this.pageCount += pages;
};

var newsPaper = new NewsPaper(32);
newsPaper.addPages(10);

console.log(newsPaper.pageCount);