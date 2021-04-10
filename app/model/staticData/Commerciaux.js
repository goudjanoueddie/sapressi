Ext.define('Jdeveloper.model.staticData.Commerciaux',{
    extends:'Jdeveloper.model.security.Base',

    entityName:'Commerciaux',

    idProperty: 'id_commerciaux',

    fieds:[
        {name:'nom'},
        {name:'prenom'},
        {name:'contacts'},
        {name:'courriel'},
        {name:'date_naissance',type:'date'}
    ]
});