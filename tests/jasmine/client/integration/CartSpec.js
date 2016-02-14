// describe("Cart", function() {
//   beforeEach(function () {
//     ModelList.insert({
//       _id: "testModel1",
//       name: "testModel1.stl",
//       dimensions: "2 x 2 x 2",
//       unit: "cm",
//       image: "cube.png"
//     });
//   });

//   it("should display all added models in cart", function(done) {
//     Meteor.call('addItemToCart', "testModel1");
//     var itemCount = $('.item').length;
//     expect(itemCount).toBe(1);
//   });

//   it("should update the quantity of the model in cart", function() {
//     var newQuantity = 10;
//     CartList.update({_id: "model1"}, {$set: {quantity: 10} });
//     var quantityDisplayed = parseInt($('.quantity-input')[0].value);
//     expect(quantityDisplayed).toBe(newQuantity);
//   });
// });
