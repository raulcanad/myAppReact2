var UserProfile = (function () {
   

    var getUser = function () {
       var user= JSON.parse(localStorage.getItem("user"))
        return user;    // Or pull this from cookie/localStorage
    };

    var setUser = function (user) {
       localStorage.setItem("user",JSON.stringify(user))
        // Also set this in cookie/localStorage
    };

    return {
        getUser: getUser,
        setUser: setUser
    }

})();

export default UserProfile;