GmailApp.controller('draftController', [
    '$scope',
    'inboxData',
    function($scope, inboxData){
        $scope.draftItems = inboxData.drafts;
        console.log($scope.draftItems);

        $scope.toggleStar = function(index){
            console.log(index);
            inboxData.drafts[index].starred = inboxData.drafts[index].starred === true ? false : true ;
        };
    }
]);
