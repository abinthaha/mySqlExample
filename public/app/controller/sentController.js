GmailApp.controller('sentController', [
    '$scope',
    'inboxData',
    function($scope, inboxData){
        $scope.sentItems = inboxData.sent_items;
        console.log($scope.sentItems);

        $scope.toggleStar = function(index){
            console.log(index);
            inboxData.sent_items[index].starred = inboxData.sent_items[index].starred === true ? false : true ;
        };
    }
]);
