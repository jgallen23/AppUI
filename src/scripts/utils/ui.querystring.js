ui.utils.parseQueryString = function (queryString){

    // define an object to contain the parsed query data
    var result = {};

    // if a query string wasn't specified, use the query string from the URI
    if (queryString == undefined){
        queryString = location.search ? location.search : '';
    }

    // remove the leading question mark from the query string if it is present
    if (queryString.charAt(0) == '?') queryString = queryString.substring(1);

    // replace plus signs in the query string with spaces
    queryString = queryString.replace(/\+/g, ' ');

    // split the query string around ampersands and semicolons
    var queryComponents = queryString.split(/[&;]/g);

    // loop over the query string components
    for (var i = 0; i < queryComponents.length; i++){

        // extract this component's key-value pair
        var keyValuePair = queryComponents[i].split('=');
        var key = decodeURIComponent(keyValuePair[0]);
        var value = decodeURIComponent(keyValuePair[1]);

        // update the parsed query data with this component's key-value pair
        if (!result[key]) result[key] = [];
        result[key].push((keyValuePair.length == 1) ? '' : value);

    }

    // return the parsed query data
    return result;

}
