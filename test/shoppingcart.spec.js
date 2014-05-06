describe("test angular js", function(){
    var $scope;
    beforeEach(module("shoppingcartApp"));

    beforeEach(inject(function($rootScope, $controller){
        $scope = $rootScope.$new;
        $controller("shoppingcartCtrl",{
            "$scope" : $scope
        });
    }));

    it("test the value is true", function(){
       expect($scope.test).toBe(true);
    });

});