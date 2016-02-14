### A mock-up of a shopping cart for 3D Hubs, written in Meteor.js

## First time setup

### install Meteor
https://www.meteor.com/install

## Running the app

From the command line, simply run:
```
meteor
```
then navigate to localhost:3000

Additonally you can also view the app here: http://jackobeneycartmockup.meteor.com/

## Details of Implementation

* There are two collections in the mongo database, one for the test models and one for the models currently in the users cart.
* Test models can all be added to the users cart as many time as they like by using the add buttons or using the mock file upload button which is just emulating the file upload.
* In the cart users can update the quantity of the model using the input field. This updates the quantity attribute for that item in the CartList collection.
* Clicking the remove button should open a confirmation modal asking if the user is sure they want to remove the item from their cart. Clicking yes will remove the entry for that item from the CartList collection.
* I used the full 8 hours of allowed time and ran out while I was writting tests.
