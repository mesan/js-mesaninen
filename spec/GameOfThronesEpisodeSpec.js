describe("GameOfThronesEpisode", function() {
  var ep1;
  var ep2;

  beforeEach(function () {
    ep1 = new GameOfThronesEpisode(1, 1, 'Winter Is Coming');
    ep2 = new GameOfThronesEpisode(2, 3, 'What Is Dead May Never Die');
  });

  it('prints season number, episode number and title', function () {
    var print = ep1.printEpisode();

    expect(print).toEqual('S1E1 - Winter Is Coming');
  });

  it('kills people if there is a cliff hanger', function () {
    ep1.containsCliffHanger(true);

    expect(ep1.peopleWillDie).toBeTruthy();
  });

  it('does not kill people if there is no cliff hanger', function () {
    ep1.containsCliffHanger(false);

    expect(ep1.peopleWillDie).not.toBeTruthy();
  });

  it('calculates remaining episodes in season', function () {
    var remainingEpisodes1 = ep1.calculateRemainingEpisodes();
    var remainingEpisodes2 = ep2.calculateRemainingEpisodes();

    expect(remainingEpisodes1).toBe(9);
    expect(remainingEpisodes2).toBe(7);
  });

  it('prints cast in episode', function () {
    ep1.addCastMember('Tyrion Lannister')
      .addCastMember('Jon Snow')
      .addCastMember('Arya Stark');

    var castString = ep1.printCast();
    expect(castString).toEqual('Tyrion Lannister, Jon Snow, Arya Stark');
  });

  it('kicks ass if Tyrion Lannister is in it', function () {
    ep1.addCastMember('Tyrion Lannister');

    expect(ep1.kicksAss).toBeTruthy();
  });

  it('is mediocre if Tyrion Lannister is not in it', function () {
    expect(ep1.kicksAss).not.toBeTruthy();
  });
});
