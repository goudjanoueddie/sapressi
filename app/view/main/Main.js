/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Jdeveloper.view.main.Main', {
    extend: 'Ext.container.Container',
    
    requires: [
        'Jdeveloper.view.main.MainController',
        'Jdeveloper.view.main.MainModel',
        'Jdeveloper.view.main.Footer',
        'Jdeveloper.view.main.Panel',
        'Jdeveloper.view.main.Header',
        'Jdeveloper.view.menu.Accordion'
    ],

    plugins:'viewport',
    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        region:'center',
        xtype:'mainpanel'
    },{

        xtype:'appheader',
        region:'north'

    },{

        xtype:'appfooter',
        region:'south'

    },{
        //xtype:'container',
        xtype:'mainmenu',
        region:'west',
        width:200,
        split:true
    }]
});
