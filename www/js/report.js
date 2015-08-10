var report_obj = null;



function initializeReport() {

	window.plugins.spinnerDialog.show("Loading Report Data...", "", true)

	$( '.date' ).data( {
		text_data: [ 11, 4 ]
	} )
	$( '.quarter' ).data( {
		text_data: [ 4, 8 ]
	} )
	$( '.property' ).data( {
		text_data: [ 12, 1 ]
	} )
	$( '.street' ).data( {
		text_data: [ 13, 1 ]
	} )
	$( '.city' ).data( {
		text_data: [ 14, 1 ]
	} )
	$( '.state' ).data( {
		text_data: [ 15, 1 ]
	} )
	$( '.zip' ).data( {
		text_data: [ 16, 1 ]
	} )
	$( '.inspector' ).data( {
		text_data: [ 16, 3 ]
	} )
	$( '.license' ).data( {
		text_data: [ 16, 6 ]
	} )
	$( '.customer' ).data( {
		text_data: [ 11, 1 ]
	} )
	$( '.authority' ).data( {
		text_data: [ 19, 5 ]
	} )
	$( '.manufacture' ).data( {
		text_data: [ 22, 0 ]
	} )
	$( '.model_no' ).data( {
		text_data: [ 22, 2 ]
	} )
	$( '.detection_circuits' ).data( {
		text_data: [ 22, 3 ]
	} )
	$( '.indication_circuits' ).data( {
		text_data: [ 22, 6 ]
	} )
	$( '.central_station_acct' ).data( {
		text_data: [ 32, 5 ]
	} )
	$( '.master_box_acct' ).data( {
		text_data: [ 32, 3 ]
	} )
	$( '.other_means' ).data( {
		text_data: [ 32, 7 ]
	} )
	$( '.cp_cb_location' ).data( {
		text_data: [ 34, 1 ]
	} )
	$( '.model_qty' ).data( {
		text_data: [ 34, 6 ]
	} )
	$( '.volt_wload' ).data( {
		text_data: [ 34, 7 ]
	} )
	$( '.volt_wac' ).data( {
		text_data: [ 34, 8 ]
	} )
	$( '.door_qty' ).data( {
		text_data: [ 36, 3 ]
	} )
	$( '.door_voltage' ).data( {
		text_data: [ 37, 3 ]
	} )
	$( '.smoke_exhaust_qty' ).data( {
		text_data: [ 41, 2 ]
	} )
	$( '.smoke_hatch_qty' ).data( {
		text_data: [ 39, 3 ]
	} )
	$( '.cb_location' ).data( {
		text_data: [ 45, 1 ]
	} )
	$( '.cb_model_qty' ).data( {
		text_data: [ 45, 6 ]
	} )
	$( '.cb_model_volt_load' ).data( {
		text_data: [ 45, 7 ]
	} )
	$( '.cb_model_volt_ac' ).data( {
		text_data: [ 45, 8 ]
	} )
	$( '.cb_sync_qty' ).data( {
		text_data: [ 46, 8 ]
	} )
	$( '.cb_location_s' ).data( {
		text_data: [ 48, 0 ]
	} )
	$( '.voice_qty' ).data( {
		text_data: [ 59, 0 ]
	} )
	$( '.voice_amp_watt' ).data( {
		text_data: [ 59, 2 ]
	} )
	$( '.voice_phones_qty' ).data( {
		text_data: [ 59, 5 ]
	} )

	// $('.voice_loc').data( { text_data: [ 59, 6] + report[59, 7] + report[59, 8 ] } )
	$( '.voice_loc' ).data( {
		text_data: [ 59, 6 ]
	} )

	// $('.voice_model').data( { text_data: [ 61, 1] + report[61, 2 ] } )
	$( '.voice_model' ).data( {
		text_data: [ 61, 1 ]
	} )

	$( '.voice_power_qty' ).data( {
		text_data: [ 61, 5 ]
	} )
	$( '.voice_volt_load' ).data( {
		text_data: [ 61, 7 ]
	} )
	$( '.voice_volt_ac' ).data( {
		text_data: [ 61, 8 ]
	} )
	$( '.proper_annunc_loc' ).data( {
		text_data: [ 24, 8 ]
	} )
	$( '.ext_beacon_loc' ).data( {
		text_data: [ 1, 1 ]
	} )
	$( '.comm_manuf' ).data( {
		text_data: [ 2, 0 ]
	} )
	$( '.comm_model' ).data( {
		text_data: [ 2, 1 ]
	} )
	$( '.comm_tele_p' ).data( {
		text_data: [ 2, 2 ]
	} )
	$( '.comm_tele_s' ).data( {
		text_data: [ 2, 3 ]
	} )
	$( '.volt_amp_hr' ).data( {
		text_data: [ 2, 4 ]
	} )
	$( '.volt_batt_date' ).data( {
		text_data: [ 2, 5 ]
	} )
	$( '.smoke_pres_qty' ).data( {
		text_data: [ 4, 3 ]
	} )
	$( '.smoke_pres_loc' ).data( {
		text_data: [ 4, 4 ]
	} )
	$( '.cb_model_amp_hr' ).data( {
		text_data: [ 4, 5 ]
	} )
	$( '.voice_amp_hr' ).data( {
		text_data: [ 5, 3 ]
	} )
	$( '.voice_phones_locs' ).data( {
		text_data: [ 5, 4 ]
	} )



	$( '.summary_notes' ).data( {
			text_data: [ 73, 0, true ]
		} )
		// $('.summary_notes2').data( { text_data: [ 74, 0 ] } )





	$( ".inspection_type_other" ).data( {
		check_data: [ 11, 6 ]
	} )
	$( ".inspection_type_elevator" ).data( {
		check_data: [ 11, 5 ]
	} )
	$( ".inspection_type_semiannual" ).data( {
		check_data: [ 11, 8 ]
	} )
	$( ".inspection_type_quarter" ).data( {
		check_data: [ 12, 6 ]
	} )
	$( ".inspection_type_annual" ).data( {
		check_data: [ 12, 8 ]
	} )
	$( ".system_type_fire" ).data( {
		check_data: [ 14, 3 ]
	} )
	$( ".system_type_evac" ).data( {
		check_data: [ 14, 5 ]
	} )
	$( ".system_type_line" ).data( {
		check_data: [ 14, 7 ]
	} )
	$( ".circuit_address" ).data( {
		check_data: [ 18, 4 ]
	} )
	$( ".circuit_conventional" ).data( {
		check_data: [ 19, 4 ]
	} )
	$( ".all_sound" ).data( {
		check_data: [ 27, 1 ]
	} )
	$( ".coded" ).data( {
		check_data: [ 27, 3 ]
	} )
	$( ".selective" ).data( {
		check_data: [ 28, 1 ]
	} )
	$( ".march_time" ).data( {
		check_data: [ 28, 3 ]
	} )
	$( ".horn_strobe" ).data( {
		check_data: [ 29, 1 ]
	} )
	$( ".bells" ).data( {
		check_data: [ 29, 3 ]
	} )
	$( ".horn" ).data( {
		check_data: [ 30, 1 ]
	} )
	$( ".speakers" ).data( {
		check_data: [ 30, 3 ]
	} )
	$( ".ext_beacon" ).data( {
		check_data: [ 1, 0 ]
	} )
	$( ".com_typ_cell" ).data( {
		check_data: [ 1, 2 ]
	} )
	$( ".com_typ_tele" ).data( {
		check_data: [ 1, 3 ]
	} )
	$( ".com_typ_built" ).data( {
		check_data: [ 1, 4 ]
	} )
	$( ".elevator_primary" ).data( {
		check_data: [ 38, 8 ]
	} )
	$( ".elevator_secondary" ).data( {
		check_data: [ 39, 8 ]
	} )
	$( ".annunciator_panel_led" ).data( {
		check_data: [ 40, 5 ]
	} )
	$( ".annunciator_panel_graphic" ).data( {
		check_data: [ 40, 7 ]
	} )
	$( ".annunciator_panel_lcd" ).data( {
		check_data: [ 41, 5 ]
	} )
	$( ".annunciator_panel_other" ).data( {
		check_data: [ 41, 7 ]
	} )
	$( ".fire_pump_alarm" ).data( {
		check_data: [ 50, 3 ]
	} )
	$( ".fire_pump_trouble" ).data( {
		check_data: [ 51, 3 ]
	} )
	$( ".fire_pump_running_alarm" ).data( {
		check_data: [ 52, 3 ]
	} )
	$( ".fire_pump_running_trouble" ).data( {
		check_data: [ 53, 3 ]
	} )
	$( ".fire_pump_wet" ).data( {
		check_data: [ 55, 4 ]
	} )
	$( ".fire_pump_dry" ).data( {
		check_data: [ 55, 6 ]
	} )
	$( ".fire_pump_pre" ).data( {
		check_data: [ 55, 8 ]
	} )







	$( ".each_zone" ).data( {
		toggle2_data: [ 24, 1 ]
	} )
	$( ".proper_zone" ).data( {
		toggle2_data: [ 24, 3 ]
	} )
	$( ".proper_fagp" ).data( {
		toggle2_data: [ 24, 5 ]
	} )
	$( ".proper_annunc" ).data( {
		toggle2_data: [ 24, 7 ]
	} )
	$( ".master_box" ).data( {
		toggle2_data: [ 32, 2 ]
	} )
	$( ".central_station" ).data( {
		toggle2_data: [ 32, 4 ]
	} )
	$( ".dedicated_cb" ).data( {
		toggle2_data: [ 34, 3 ]
	} )
	$( ".surge_prot" ).data( {
		toggle2_data: [ 34, 4 ]
	} )




	$( ".evac_paging" ).data( {
		pf3_data: [ 28, 5, "" ]
	} )
	$( ".zone_trouble" ).data( {
		pf3_data: [ 26, 1, "" ]
	} )
	$( ".internal_comm" ).data( {
		pf3_data: [ 30, 5, "" ]
	} )
	$( ".tested" ).data( {
		pf3_data: [ 32, 1, "" ]
	} )
	$( ".door_holders" ).data( {
		pf3_data: [ 37, 0, "" ]
	} )
	$( '.hvac_shutdown' ).data( {
		pf3_data: [ 37, 4, "" ]
	} )
	$( ".has_smoke_hatch" ).data( {
		pf3_data: [ 37, 0, "" ]
	} )
	$( '.elevator_recall' ).data( {
		pf3_data: [ 39, 4, "" ]
	} )
	$( '.smoke_exhaust' ).data( {
		pf3_data: [ 41, 0, "" ]
	} )
	$( ".annunciator_panel_pf" ).data( {
		pf3_data: [ 41, 3, "" ]
	} )
	$( '.cb_dedicated_cb' ).data( {
		pf3_data: [ 45, 3, "" ]
	} )
	$( '.cb_surge_prot' ).data( {
		pf3_data: [ 45, 4, "" ]
	} )
	$( '.cb_batteries' ).data( {
		pf3_data: [ 45, 5, "" ]
	} )
	$( '.cb_syncronization' ).data( {
		pf3_data: [ 46, 2, "" ]
	} )
	$( '.cb_synch_module' ).data( {
		pf3_data: [ 46, 5, "" ]
	} )
	$( ".fire_pump" ).data( {
		pf3_data: [ 51, 0, "" ]
	} )
	$( ".fire_pump_running" ).data( {
		pf3_data: [ 53, 0, "" ]
	} )
	$( ".fire_pump_or" ).data( {
		pf3_data: [ 50, 8, "" ]
	} )
	$( ".fire_pump_power" ).data( {
		pf3_data: [ 52, 8, "" ]
	} )
	$( ".fire_pump_auto" ).data( {
		pf3_data: [ 53, 8, "" ]
	} )
	$( '.voice_batteries' ).data( {
		pf3_data: [ 61, 3, "" ]
	} )
	$( '.voice_amp' ).data( {
		pf3_data: [ 59, 1, "" ]
	} )
	$( '.voice_phones' ).data( {
		pf3_data: [ 59, 3, "" ]
	} )
	$( '.act_trouble_sig' ).data( {
		pf3_data: [ 0, 0, "" ]
	} )
	$( '.act_super_sig' ).data( {
		pf3_data: [ 0, 1, "" ]
	} )
	$( '.act_func_test' ).data( {
		pf3_data: [ 0, 2, "" ]
	} )
	$( '.act_troub_self' ).data( {
		pf3_data: [ 0, 3, "" ]
	} )
	$( '.act_nac_sig' ).data( {
		pf3_data: [ 0, 4, "" ]
	} )
	$( '.act_init_zones' ).data( {
		pf3_data: [ 0, 5, "" ]
	} )
	$( '.act_alarm_rest' ).data( {
		pf3_data: [ 0, 6, "" ]
	} )
	$( '.act_super_rest' ).data( {
		pf3_data: [ 0, 7, "" ]
	} )
	$( '.smoke_has_pres' ).data( {
		pf3_data: [ 4, 2, "" ]
	} )
	$( '.voice_page_sel' ).data( {
		pf3_data: [ 5, 0, "" ]
	} )
	$( '.voice_message' ).data( {
		pf3_data: [ 5, 1, "" ]
	} )
	$( '.voice_above_below' ).data( {
		pf3_data: [ 5, 2, "" ]
	} )







	$( '.hvac_auto_restart' ).data( {
		toggle3_data: [ 36, 8, "" ]
	} )
	$( ".has_ada_booster" ).data( {
		toggle3_data: [ 42, 8, "" ]
	} )
	$( ".fire_pump_m" ).data( {
		toggle3_data: [ 49, 8, "" ]
	} )
	$( ".sprinkler_sys" ).data( {
		toggle3_data: [ 54, 8, "" ]
	} )
	$( ".voice_yn" ).data( {
		toggle3_data: [ 56, 8, "" ]
	} )
	$( '.door_release' ).data( {
		toggle3_data: [ 4, 0, "" ]
	} )
	$( '.hvac_fan_shutdown' ).data( {
		toggle3_data: [ 4, 1, "" ]
	} )






	$( ".signal_trouble" ).data( {
		pf_data: [ 26, 2 ]
	} )
	$( ".ac_loss" ).data( {
		pf_data: [ 26, 4 ]
	} )
	$( ".battery_failure" ).data( {
		pf_data: [ 26, 5 ]
	} )
	$( ".earth_ground" ).data( {
		pf_data: [ 26, 7 ]
	} )
	$( ".batteries" ).data( {
		pf_data: [ 34, 5 ]
	} )
	$( ".smoke_hatch_pf" ).data( {
		pf_data: [ 38, 2 ]
	} )
















	// if (report[43][8]) {
	// 	$( ".has_ada_booster" ).prepend( '<span class="glyphicon glyphicon-remove"></span>&nbsp;No' );
	// }

























	$( ".dyn" ).each( function ( index ) {
		if ( $( this ).data()[ "text_data" ] ) {
			var a = $( this ).data()[ "text_data" ][ 0 ]
			var b = $( this ).data()[ "text_data" ][ 1 ]

			if ( $( this ).data()[ "text_data" ][ 2 ] ) {
				$( this ).html( report[ a ][ b ].replace( /\n/g, "<br>" ) )
			} else {
				$( this ).text( report[ a ][ b ] )
			}

			if ( $( this ).text() === "" ) {
				$( this ).text( "N/A" )
			}
		}


		if ( $( this ).data()[ "check_data" ] ) {
			var i = $( this ).data()[ "check_data" ][ 0 ]
			var v = $( this ).data()[ "check_data" ][ 1 ]
			if ( report[ i ][ v ] ) {
				$( this ).children( "span" ).show()
			}
		}

		if ( $( this ).data()[ "toggle2_data" ] ) {
			var i = $( this ).data()[ "toggle2_data" ][ 0 ]
			var v = $( this ).data()[ "toggle2_data" ][ 1 ]
			if ( report[ i ][ v ] ) {
				$( this ).children( "span.glyphicon" ).addClass( "glyphicon-ok" )
				$( this ).children( "span.toggle" ).text( " Yes" )
			} else {
				$( this ).children( "span.glyphicon" ).addClass( "glyphicon-remove" )
				$( this ).children( "span.toggle" ).text( " No" )
			}
		}



		if ( $( this ).data()[ "toggle3_data" ] ) {
			var i = $( this ).data()[ "toggle3_data" ][ 0 ]
			var v = $( this ).data()[ "toggle3_data" ][ 1 ]

			if ( report[ i ][ v ] == true ) {
				$( this ).children( "span.glyphicon" ).addClass( "glyphicon-ok" )
				$( this ).children( "span.toggle" ).text( " Yes" )
				$( this ).data()[ "toggle3_data" ][ 2 ] = 1
			} else if ( report[ i ][ v ] == "N/A" ) {
				$( this ).children( "span.glyphicon" ).addClass( "glyphicon-ban-circle" )
				$( this ).children( "span.toggle" ).text( " N/A" )
				$( this ).data()[ "toggle3_data" ][ 2 ] = 3
			} else {
				$( this ).children( "span.glyphicon" ).addClass( "glyphicon-remove" )
				$( this ).children( "span.toggle" ).text( " No" )
				$( this ).data()[ "toggle3_data" ][ 2 ] = 2
			}
		}



		if ( $( this ).data()[ "pf3_data" ] ) {
			var i = $( this ).data()[ "pf3_data" ][ 0 ]
			var v = $( this ).data()[ "pf3_data" ][ 1 ]

			if ( report[ i ][ v ] == true ) {
				$( this ).addClass( "list-group-item-success" )
				$( this ).children( "span.glyphicon" ).addClass( "glyphicon-ok" )
				$( this ).children( "span.toggle" ).text( " Pass" )
				$( this ).data()[ "pf3_data" ][ 2 ] = 1
			} else if ( report[ i ][ v ] == "N/A" ) {
				$( this ).children( "span.glyphicon" ).addClass( "glyphicon-ban-circle" )
				$( this ).children( "span.toggle" ).text( " N/A" )
				$( this ).data()[ "pf3_data" ][ 2 ] = 3
			} else {
				$( this ).addClass( "list-group-item-danger" )
				$( this ).children( "span.glyphicon" ).addClass( "glyphicon-remove" )
				$( this ).children( "span.toggle" ).text( " Fail" )
				$( this ).data()[ "pf3_data" ][ 2 ] = 2
			}
		}



		if ( $( this ).data()[ "pf_data" ] ) {
			var i = $( this ).data()[ "pf_data" ][ 0 ]
			var v = $( this ).data()[ "pf_data" ][ 1 ]
			if ( report[ i ][ v ] ) {
				$( this ).addClass( "list-group-item-success" )
				$( this ).children( "span.glyphicon" ).addClass( "glyphicon-ok" )
				$( this ).children( "span.toggle" ).text( " Pass" )
			} else {
				$( this ).addClass( "list-group-item-danger" )
				$( this ).children( "span.glyphicon" ).addClass( "glyphicon-remove" )
				$( this ).children( "span.toggle" ).text( " Fail" )
			}
		}




	} )






	$( '.disabled' ).css( "font-weight", "Bold" )
	$( '.disabled' ).css( "color", "#333" )
	$( '.panel-heading' ).css( "color", "#333" )
	$( '.mainPanel' ).css( "color", "#fff" )

	window.plugins.spinnerDialog.hide()
}







$( document ).ready( function () {
	$( ".dyn" ).click( function () {
		editThisReportObject( this )
	} )






	$( "#btn_dis_model" ).click( function () {
		$( '#editmod' ).modal( 'hide' )
	} )

	$( "#btn_dis_model_rep" ).click( function () {
		$( '#report_model' ).modal( 'hide' )
	} )


	$( "#text_model_submit_btn" ).click( function () {
		submitTextReportObject()
		$( '#report_model' ).modal( 'hide' )
	} )



	$( "#text_model_clear_btn" ).click( function () {
		$( "#text_model_input" ).val( "" )
	} )


	$( '.submit_on_enter' ).keydown( function ( event ) {
		if ( event.keyCode == 13 ) {
			submitTextReportObject()
			$( '#report_model' ).modal( 'hide' )
			return false
		}
	} )
} )




function editThisReportObject( dis ) {
	report_obj = $( dis )

	if ( report_obj.data()[ "text_data" ] ) {
		var i = report_obj.data()[ "text_data" ][ 0 ]
		var v = report_obj.data()[ "text_data" ][ 1 ]

		if ( report_obj.data()[ "text_data" ][ 2 ] ) {
			if ( report_obj.text() == "N/A" ) {
				$( '#textarea_model_input' ).val( "" )
			} else {
				$( '#textarea_model_input' ).val( report[ i ][ v ] )
			}
			$( '#form_txt' ).hide()
			$( "#text_model_clear_btn" ).hide()
		} else {
			if ( report_obj.text() == "N/A" ) {
				$( '#text_model_input' ).val( "" )
			} else {
				$( '#text_model_input' ).val( report[ i ][ v ] )
			}
			$( '#form_txtarea' ).hide()
		}
		$( '#report_model' ).modal( 'show' )
		$('#text_model_input').focus()
	}



	if ( report_obj.data()[ "check_data" ] ) {
		report_obj.children( "span" ).toggle()
		var i = report_obj.data()[ "check_data" ][ 0 ]
		var v = report_obj.data()[ "check_data" ][ 1 ]
		report[ i ][ v ] = !report[ i ][ v ]
	}



	if ( report_obj.data()[ "toggle2_data" ] ) {
		var i = report_obj.data()[ "toggle2_data" ][ 0 ]
		var v = report_obj.data()[ "toggle2_data" ][ 1 ]
		if ( report[ i ][ v ] ) {
			$( report_obj ).children( "span.glyphicon" ).removeClass( "glyphicon-ok" )
			$( report_obj ).children( "span.glyphicon" ).addClass( "glyphicon-remove" )
			$( report_obj ).children( "span.toggle" ).text( " No" )
		} else {
			$( report_obj ).children( "span.glyphicon" ).removeClass( "glyphicon-remove" )
			$( report_obj ).children( "span.glyphicon" ).addClass( "glyphicon-ok" )
			$( report_obj ).children( "span.toggle" ).text( " Yes" )
		}

		report[ i ][ v ] = !report[ i ][ v ]
	}



	if ( report_obj.data()[ "pf_data" ] ) {
		var i = report_obj.data()[ "pf_data" ][ 0 ]
		var v = report_obj.data()[ "pf_data" ][ 1 ]
		if ( report[ i ][ v ] ) {
			$( report_obj ).children( "span.glyphicon" ).removeClass( "glyphicon-ok" )
			$( report_obj ).children( "span.glyphicon" ).addClass( "glyphicon-remove" )
			$( report_obj ).removeClass( "list-group-item-success" )
			$( report_obj ).addClass( "list-group-item-danger" )
			$( report_obj ).children( "span.toggle" ).text( " Fail" )
		} else {
			$( report_obj ).children( "span.glyphicon" ).removeClass( "glyphicon-remove" )
			$( report_obj ).children( "span.glyphicon" ).addClass( "glyphicon-ok" )
			$( report_obj ).removeClass( "list-group-item-danger" )
			$( report_obj ).addClass( "list-group-item-success" )
			$( report_obj ).children( "span.toggle" ).text( " Pass" )
		}

		report[ i ][ v ] = !report[ i ][ v ]
	}



	if ( report_obj.data()[ "toggle3_data" ] ) {
		// console.log('lol')
		var i = report_obj.data()[ "toggle3_data" ][ 0 ]
		var v = report_obj.data()[ "toggle3_data" ][ 1 ]
		var t = report_obj.data()[ "toggle3_data" ][ 2 ]
			// console.log(t)

		if ( t == 1 ) {
			$( report_obj ).children( "span.glyphicon" ).removeClass( "glyphicon-ok" )
			$( report_obj ).children( "span.glyphicon" ).removeClass( "glyphicon-ban-circle" )
			$( report_obj ).children( "span.glyphicon" ).addClass( "glyphicon-remove" )
			$( report_obj ).children( "span.toggle" ).text( " No" )
			report_obj.data()[ "toggle3_data" ][ 2 ] = 2
			report[ i ][ v ] = false
		} else if ( t == 2 ) {
			$( report_obj ).children( "span.glyphicon" ).removeClass( "glyphicon-ok" )
			$( report_obj ).children( "span.glyphicon" ).removeClass( "glyphicon-remove" )
			$( report_obj ).children( "span.glyphicon" ).addClass( "glyphicon-ban-circle" )
			$( report_obj ).children( "span.toggle" ).text( " N/A" )
			report_obj.data()[ "toggle3_data" ][ 2 ] = 3
			report[ i ][ v ] = "N/A"
		} else if ( t == 3 ) {
			$( report_obj ).children( "span.glyphicon" ).removeClass( "glyphicon-ban-circle" )
			$( report_obj ).children( "span.glyphicon" ).removeClass( "glyphicon-remove" )
			$( report_obj ).children( "span.glyphicon" ).addClass( "glyphicon-ok" )
			$( report_obj ).children( "span.toggle" ).text( " Yes" )
			report_obj.data()[ "toggle3_data" ][ 2 ] = 1
			report[ i ][ v ] = true
		}
	}







	if ( report_obj.data()[ "pf3_data" ] ) {
		// console.log('lol')
		var i = report_obj.data()[ "pf3_data" ][ 0 ]
		var v = report_obj.data()[ "pf3_data" ][ 1 ]
		var t = report_obj.data()[ "pf3_data" ][ 2 ]
			// console.log(t)

		if ( t == 1 ) {
			$( report_obj ).children( "span.glyphicon" ).removeClass( "glyphicon-ok" )
			$( report_obj ).children( "span.glyphicon" ).removeClass( "glyphicon-ban-circle" )
			$( report_obj ).children( "span.glyphicon" ).addClass( "glyphicon-remove" )
			$( report_obj ).removeClass( "list-group-item-success" )
			$( report_obj ).addClass( "list-group-item-danger" )
			$( report_obj ).children( "span.toggle" ).text( " Fail" )
			report_obj.data()[ "pf3_data" ][ 2 ] = 2
			report[ i ][ v ] = false
		} else if ( t == 2 ) {
			$( report_obj ).children( "span.glyphicon" ).removeClass( "glyphicon-ok" )
			$( report_obj ).children( "span.glyphicon" ).removeClass( "glyphicon-remove" )
			$( report_obj ).children( "span.glyphicon" ).addClass( "glyphicon-ban-circle" )
			$( report_obj ).removeClass( "list-group-item-danger" )
			$( report_obj ).removeClass( "list-group-item-success" )
			$( report_obj ).children( "span.toggle" ).text( " N/A" )
			report_obj.data()[ "pf3_data" ][ 2 ] = 3
			report[ i ][ v ] = "N/A"
		} else if ( t == 3 ) {
			$( report_obj ).children( "span.glyphicon" ).removeClass( "glyphicon-ban-circle" )
			$( report_obj ).children( "span.glyphicon" ).removeClass( "glyphicon-remove" )
			$( report_obj ).children( "span.glyphicon" ).addClass( "glyphicon-ok" )
			$( report_obj ).removeClass( "list-group-item-danger" )
			$( report_obj ).addClass( "list-group-item-success" )
			$( report_obj ).children( "span.toggle" ).text( " Pass" )
			report_obj.data()[ "pf3_data" ][ 2 ] = 1
			report[ i ][ v ] = true
		}
	}








}



function submitTextReportObject( arr ) {

	var txt = "N/A"

	if ( arr ) {
		if ( arr[ 0 ] ) {
			txt = arr[ 0 ]
		} else if ( arr[ 1 ] ) {
			txt = arr[ 1 ]
		} else if ( arr[ 2 ] ) {
			txt = arr[ 2 ]
		}
	} else {
		if ( report_obj.data()[ "text_data" ][ 2 ] ) {
			txt = $( '#textarea_model_input' ).val()
		} else {
			txt = $( '#text_model_input' ).val()
		}

	}

	var i = report_obj.data()[ "text_data" ][ 0 ]
	var v = report_obj.data()[ "text_data" ][ 1 ]

	report[ i ][ v ] = txt

	$( ".dyn" ).each( function ( index ) {
		if ( $( this ).data()[ "text_data" ] ) {
			var a = $( this ).data()[ "text_data" ][ 0 ]
			var b = $( this ).data()[ "text_data" ][ 1 ]

			if ( $( this ).data()[ "text_data" ][ 2 ] ) {
				$( this ).html( report[ a ][ b ].replace( /\n/g, "<br>" ) )
			} else {
				$( this ).text( report[ a ][ b ] )
			}

			if ( $( this ).text() === "" ) {
				$( this ).text( "N/A" )
			}
		}
	} )

}



function setDateToday() {
	var m_names = new Array( "January", "February", "March",
		"April", "May", "June", "July", "August", "September",
		"October", "November", "December" )

	var d = new Date()
	var curr_date = d.getDate()
	var curr_month = d.getMonth()
	var curr_year = d.getFullYear()
	var theDate = m_names[ curr_month ] + " " + curr_date + ", " + curr_year

	report_obj = $( ".date" )
	var arr = []
	arr[ 0 ] = theDate
	submitTextReportObject( arr )

}
document.getElementById( 'btn_set_date' ).addEventListener( 'click', setDateToday, false );
