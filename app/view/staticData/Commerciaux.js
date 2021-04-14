Ext.define('Jdeveloper.view.staticData.Commerciaux',{
    extends:'Jdeveloper.view.staticData.BaseGrid',

    xtype:'commerciauxgrid',

    requires:[
        'Jdeveloper.store.staticData.Commerciaux'
    ],

    /*store:{
        type:'commerciaux'
    },*/

    columns:[

        {
            text:'Clients Id',
            width:100,
            dataIndex:'id_commerciaux',
            filter:{
                type:'numeric'
            }
        },

        {
            text:'Nom',
            flex:1,
            dataIndex:'nom',
            editor:{
                allowBlank:false,
                maxLenght:100
            },
            filter: {
                type: 'string' 
                }
        },

        {
            text:'Prenom',
            flex:1,
            dataIndex:'prenom',
            editor:{
                allowBlank:false,
                maxLenght:100
            },
            filter: {
                type: 'string' 
                }
        },

        {
            text:'Contacts',
            flex:1,
            dataIndex:'contacts',
            editor:{
                allowBlank:false,
                maxLenght:100
            },
            filter: {
                type: 'string' 
                }
        },

        {
            text:'Courriel',
            flex:1,
            dataIndex:'courriel',
            editor:{
                allowBlank:false,
                maxLenght:100
            },
            filter: {
                type: 'string' 
                }
        },



    ]
});