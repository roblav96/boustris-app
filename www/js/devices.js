var devices_fail = []
var init_dev_i = null



function prep_Model_Options() {

	for ( i = 0; i < devices.length; i++ ) {
		if ( arrContains( devices[ i ][ 0 ], typoptions[ 0 ] ) ) {
			typoptions[ 0 ].push( devices[ i ][ 0 ] )
		}
	}
	typoptions[ 0 ].sort()
	for ( i = 0; i < typoptions[ 0 ].length; i++ ) {
		$( '#typid' ).append( '<option>' + typoptions[ 0 ][ i ] + '</option>' )
	}



	for ( i = 0; i < devices.length; i++ ) {
		if ( arrContains( devices[ i ][ 1 ], vicoptions ) ) {
			vicoptions.push( devices[ i ][ 1 ] )
		}
	}
	vicoptions.sort()
	for ( i = 0; i < vicoptions.length; i++ ) {
		$( '#vicid' ).append( '<option>' + vicoptions[ i ] + '</option>' )
	}



	for ( i = 0; i < devices.length; i++ ) {
		if ( arrContains( devices[ i ][ 7 ], zone_options ) ) {
			zone_options.push( devices[ i ][ 7 ] )
		}
	}
	zone_options.sort( function ( a, b ) {
		return a - b;
	} )
	for ( i = 0; i < zone_options.length; i++ ) {
		$( '#zonid' ).append( '<option>' + zone_options[ i ] + '</option>' )
	}

}



$( document ).ready( function () {

	$( '#editmod' ).on( 'hidden.bs.modal', function ( e ) {
		$( '#delete_dev' ).show()
		$( "#devid_form" ).hide()
		$( '#btn_add_picture' ).hide()
		init_dev_i = null
	} )


	$( '#report_model' ).on( 'hidden.bs.modal', function ( e ) {
		$( '#form_txt' ).show()
		$( '#form_txtarea' ).show()
		$( "#text_model_clear_btn" ).show()
	} )

	$( "#failr" ).click( function () {

		$( "#btn_add_picture" ).show()
		navigator.notification.alert(
			'Take a picture!!!', // message
			alertDismissed
		);
		// submitEdit( "picture" )
	} );

	$( '.submit_device_on_enter' ).keydown( function ( event ) {
		if ( event.keyCode == 13 ) {
			submitEdit( false )
			return false
		}
	} )

} );





function initializeData( init ) {

	window.plugins.spinnerDialog.show( "Loading Devices Data...", "", true )

	$( "#devices_fails_tbody" ).empty()
	$( "#devicestbody" ).empty()
	$( "#devices_history_tbody" ).empty()
	$( "#device_pics" ).empty()
	devices_fail = []
	$( '#delete_dev' ).show()
	$( "#devid_form" ).hide()
	$( '#btn_add_picture' ).hide()
	init_dev_i = null


	for ( var i = 0; i < devices.length; i++ ) {

		// if ( init == true ) {
		// 	for ( var a = 0; a < 13; a++ ) {
		// 		if ( devices[ i ][ a ] === null ) {
		// 			devices[ i ][ a ] = ""
		// 		}
		// 	}
		// }

		var device_fails = false

		var row = $( "<tr class='edit'>" )
		row.attr( 'id', 'd' + i )
		row.append( '<td>' + i + '</td>' )
		row.append( '<td>' + devices[ i ][ 0 ] + '</td>' )
		row.append( '<td>' + devices[ i ][ 1 ] + '</td>' )
		row.append( '<td>' + devices[ i ][ 2 ] + '</td>' )

		var ala = $( '<td></td>' )
		if ( devices[ i ][ 3 ] == true ) {
			$( ala ).append( '<span class="glyphicon glyphicon-ok center-block"></span>' )
		}
		row.append( ala )

		var tro = $( '<td></td>' )
		if ( devices[ i ][ 4 ] == true ) {
			$( tro ).append( '<span class="glyphicon glyphicon-ok center-block"></span>' )
		}
		row.append( tro )

		var sup = $( '<td></td>' )
		if ( devices[ i ][ 5 ] == true ) {
			$( sup ).append( '<span class="glyphicon glyphicon-ok center-block"></span>' )
		}
		row.append( sup )

		row.append( '<td>' + devices[ i ][ 6 ] + '</td>' )
		row.append( '<td>' + devices[ i ][ 7 ] + '</td>' )

		if ( !devices[ i ][ 10 ] == true ) {
			if ( devices[ i ][ 8 ] == true ) {
				row.append( '<td class="success"><span class="glyphicon glyphicon-ok center-block"></span></td>' )
			} else if ( devices[ i ][ 8 ] == "no" ) {
				row.append( '<td class="info"><center>No Access</center></td>' )
				row.addClass( 'info' )
				device_fails = true
				devices_fail.push( row )
			} else {
				row.append( '<td class="danger"><span class="glyphicon glyphicon-remove center-block"></span></td>' )
				row.addClass( 'danger' )
				device_fails = true
				devices_fail.push( row )
			}
		}



		row.append( '<td>' + devices[ i ][ 9 ] + '</td>' )

		// if ( !devices[ i ][ 10 ] == true ) {
		// 	if ( device_fails ) {
		// 		$( "#devices_fails_tbody" ).append( row.clone().removeClass( "danger" ).removeClass( "info" ) )
		// 	}
		// 	$( "#devicestbody" ).append( row )
		// }
		if ( devices[ i ][ 10 ] === true ) {
			$( "#devices_history_tbody" ).append( row.removeClass( "danger" ) )
		} else {
			if ( device_fails ) {
				$( "#devices_fails_tbody" ).append( row.clone().removeClass( "danger" ) )
			}
			$( "#devicestbody" ).append( row )
		}








		if ( !devices[ i ][ 11 ] == "" && devices[ i ][ 8 ] == false && !devices[ i ][ 10 ] == true ) {
			var img = $( "<img class='img-thumbnail'>" )
				// img.src = "data:image/jpeg;base64," + devices[i][11]
			img.attr( 'src', "data:image/jpeg;base64," + devices[ i ][ 11 ] )

			var txt = $( "<p>" )
			txt.html( devices[ i ][ 0 ] + "<br>" + devices[ i ][ 1 ] + "<br>" + devices[ i ][ 2 ] + "<br>" + devices[ i ][ 9 ] )

			$( "#device_pics" ).append( img ).append( txt ).append( $( "<hr>" ) )
		}







	}







	if ( init == true ) {
		$( "#upload" ).addClass( 'hidden' )
		$( "#main" ).removeClass( 'hidden' )
		$( "nav" ).removeClass( 'hidden' )
	}

	$( ".edit" ).click( function () {
		if ( holdz == true ) {
			initEdit( this )
		}
	} )

	$( ".edit" ).bind( 'mouseheld', function ( e ) {
		initEdit( this, true )
	} )


	window.plugins.spinnerDialog.hide()


}

var holdz = true;










function initEdit( dis, copy ) {
	dev_i = $( dis ).attr( 'id' ).substr( 1 )
	var dev = devices[ dev_i ]

	// console.log(dev_i)

	if ( copy ) {
		$( '#devid' ).val( devices.length )
		holdz = false
		$( '#delete_dev' ).hide()
		window.setTimeout( function () {
			holdz = true
		}, 5000 );
	} else {
		$( '#devid' ).val( dev_i )
	}

	$( '#typid' ).val( dev[ 0 ] )

	$( '#vicid' ).val( dev[ 1 ] )

	$( '#locid' ).val( dev[ 2 ] )

	$( '#staal' ).prop( 'checked', dev[ 3 ] )
	$( '#statr' ).prop( 'checked', dev[ 4 ] )
	$( '#stasu' ).prop( 'checked', dev[ 5 ] )

	$( '#addid' ).val( dev[ 6 ] )

	$( '#zonid' ).val( dev[ 7 ] )

	if ( dev[ 8 ] == true ) {
		$( '#passr' ).prop( 'checked', true )
	} else if ( dev[ 8 ] == "no" ) {
		$( '#noacr' ).prop( 'checked', true )
	} else {
		$( '#failr' ).prop( 'checked', true )
		$( '#btn_add_picture' ).show()
	}

	$( '#notid' ).val( dev[ 9 ] )

	// add
	if ( dev[ 10 ] == true || dev[ 8 ] == true ) {
		$( '#btn_addhistory' ).hide()
	}

	if ( dev[ 10 ] == true ) {
		$( '#statusg' ).hide()
	}
	//

	$( '#editmod' ).modal( 'show' )
}






function addCustomVicinity() {
	var typ = $( '#viccusin' ).val().trim()
	$( '#vicid' ).append( '<option>' + typ + '</option>' )
	$( '#vicid' ).val( typ )
	$( '#viccusin' ).val( '' )
}
document.getElementById( 'viccusbtn' ).addEventListener( 'click', addCustomVicinity, false );





function addCustomZone() {
	var typ = $( '#zoncusin' ).val().trim()
	$( '#zonid' ).append( '<option>' + typ + '</option>' )
	$( '#zonid' ).val( typ )
	$( '#zoncusin' ).val( '' )
}
document.getElementById( 'zoncusbtn' ).addEventListener( 'click', addCustomZone, false );







function add_Device() {

	$( '#devid' ).val( devices.length )

	$( '#typid' ).val( '' )

	$( '#vicid' ).val( '' )

	$( '#locid' ).val( '' )

	$( '#staal' ).prop( 'checked', false )
	$( '#statr' ).prop( 'checked', false )
	$( '#stasu' ).prop( 'checked', false )

	$( '#addid' ).val( '' )

	$( '#zonid' ).val( '' )

	$( '#passr' ).prop( 'checked', true )

	$( '#notid' ).val( '' )

	$( '#delete_dev' ).hide()
	$( '#btn_add_picture' ).hide()
	$( "#devid_form" ).show()

	init_dev_i = true

	$( '#editmod' ).modal( 'show' )
}
document.getElementById( 'add_btn' ).addEventListener( 'click', add_Device, false );












function submitEdit( add ) {

	var devid = parseInt( $( '#devid' ).val() )

	if ( devid > devices.length ) {
		navigator.notification.alert(
			'STOP! The device ID can not be higher than the amount of devices (' + devices.length + ')!', // message
			alertDismissed
		);
		return
	}

	if ( devices[ devid ] && init_dev_i ) {
		devices.splice( devid, 0, [] )
		console.log( "splice ONE" )
	}

	if ( !devices[ devid ] ) {
		devices[ devid ] = []
	}

	devices[ devid ][ 0 ] = $( '#typid' ).val()
	devices[ devid ][ 1 ] = $( '#vicid' ).val()
	devices[ devid ][ 2 ] = $( '#locid' ).val()
	devices[ devid ][ 3 ] = $( '#staal' ).prop( 'checked' )
	devices[ devid ][ 4 ] = $( '#statr' ).prop( 'checked' )
	devices[ devid ][ 5 ] = $( '#stasu' ).prop( 'checked' )

	devices[ devid ][ 6 ] = $( '#addid' ).val()
	devices[ devid ][ 7 ] = $( '#zonid' ).val()

	if ( $( '#failr' ).prop( 'checked' ) ) {
		devices[ devid ][ 8 ] = false
	} else if ( $( '#noacr' ).prop( 'checked' ) ) {
		devices[ devid ][ 8 ] = "no"
	} else {
		devices[ devid ][ 8 ] = true
	}

	devices[ devid ][ 9 ] = $( '#notid' ).val()

	if ( add === "picture" ) {
		navigator.camera.getPicture( onSuccess, onFail, {
			quality: 90,
			destinationType: Camera.DestinationType.DATA_URL,
			encodingType: Camera.EncodingType.JPEG,
			targetWidth: 1280,
			targetHeight: 720
		} );

		function onSuccess( imageData ) {
			devices[ devid ][ 11 ] = imageData
			initializeData()
		}

		function onFail( message ) {
				console.log( 'Failed because: ' + message )
			}
			// add
	} else if ( add === true ) {
		var n = devices.length
		devices[ n ] = []
		for ( var i = 0; i < 13; i++ ) {
			devices[ n ][ i ] = devices[ devid ][ i ]
		}

		var m_names = new Array( "January", "February", "March",
			"April", "May", "June", "July", "August", "September",
			"October", "November", "December" )
		var d = new Date()
		var curr_date = d.getDate()
		var curr_month = d.getMonth()
		var curr_year = d.getFullYear()
		var theDate = m_names[ curr_month ] + " " + curr_date + ", " + curr_year
		var res = $( ".date" ).html().substring( $( ".date" ).html().length - 4, $( ".date" ).html().length )

		devices[ n ][ 9 ] = "Device ID: " + devid + "\n" + report[ 4 ][ 8 ] + " " + res + ": " + devices[ n ][ 9 ] + "\nDate Repaired: " + theDate + "\nWork Order #: "
		devices[ n ][ 10 ] = true
		devices[ n ][ 11 ] = devices[ devid ][ 11 ] // keep picture in history

		devices[ devid ][ 8 ] = true // pass original device
		devices[ devid ][ 9 ] = "" // clear original device notes
		devices[ devid ][ 11 ] = "" // clear original device picture
			//
	} else {
		initializeData()
	}







	$( '#editmod' ).modal( 'hide' )
}
document.getElementById( 'submod' ).addEventListener( 'click', function () {
	submitEdit( false )
}, false );






function delete_Device() {
	var devid = parseInt( $( '#devid' ).val() )
	if ( devices[ devid ] ) {
		// console.log(devid + 'false')
		devices.splice( devid, 1 )
		$( '#editmod' ).modal( 'hide' )
		initializeData()
	}
}
document.getElementById( 'delete_dev' ).addEventListener( 'click', delete_Device, false );


// document.getElementById( 'btn_addhistory' ).addEventListener( 'click', function () {
// 	submitEdit( true )
// }, false );



// document.getElementById('btn_addhistory').addEventListener('click', function(){submitEdit(true)}, false);
document.getElementById( 'btn_add_picture' ).addEventListener( 'click', function () {
	submitEdit( "picture" )
}, false );



document.getElementById( 'add_all_model_btn' ).addEventListener( 'click', function () {
	$( "#add_all_model" ).modal( "show" )
}, false );







// add
document.getElementById( 'add_all_btn' ).addEventListener( 'click', function () {

	var temp_devices = []
	var n = 0
	var res = $( ".date" ).html().substring( $( ".date" ).html().length - 4, $( ".date" ).html().length )

	for ( var i = 0; i < devices.length; i++ ) {
		if ( devices[ i ][ 8 ] == false && !devices[ i ][ 10 ] == true ) {
			// console.log(devices[i])

			temp_devices[ n ] = []
			temp_devices[ n ][ 0 ] = devices[ i ][ 0 ]
			temp_devices[ n ][ 1 ] = devices[ i ][ 1 ]
			temp_devices[ n ][ 2 ] = devices[ i ][ 2 ]
			temp_devices[ n ][ 3 ] = devices[ i ][ 3 ]
			temp_devices[ n ][ 4 ] = devices[ i ][ 4 ]
			temp_devices[ n ][ 5 ] = devices[ i ][ 5 ]
			temp_devices[ n ][ 6 ] = devices[ i ][ 6 ]
			temp_devices[ n ][ 7 ] = devices[ i ][ 7 ]
			temp_devices[ n ][ 8 ] = devices[ i ][ 8 ]
			temp_devices[ n ][ 9 ] = "Device ID: " + i + "\n" + report[ 4 ][ 8 ] + " " + res + ": " + devices[ i ][ 9 ] + "\nDate Repaired: " + $( '#addall_date' ).val() + "\nWork Order #: " + $( '#addall_WO' ).val()
			temp_devices[ n ][ 10 ] = true
			temp_devices[ n ][ 11 ] = devices[ i ][ 11 ]

			n = n + 1

			devices[ i ][ 8 ] = true
			devices[ i ][ 9 ] = ""
			devices[ i ][ 11 ] = ""
		}
	}

	for ( var i = 0; i < temp_devices.length; i++ ) {
		devices.push( temp_devices[ i ] )
	}

	initializeData()

}, false );
//








( function ( $ ) {
	function startTrigger( e, data ) {
		var $elem = $( this );
		$elem.data( 'mouseheld_timeout', setTimeout( function () {
			$elem.trigger( 'mouseheld' );
		}, e.data ) );
	}

	function stopTrigger() {
		var $elem = $( this );
		clearTimeout( $elem.data( 'mouseheld_timeout' ) );
	}
	var mouseheld = $.event.special.mouseheld = {
		setup: function ( data ) {
			var $this = $( this );
			$this.bind( 'mousedown', +data || mouseheld.time, startTrigger );
			$this.bind( 'mouseleave mouseup', stopTrigger );
		},
		teardown: function () {
			var $this = $( this );
			$this.unbind( 'mousedown', startTrigger );
			$this.unbind( 'mouseleave mouseup', stopTrigger );
		},
		time: 500 // default to 750ms
	};
} )( jQuery );
