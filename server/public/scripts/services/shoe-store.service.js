app.service('ShoeStoreService', ['$http', function ($http) {
    console.log('ShoeStoreService is loaded');
    var self = this;



    self.shoeStoreInventory = {
        inventory: []
    };

    self.getShoeStoreInventory = function () {
        console.log('init getShoeStoreInventory function');
        console.log(self.shoeStoreInventory.inventory);
            $http({
                method: 'GET',
                url: '/shoe-store'
            })
                .then(function (response) {
                    console.log(response);
                    self.shoeStoreInventory.inventory = response.data;
                    console.log(self.shoeStoreInventory.inventory)
                })
                .catch(function (error) {
                    console.log('error on /shoes GET', error);
                });
    }

    self.deleteShoe = function (shoe) {
        console.log('init deleteShoe function');
        console.log(shoe);
        $http({
            method: 'DELETE',
            url: '/shoe-store',
            params: shoe
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log('error on /shoes DELETE', error);
            })
    self.getShoeStoreInventory();
    }

    self.updateShoe = function (shoe) {
        console.log('init udateShoe function with', shoe.name, shoe.cost);
        $http({
            method: 'PUT',
            url: '/shoe-store',
            data: shoe
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log('error on /shoes DELETE', error);
            })
    self.getShoeStoreInventory();
    }
}]);