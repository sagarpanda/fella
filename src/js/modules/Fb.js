/*define(['facebook'], function (FB) {
    //'use strict';

    return function (settings, callback) {
        var args = {
            appId: '434452293273108'
        };

        console.log('Calling FB.init:', args);
        FB.init(args);

        if (callback && typeof (callback) === "function") {
            // callback() // does not work, FB.init() is not yet finished
            FB.getLoginStatus(callback);
        }            
    };

});*/
define(['facebook'], function(){

    var isLogin = false;
    var init = function(){

        FB.Event.subscribe('auth.authResponseChange', function(response) {
        
            if (response.status === 'connected') {
                console.log('the person is logged into Facebook');
                isLogin = true;
            } else if (response.status === 'not_authorized') {
                console.log('logged into facebook but into the app.');
                FB.login();
                isLogin = false;
            } else {
                console.log('the person is not logged into Facebook');
                FB.login();
                isLogin = false;
            }
        });

        FB.init({
            appId   : '434452293273108',
            status  : true,
            cookie  : true,
            xfbml   : true
        });
    };//end of init

    var getPersonalInfo = function(){
        
    };


    /*var isLogin = function(){
        var res = null;
        FB.getLoginStatus(function(response) {
            //console.log(response);
            res = response;
        });
        return res;
    };*/

    return {
        init: init,
        getPersonalInfo: getPersonalInfo
    };
});