Ext.define('Jdeveloper.store.staticData.Prospection',{
    extends:'Ext.data.store',
    
    alias:'store.prospection',
    storeId:'storeprospection',

    requires:[
        'Jdeveloper.model.staticData.Commerciaux'
    ],

    model:'Jdeveloper.model.staticData.Commerciaux'

});