app.controller('SockStoreController', ['SockStoreService', '$http', function (SockStoreService, $http) {
    console.log('SockStoreController has been loaded');
    var self = this;
    self.message = 'check it';
    // self.getShoeStoreInventory = ShoeStoreService.getShoeStoreInventory;
    // self.getShoeStoreInventory();
    // self.shoeStoreInventory = ShoeStoreService.shoeStoreInventory;
    // self.deleteShoe = ShoeStoreService.deleteShoe;
    // self.updateShoe = ShoeStoreService.updateShoe;
}]);