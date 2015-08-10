var app_close = null
var DA_FILE = null
var devices = null
var devices_his = []
var report = null
var typoptions = [
    [
        "Annunciator",
        "Battery",
        "Bell",
        "CO Detector",
        "Combo Detector",
        "Door Holder",
        "FACP",
        "Fire Pump Control",
        "Flow Switch",
        "Heat Detector",
        "Horn",
        "Horn Strobe",
        "Addressable Module",
        "Monitor Module",
        "Relay Module",
        "Remote LED",
        "Pull Station",
        "Smoke Detector",
        "Duct Smoke Detector",
        "Speaker",
        "Speaker Strobe",
        "Strobe",
        "Tamper Switch",
        "Low Pressure Switch",
        "Fire Pump Deficiency",
        "Sprinkler Deficiency"
    ],
    []
]
var vicoptions = []
var address_options = []
var zone_options = []
var gen_device_type = []
gen_device_type[ "audios" ] = []
gen_device_type[ "detectors" ] = []
gen_device_type[ "modules" ] = []
gen_device_type[ "switches" ] = []
gen_device_type[ "visuals" ] = []
var devices_chart_total = null
var devices_chart_type = null
var devices_chart_type_abs = null
var data_total = null
var data_devices_type = null
var data_devices_abs = null
var exitDaApp = null




var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener( 'deviceready', this.onDeviceReady, false );



    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        document.addEventListener( "backbutton", function () {}, false );
        document.addEventListener( "pause", function () {
            saveFile()
        }, false );
        app.receivedEvent( 'deviceready' );
    },
    // Update DOM on a Received Event
    receivedEvent: function ( id ) {

        onReadyToo()
            // $.getJSON( "assets/Blackstone Williams Properties - 302 Newbury Street - 1ST QUARTER - 2015.json", function ( json ) {
            //     report = json[ 0 ]
            //     devices = json[ 1 ]
            //     loadThaDATA()
            // } )

        exitDaApp = function () {
            if ( navigator.app ) {
                navigator.app.exitApp();
            } else if ( navigator.device ) {
                navigator.device.exitApp();
            }
        }
    }
};




function alphabetFiles( arr ) {
    arr.sort()

    // console.log(arr)

    for ( var i = 0; i < arr.length; i++ ) {

        var li = $( '<li>' )
        li.addClass( "btn_clk_load list-group-item" )
        li.text( arr[ i ] )
        li.data( "file_name", arr[ i ] )
        $( '#li_files' ).append( li )
    };

    $( ".btn_clk_load" ).click( function () {
        $( this ).addClass( "active" )
        readDaFile( $( this ) )
    } );

}




function onReadyToo() {

    // console.log(cordova.file.externalRootDirectory);

    // window.resolveLocalFileSystemURL(cordova.file.externalRootDirectory + "/owncloudPro/rob@50.252.226.109/reports",
    window.resolveLocalFileSystemURL( cordova.file.externalRootDirectory + "/cloud",
        function ( fs ) {

            var directoryReader = fs.createReader()
            directoryReader.readEntries( function ( entries ) {

                var arr = []

                for ( i = 0; i < entries.length; i++ ) {
                    var ext = entries[ i ].name.substr( ( Math.max( 0, entries[ i ].name.lastIndexOf( "." ) ) || Infinity ) + 1 )
                    if ( ext == 'json' ) {

                        arr.push( entries[ i ].name )

                        // var li = $( '<li>' )
                        // li.addClass( "btn_clk_load list-group-item" )
                        // li.text( entries[ i ].name )
                        // li.data( "file_name", entries[ i ].name )
                        // $( '#li_files' ).append( li )
                    }
                }

                alphabetFiles( arr )

                // $( ".btn_clk_load" ).click( function () {
                //     $( this ).addClass( "active" )
                //     readDaFile( $( this ) )
                // } );

            }, function ( error ) {
                alert( error.code );
            } )

        },
        function ( evt ) {
            console.log( evt.code );
        }
    );

}



function readDaFile( dis ) {


    // $("#data").append(cordova.file.externalRootDirectory + "owncloudPro/rob@50.252.226.109/reports/" + dis.data()["file_name"] + "<br>")

    // window.resolveLocalFileSystemURL(cordova.file.externalRootDirectory + "owncloudPro/rob@50.252.226.109/reports/" + dis.data()["file_name"],
    window.resolveLocalFileSystemURL( cordova.file.externalRootDirectory + "cloud/" + dis.data()[ "file_name" ],
        function ( fs ) {

            fs.file( function ( file ) {
                var reader = new FileReader();

                reader.onloadend = function ( e ) {
                    var pars = JSON.parse( e.target.result )
                    report = pars[ 0 ]
                    devices = pars[ 1 ]
                    loadThaDATA()
                }
                reader.readAsText( file );

                DA_FILE = dis.data()[ "file_name" ];
            } );

            // fs.getFile(dis.data()["file_name"], {create:false}, function(file) {
            //     console.log("got the file", file);
            //     DA_FILE = file;        
            // });

            // setInterval(function () {
            //  if ( devices && report ) {
            //      $('#load').removeClass('disabled').removeClass('btn-danger').addClass('btn-success')
            //  }
            // }, 500);

        },
        function ( evt ) {
            console.log( evt.code );
        }
    );

}






















function loadThaDATA() {

    initializeReport()
    prep_Model_Options()
    initializeData( true )
    startBackups()
}

// document.getElementById('load').addEventListener('click', loadThaDATA, false);











function arrContains( obj, a ) {
    for ( var i = 0; i < a.length; i++ ) {
        if ( a[ i ] == obj ) {
            return false;
        }
    }
    return true;
}



// http://www.raymondcamden.com/2014/11/5/Cordova-Example-Writing-to-a-file

function saveFile() {
    // console.log("11111111111111111111111")
    if ( DA_FILE ) {
        window.resolveLocalFileSystemURL( cordova.file.externalRootDirectory + "cloud",
            function ( dir ) {

                dir.getFile( DA_FILE, {
                    create: false
                }, function ( file ) {


                    file.createWriter( function ( fileWriter ) {

                        var arr = []
                        arr[ 0 ] = report
                        arr[ 1 ] = devices
                        var blob = new Blob( [ JSON.stringify( arr ) ], {
                            type: 'text/plain;charset=utf-8'
                        } );
                        fileWriter.write( blob );
                        // console.log( "3333333333333333333333333333333" )

                    } );


                } );
            },
            function ( evt ) {
                console.log( evt.code );
            }
        );
    }
}



function alertDismissed() {}

document.getElementById( 'btn_save' ).addEventListener( 'click', function () {
    saveFile()
    navigator.notification.alert(
        'File has been saved successfully', // message
        alertDismissed, // callback
        'Saving file...', // title
        'OK' // buttonName
    );
}, false );

window.onerror = function ( msg, url, linenumber ) {
    navigator.notification.alert(
        'Error message - ' + msg + '\nURL - ' + url + '\nLine Number - ' + linenumber + '\n\nTELL ROB OF THIS HORIBLE NEWS!!!', // message
        alertDismissed, // callback
        'ERROR', // title
        'OK' // buttonName
    );
}




document.getElementById( 'btn_exit' ).addEventListener( 'click', function () {
    saveFile()

    window.plugins.spinnerDialog.show( "DO NOT QUIT APP!", "Saving data...", true )

    setTimeout( function () {
        window.plugins.spinnerDialog.hide()
        exitDaApp()
    }, 5000 )

}, false );

document.getElementById( 'btn_close_two' ).addEventListener( 'click', function () {

    navigator.notification.alert(
        'Restart the app!', // message
        function () {
            exitDaApp()
        },
        "Refreshing...",
        "OK"
    );

}, false );















function startBackups() {
    setInterval( function () {
        saveFile()
    }, 600000 );
    // }, 3000 );
}
