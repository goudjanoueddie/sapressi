Ext.define('Jdeveloper.view.security.User',{
    extend:'Ext.panel.Panel',
    xtype:'user',

    requires:[
        'Ext.layout.container.VBox',
        'Jdeveloper.view.security.UsersGrid',
        'Jdeveloper.view.security.UserModel',
        'Jdeveloper.view.security.UserController',
        'Jdeveloper.util.Glyphs'

    ],

    controller:'user',

    

    viewModel:{
        
        type:'user'
    },

    //session:true,

    frame:true,

    layout:{
        type:'vbox',
        align:'stretch'
    },

    items:[
        {
            xtype:'users-grid',
            flex:1
        }
    ],


    dockedItems:[
        {
                xtype:'toolbar',
                dock:'top',
                items:[
                {
                    xtype:'button',
                    text:'Ajouter',
                    glyph:Jdeveloper.util.Glyphs.getGlyph('add'),
                    listeners:{
                        click:'onAdd'
                    }
                    

                },
                {
                    xtype:'button',
                    text:'Editer',
                    glyph:Jdeveloper.util.Glyphs.getGlyph('edit'),
                    listeners:{
                        click:'onEdit'
                    },
                    bind: {
                        disabled: '{!usersGrid.selection}'
                    }

                },
                {
                    xtype:'button',
                    text:'Supprimer',
                    glyph:Jdeveloper.util.Glyphs.getGlyph('destroy'),
                    listeners:{
                        click:'onDelete'
                    },
                    bind: {
                        disabled: '{!usersGrid.selection}'
                    }

                }
            ]
        }
    ]

});