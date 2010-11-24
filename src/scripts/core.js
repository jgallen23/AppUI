
var extendObj = function(target, obj1, obj2) {
	for (var item in obj1) {
		target[item] = obj1[item];
	}
	return (obj2)?extendObj(target, obj2):target;
}

var extendObjStrict = function(target, obj1, obj2) {
	for (var item in obj1) {
		if (target[item] !== undefined)
			target[item] = obj1[item];
	}
	return (obj2)?extendObj(target, obj2):target;
}

String.format = function( text )
{
    //check if there are two arguments in the arguments list
    if ( arguments.length <= 1 )
    {
        //if there are not 2 or more arguments there's nothing to replace
        //just return the original text
        return text;
    }
    //decrement to move to the second argument in the array
    var tokenCount = arguments.length - 2;
    for( var token = 0; token <= tokenCount; token++ )
    {
        //iterate through the tokens and replace their placeholders from the original text in order
        text = text.replace( new RegExp( "\\{" + token + "\\}", "gi" ),
                                                arguments[ token + 1 ] );
    }
    return text;
};
var parseQueryString = function (queryString){

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
