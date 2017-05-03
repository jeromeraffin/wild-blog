let algo1 = {
    template: '<ul><li ng-repeat="friend in $ctrl.getMyFriends">{{friend}} </li></ul>',
    controller: [ function() {
        'use strict'

        // list of friends
        this.friends =  ["Ryan", "Kieran", "Mark"];

        // method to get friends with 4 characters only
        this.getMyFriends =
          this.friends.filter(friend => friend.length === 4);
    }]
}

export default algo1
