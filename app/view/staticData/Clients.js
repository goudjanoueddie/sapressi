Ext.define('Jdeveloper.view.staticData.Clients',{
    extend:'Jdeveloper.view.staticData.BaseGrid',
    //extend:'Ext.panel.Panel',

    xtype:'clientsgrid',

    requires:[
        'Jdeveloper.store.staticData.Clients'
    ],

    store:{
        type:'clients'
    },

    columns:[
        {
            text:'Clients Id',
            width:100,
            dataIndex:'id_clients',
            filter:{
                type:'numeric'
            }
        },

        {
            text:'Nom Client',
            flex:1,
            dataIndex:'nom_client',
            editor:{
                allowBlank:false,
                maxLenght:100
            },
            filter: {
                type:'string' 
                }
        },

        {
            text:'Adresse',
            dataIndex:'adresse',
            editor:{
                allowBlank:false,
                maxLenght:100
            },
            filter: {
                type:'string' 
                }
        },
        
        {
            text:'Telephone',
            dataIndex:'telephone',
            editor:{
                allowBlank:false,
                maxLenght:100
            },
            filter: {
                type:'string' 
                }
        },

        {
            text:'Courriel',
            dataIndex:'courriel',
            editor:{
                allowBlank:false,
                maxLenght:100
            },
            filter: {
                type:'string' 
                }
        },

        {
            text:'Localisation',
            dataIndex:'localisation',
            editor:{
                allowBlank:false,
                maxLenght:100
            },
            filter: {
                type: 'string' 
                }
        },

        {
            text:'Activites',
            dataIndex:'activites',
            editor:{
                allowBlank:false,
                maxLenght:100
            },
            filter: {
                type: 'string' 
                }
        },

        {
            text:'Correspondant',
            dataIndex:'correspondant',
            editor:{
                allowBlank:false,
                maxLenght:100
            },
            filter: {
                type: 'string' 
                }
        },


        {
            text:'Fonction Correspondant',
            dataIndex:'fonction_correspondant',
            editor:{
                allowBlank:false,
                maxLenght:100
            },
            filter: {
                type: 'string' 
                }
        },

        {
            text:'Contact Correspondant',
            dataIndex:'contact_correspondant',
            editor:{
                allowBlank:false,
                maxLenght:100
            },
            filter: {
                type: 'string' 
                }
        },

        {
            text:'Courreil Correspondant',
            dataIndex:'courriel_correspondant',
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