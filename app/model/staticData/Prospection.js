Ext.define('Jdeveloper.model.staticData.Prospection',{
    extends:'Jdeveloper.model.security.Base',

    entityName:'Prospection',

    idProperty:'id_prospection',

    fields:[
        {name:'date_prospection',type:'date'},
        {name:'objectif_prospection'},
        {name:'besoins_attente_client'},
        {name:'type'},
        {name:'date_prospection'},
        {name:'id_commerciaux',type:'int'},
        {name:'id_clients',type:'int'}
    ],

    hasOne:[
        {
            model:'Commerciaux',
            name:'commerciaux',
            foreignKey:'id_commerciaux'
        }
    ],


    hasOne:[
        {
            model:'Clients',
            name:'clients',
            foreignKey:'id_clients'
        }
    ],

});