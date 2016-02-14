describe('Collection: ModelList', function () {

  it('should have some models available in the collection', function () {
    expect(ModelList.find().count()).toBeGreaterThan(0);
  });

});