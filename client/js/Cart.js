Meteor.subscribe('cartServer');

Template.cart.helpers({
  'itemsInCart' : function() {
    return CartList.find()
  }
})

Template.confirmDelete.helpers({
  'item' : function() {
    return Session.get("item");
  }
})

Template.cart.events({
  'click #item-to-delete' : function() {
    Session.set('item', this);
  },
  'blur .quantity-input' : function(evt) {
    var itemId = $(evt.currentTarget).data("id");
    var newQuantity = evt.currentTarget.value;
    Meteor.call('changeQuantity', itemId, newQuantity)
  }
})

Template.confirmDelete.events({
  'click .delete' : function() {
    var itemId = Session.get("item")._id;
    Meteor.call('deleteItemFromCart', itemId)
  }
})
