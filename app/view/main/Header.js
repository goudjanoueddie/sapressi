Ext.define('Jdeveloper.view.main.Header',{
    extend:'Ext.toolbar.Toolbar',
    xtype:'appheader',

    requires:[
        //'Jdeveloper.view.locale.Translation'
    ],

    ui:'footer',

    items: [{
            xtype: 'component', //#5
        bind: { //#6
            html: '{appHeaderIcon}'
        }
        },{
            xtype: 'component',
            componentCls: 'app-header-title', //#7
        bind: { //#8
             html: '{appName}'
        }
        },{
            xtype: 'tbfill' //#9
        },{
            xtype: 'translation' //#10
        },{
            xtype: 'tbseparator' //#11
        },{
            xtype: 'button', //#12
            itemId: 'logout', //#13
            text: 'Logout',
            reference: 'logout', //#14
            iconCls: 'fa fa-sign-out fa-lg buttonIcon', //#15

            listeners: {
            click: 'onLogout' //#16
            }
        }
        ]
        });