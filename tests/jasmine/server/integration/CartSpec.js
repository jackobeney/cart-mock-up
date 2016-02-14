describe('Collection: CartList', function () {

  it('should have no items available in the collection', function () {
    expect(CartList.find().count()).toBe(0);
  });

});