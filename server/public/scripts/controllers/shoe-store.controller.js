app.controller('ShoeStoreController', ['ShoeStoreService', '$http', function (ShoeStoreService, $http) {
    console.log('ShoeStoreController has been loaded');
    var self = this;
    self.message = 'check it';
    self.getShoeStoreInventory = ShoeStoreService.getShoeStoreInventory;
    self.getShoeStoreInventory();
    self.shoeStoreInventory = ShoeStoreService.shoeStoreInventory;
    self.deleteShoe = ShoeStoreService.deleteShoe;
    // self.shoeStoreInventory = ShoeStoreService.shoeStoreInventory;

}]);