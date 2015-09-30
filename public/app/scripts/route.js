
//Defining the routes
GmailApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/inbox');

    $stateProvider
    .state('inbox', {
        url: "/inbox",
        templateUrl: "app/views/inbox.html",
        controller : "inboxController",
        resolve : {
            inboxData : function(MailSrv){
                return MailSrv.fetchInbox();
            }
        }
    })
    .state('starred', {
        url: "/starred",
        templateUrl: "app/views/starred.html",
        controller : "starredController",
        resolve : {
                inboxData : function(MailSrv){
                    return MailSrv.fetchInbox();
                }
            }
    })
    .state('important', {
        url: "/important",
        templateUrl: "app/views/important.html",
        controller : "importantController",
        resolve : {
                inboxData : function(MailSrv){
                    return MailSrv.fetchInbox();
                }
            }
    })
    .state('sent_mail', {
        url: "/sent_mail",
        templateUrl: "app/views/sent.html",
        controller : "sentController",
        resolve : {
                inboxData : function(MailSrv){
                    return MailSrv.fetchInbox();
                }
            }
    })
    .state('drafts', {
        url: "/drafts",
        templateUrl: "app/views/draft.html",
        controller : "draftController",
        resolve : {
                inboxData : function(MailSrv){
                    return MailSrv.fetchInbox();
                }
            }
    });
});
