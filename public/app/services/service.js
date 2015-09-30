
//Defining the Service
GmailApp.service('MailSrv', function($http, $q){
    var service = {};

    service.fetchInbox = function () {
        var url = 'assets/json/allData.json';
        var deferred = $q.defer();
        $http.get(url)
            .success(function(data) {
               deferred.resolve(data);
            })
            .error(function(){
               deferred.reject();
            });
        return deferred.promise;
    };
    return service;
});

GmailApp.service('BaseSrv', function(){
    var fetchService = {};
    fetchService.fetchData = function(url) {

    };
});
