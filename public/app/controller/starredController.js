GmailApp.controller('starredController', [
    '$scope',
    'inboxData',
    function($scope, inboxData){

        // var starred = this;
        $scope.starredItems = [];
        inboxItems = inboxData.Received;
        for (var i = 0; i < inboxData.Received.length; i++) {
            if(inboxData.Received[i].starred === true)
            {
                $scope.starredItems.push(inboxData.Received[i]);
            }
        }
        console.log($scope.starredItems);

        $scope.toggleStar = function(index){
            $scope.starredItems[index].starred = $scope.starredItems[index].starred === true ? false : true ;
        };
    }
]);
