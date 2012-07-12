(function ( app ){

	app.core = (function ( $ ) {

		var data = {};

		return {

			define : function ( id, constructor ) {
				data[id] = { define: constructor, instance: null }
			},
			start : function( id ) {
				var module = data[id];
				module.instance = module.define( app.facade.define( this, id ) );
				module.instance.init();
			}
			events : {

				register : function ( e, module ){
					
				}

			}

		}

	})( jQuery );

})( app );