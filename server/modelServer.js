Meteor.publish('modelServer', function() {
  return ModelList.find()
});

//Populate the test objects list on startup
Meteor.startup(function () {
  if (ModelList.find({}).count() === 0) {
    ModelList.insert(
      {
        name: "cube.stl",
        dimensions: "2 x 2 x 2",
        unit: "cm",
        image: "cube.png"
      }
    );

    ModelList.insert(
      {
        name: "sphere.stl",
        dimensions: "3 x 3 x 3",
        unit: "cm",
        image: "sphere.png"
      }
    );

    ModelList.insert(
      {
        name: "cone.stl",
        dimensions: "2 x 2 x 2",
        unit: "cm",
        image: "cone.png"
      }
    );

    ModelList.insert(
      {
        name: "cylinder.stl",
        dimensions: "2 x 4 x 2",
        unit: "cm",
        image: "cylinder.png"
      }
    );

    ModelList.insert(
      {
        name: "marvin.stl",
        dimensions: "2.4 x 2.5 x 1.9",
        unit: "cm",
        image: "marvin.png"
      }
    );

    ModelList.insert(
      {
        name: "monkey.stl",
        dimensions: "2 x 4 x 2",
        unit: "cm",
        image: "monkey.png"
      }
    );
  }
});

Meteor.methods({
  'addItemToCart' : function(modelId) {
    var model = ModelList.findOne({_id: modelId});
    if(Meteor.call('modelInCart', model.name)) {
      CartList.update({name: model.name}, {$inc: {quantity: 1} })
    } else {
      CartList.insert({
        name: model.name,
        dimensions: model.dimensions,
        unit: model.unit,
        image: model.image,
        quantity: 1
      });
    }
  },
  'modelInCart' : function(modelName) {
    if(!!CartList.findOne({name: modelName})) {
      return true;
    }
    return false;
  }
});
