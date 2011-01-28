if (typeof ui === "undefined")
    ui = { utils: {} };

ui.extend = function(target, obj1, obj2) {
	for (var item in obj1) {
		target[item] = obj1[item];
	}
	return (obj2)?ui.extend(target, obj2):target;
};

ui.extendStrict = function(target, obj1, obj2) {
	for (var item in obj1) {
		if (target[item] !== undefined)
			target[item] = obj1[item];
	}
	return (obj2)?ui.extend(target, obj2):target;
};

ui.stringFormat = function( text )
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

ui.find = function(selector, f) {
    var nodes = document.querySelectorAll(selector);
	if (f) {
		for (var i = 0, c = nodes.length; i < c; i++) {
			f(nodes[i]);	
		}
	}
};
