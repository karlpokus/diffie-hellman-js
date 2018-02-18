const genPrime = require('./generatePrime');

// parties
const alice = {};
const bob = {};

// agreement
const p = genPrime(10000);
const g = genPrime(5000);

// helpers
const pubKey = private => Math.pow(g, private) % p;
const sharedKey = (peerPublic, myPrivate) => Math.pow(peerPublic, myPrivate) % p;

// private and public key
alice.private = 4;
alice.public = pubKey(alice.private);

bob.private = 3;
bob.public = pubKey(bob.private);

// shared key
alice.sharedKey = sharedKey(bob.public, alice.private);
bob.sharedKey = sharedKey(alice.public, bob.private);

console.log(alice.sharedKey, bob.sharedKey);
