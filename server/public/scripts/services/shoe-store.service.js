app.service('ShoeStoreService', ['$http', function ($http) {
    console.log('ShoeStoreService is loaded');
    var self = this;



    self.testShoeStoreInventory = {
        inventory: []
    };

    self.getShoeStoreInventory = function () {
        console.log('init getShoeStoreInventory function');
        console.log(self.testShoeStoreInventory.inventory);
            $http({
                method: 'GET',
                url: '/shoe-store'
            })
                .then(function (response) {
                    console.log(response);
                    self.testShoeStoreInventory.inventory = response.data;
                    console.log(self.testShoeStoreInventory.inventory)
                })
                .catch(function (error) {
                    console.log('error on /shoes GET', error);
                });
    }

}]);