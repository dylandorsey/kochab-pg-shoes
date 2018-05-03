app.controller('ShoeStoreController', ['ShoeStoreService', '$http', function(ShoeStoreService, $http) {
    console.log('ShoeStoreController has been loaded');
    var self = this;
    self.message = 'I am the shoe store page';
}]);