// try {
//     console.logg('This should not happen!');
// } catch (error) {
//     console.log('There was an error: ' + error);
// }

// console.log('Do we see this message?');

// try {
//     throw 'I throw this error';
// } catch (error) {
//     console.log('There was an error ' + error);
// }

try {
    throw new Error('I throw this error');
} catch (error) {
    console.log('There was an error ' + error);
}