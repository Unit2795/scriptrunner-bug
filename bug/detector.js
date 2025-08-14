const {getUserAgent} = require('package-manager-detector/detect');

( async () => {
    console.log("Current package manager is: ", await getUserAgent());
} )();
