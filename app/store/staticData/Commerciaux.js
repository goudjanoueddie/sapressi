Ext.define('Jdeveloper.store.staticData.Commerciaux',{
    extends:'Ext.data.store',
    
    alias:'store.commerciaux',
    storeId:'storecommerciaux',

    requires:[
        'Jdeveloper.model.staticData.Commerciaux'
    ],

    model:'Jdeveloper.model.staticData.Commerciaux'

});