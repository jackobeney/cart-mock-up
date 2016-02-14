Meteor.publish('cartServer', function() {
  return CartList.find()
});

Meteor.methods({
  'deleteItemFromCart' : function(itemId) {
    CartList.remove({_id: itemId});
  },
  'changeQuantity' : function(itemId, newQuantity) {
    newQuantity = parseInt(newQuantity);
    if(newQuantity == 0) {
      Meteor.call('deleteItemFromCart', itemId);
    }
    CartList.update({_id: itemId}, {$set: {quantity: newQuantity} })
  }
});
