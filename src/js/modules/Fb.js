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
    var isInitReady = false;
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

        FB.getLoginStatus(function(response){
            isInitReady = true;
            console.log('FB.init ready and status - '+response.status);
        });
    };//end of init

    var getPersonalInfo = function(){
        
    };

    var getVal = function(param, f){
        if(typeof f != 'function'){
            console.log('error');
            return false;
        }
        if (!isInitReady) {
            init();
        };
        var intrvl = setInterval(function(){
            if (isInitReady) {
                clearInterval(intrvl);
                if (isLogin) {
                    FB.api(param, f);
                };
            };
        }, 500);
    };

    var getAlbums = function(f){
        if(typeof f != 'function'){
            console.log('error');
            return false;
        }
        if (!isInitReady) {
            init();
        };
        var intrvl = setInterval(function(){
            if (isInitReady) {
                clearInterval(intrvl);
                if (isLogin) {
                    FB.api('/me/albums', f);
                };
            };
        }, 500);
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
        init:               init,
        getPersonalInfo:    getPersonalInfo,
        getVal:             getVal,
        getAlbums:          getAlbums
    };
});