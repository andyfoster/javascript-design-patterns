/* If we want to frequently poll a server
 * using setInterval will make another Ajax etc call,
 * even if the current one hasn't returned yet.
 * This method lets us finish a request before making another one
*/

// Asyncronous Execution Pattern
// Browsers are isngle threaded so they can't do two things simultaneously
// Long-running JS can block UI elements
// We can release the thread periodically and ensure there is enough of a gap between each timeout to allow UI thread to get some control again
var poll = function () {
    
}