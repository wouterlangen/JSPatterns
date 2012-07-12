app.core.define('#firstMod', function ( facade ) {

	return {

		init : function () {
			console.log(facade);
		}

	}

});

app.core.start('#firstMod');