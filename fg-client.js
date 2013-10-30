var rsvpFirebase = new Firebase("https://friendsgiving.firebaseio.com/rsvp");
var ideaFirebase = new Firebase("https://friendsgiving.firebaseio.com/ideas");
var fgapp = angular.module('friendsgivingApp', ["firebase"]);

fgapp.controller('rsvpController', ['$scope', 'angularFire', 
        function rsvpController($scope, angularFire){
    $scope.rsvps = [];
    angularFire(rsvpFirebase, $scope, "rsvps");
    $scope.addRSVP = function() {
        $scope.rsvps.push({name: $scope.name, food: $scope.food});
        $scope.name = "";
        $scope.food = "";
    };
}]);

fgapp.controller('ideaController', ['$scope', 'angularFire', 
        function ideaController($scope, angularFire){
    $scope.ideas = [];
    angularFire(ideaFirebase, $scope, "ideas");
    $scope.addIdea = function() {
        $scope.ideas.push({idea: $scope.idea, called: false});
        $scope.idea = "";
    };
}]);
