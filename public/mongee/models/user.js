/**
 * @tag models, home
 * Wraps backend user services.  Enables 
 * [Mongee.Models.User.static.findAll retrieving],
 * [Mongee.Models.User.static.update updating],
 * [Mongee.Models.User.static.destroy destroying], and
 * [Mongee.Models.User.static.create creating] users.
 */
$.Model.extend('Mongee.Models.User',
/* @Static */
{
	/**
 	 * Retrieves users data from your backend services.
 	 * @param {String} id a unique id representing a user
 	 * @param {String} mail the mailaddress
 	 * @param {String} pw the password
 	 * @param {Function} success a callback function that returns wrapped user objects.
 	 * @param {Function} error a callback function for an error in the ajax request.
 	 */
	find: function( params, success, error ){
		$.ajax({
			url: '/users/' + params.id,
			type: 'get',
			dataType: 'json',
			success: success,
			error: error/*,  
	    	beforeSend: function(xhr) {
	    		xhr.setRequestHeader('Authorization', 'Basic ' + $.base64Encode(id + ":" + pw)); 
	    	}*/
		});
	}, 
	
	/**
 	 * Retrieves users data from your backend services.
 	 * @param {Object} params params that might refine your results.
 	 * @param {Function} success a callback function that returns wrapped user objects.
 	 * @param {Function} error a callback function for an error in the ajax request.
 	 */
	findAll: function( params, success, error ){
		$.ajax({
			url: '/users/find/' + params.param,
			type: 'get',
			dataType: 'json',
			success: success,
			error: error,
			complete: function(xhr, statusText) { 
		        //alert('Status: ' + xhr.status + ' ___ param: ' + params.param + ' ___ url: ' + '/users/find/' + params.param); 
		    },  
	    	beforeSend: function(xhr) {
	    		xhr.setRequestHeader('Authorization', 'Basic ' + $.base64Encode(params.id + ":" + params.pw)); 
	    	}
		});
	},
	
	/**
 	 * Retrieves users data from your backend services.
 	 * @param {Object} params params that might refine your results.
 	 * @param {Function} success a callback function that returns wrapped user objects.
 	 * @param {Function} error a callback function for an error in the ajax request.
 	 */
	findMyFriends: function( params, success, error ){
		$.ajax({
			url: '/users/my/friends',
			type: 'get',
			dataType: 'json',
			success: success,
			error: error,
	    	beforeSend: function(xhr) {
	    		xhr.setRequestHeader('Authorization', 'Basic ' + $.base64Encode(params.id + ":" + params.pw)); 
	    	}
		});
	},
	/**
	 * Updates a user's data.
	 * @param {String} id A unique id representing your user.
	 * @param {Object} attrs Data to update your user with.
	 * @param {Function} success a callback function that indicates a successful update.
 	 * @param {Function} error a callback that should be called with an object of errors.
     */
	update: function( id, attrs, success, error ){
		$.ajax({
			url: '/users/'+id,
			type: 'put',
			dataType: 'json',
			data: attrs,
			success: success,
			error: error,
			//fixture: "-restUpdate" //uses $.fixture.restUpdate for response.
		});
	},
	/**
 	 * Destroys a user's data.
 	 * @param {String} id A unique id representing your user.
	 * @param {Function} success a callback function that indicates a successful destroy.
 	 * @param {Function} error a callback that should be called with an object of errors.
	 */
	destroy: function( id, success, error ){
		$.ajax({
			url: '/users/'+id,
			type: 'delete',
			dataType: 'json',
			success: success,
			error: error,
			//fixture: "-restDestroy" // uses $.fixture.restDestroy for response.
		});
	},
	/**
	 * Creates a user.
	 * @param {Object} attrs A user's attributes.
	 * @param {Function} success a callback function that indicates a successful create.  The data that comes back must have an ID property.
	 * @param {Function} error a callback that should be called with an object of errors.
	 */
	create: function( attrs, success, error ){
		$.ajax({
			url: '/users',
			type: 'post',
			dataType: 'json',
			success: success,
			error: error,
			data: attrs,
			//fixture: "-restCreate" //uses $.fixture.restCreate for response.
		});
	},
	/**
	 * Trys to login user.
	 * Returns a JSON object of the user, if the credentials were not ok a 401
	 * @param {Object} attrs A user's attributes.
	 * @param {Function} success a callback function that indicates a successful create.  The data that comes back must have an ID property.
	 * @param {Function} error a callback that should be called with an object of errors.
	 */
	login: function( params, success, error  ){ 
		$.ajax({
			url: '/users/sign_in',
			type: 'post',
			dataType: 'json',
			data: params, 
			success: success,
			error: error,   
			complete: function(xhr, statusText) { 
		        //alert('Status: ' + xhr.status); 
		    }
		});
	}
},
/* @Prototype */
{});