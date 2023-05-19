// Event module can be used for create-, fire-, and listen for- your own events usually pared with http
const EventEmitter = require('events');

// making ne class that shares gains eveything the EventEmitter class had. in this "FriendRequest is a parent class and "EventEmitter" is a super class.
class FriendRequest extends EventEmitter{
    constructor(){
        super();
    }
}

const emitter = new FriendRequest();

/// we can use .listener or .on
emitter.on('Friends request',() => {
    console.log('New Friends request')
});

// we can have multiple listeners for 1 event
emitter.on('Friends request', () =>{
    console.log('Friends request pending')
});

/// raise a event
emitter.emit('Friends request');

