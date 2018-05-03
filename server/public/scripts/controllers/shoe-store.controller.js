app.controller('ShoeStoreController', ['ShoeStoreService', '$http', function (ShoeStoreService, $http) {
    console.log('ShoeStoreController has been loaded');
    var self = this;
    self.message = 'check it';
    self.getShoeStoreInventory = ShoeStoreService.getShoeStoreInventory;
    self.shoeStoreInventory = ShoeStoreService.testShoeStoreInventory;
    self.test = function () {
        console.log(self.shoeStoreInventory.inventory);
    }
    // self.shoeStoreInventory = ShoeStoreService.shoeStoreInventory;

}]);