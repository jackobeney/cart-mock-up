Meteor.subscribe('modelServer');

Template.modelList.helpers({
  'testModels' : function() {
    return ModelList.find()
  }
});

Template.upload.helpers({
  'testModels' : function() {
    return ModelList.find()
  },
  'modelToUploadId' : function() {
    if(Session.get("modelToUpload")) {
      return Session.get("modelToUpload")._id
    }
  },
  'modelToUploadName' : function() {
    if(Session.get("modelToUpload")) {
      return Session.get("modelToUpload").name;
    }
  }
});

Template.modelList.events({
  'click .add-model' : function(evt) {
    var modelId = evt.target.id;
    Meteor.call('addItemToCart', modelId);
  }
});

Template.upload.events({
  'click .model-to-upload' : function() {
    Session.set('modelToUpload', this);
  },
  'click .add-model' : function(evt) {
    var modelId = evt.target.id;
    Meteor.call('addItemToCart', modelId);
  }
});
