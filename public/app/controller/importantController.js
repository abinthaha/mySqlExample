GmailApp.controller('importantController', [
    '$scope',
    'inboxData',
    function($scope, inboxData){

        // var starred = this;
        $scope.importantItems = [];
        inboxItems = inboxData.Received;
        for (var i = 0; i < inboxData.Received.length; i++) {
            if(inboxData.Received[i].important === true)
            {
                $scope.importantItems.push(inboxData.Received[i]);
            }
        }
        console.log($scope.importantItems);
    }
]);
