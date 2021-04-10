Ext.define('Jdeveloper.model.staticData.Clients',{
    extends:'Jdeveloper.model.security.Base',

    entityName:'Clients',
    idProperty:'id_clients',

    fields:[
        {name:'nom_client'},
        {name:'adresse'},
        {name:'telephone'},
        {name:'courriel'},
        {name:'localisation'},
        {name:'activites'},
        {name:'correspondant'},
        {name:'fonction_correspondant'}
    ]

    
});