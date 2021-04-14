Ext.define('Jdeveloper.store.staticData.Clients',{
    extend:'Jdeveloper.store.staticData.Base',

    alias:'store.clients',
    storeId:'storeclients',

    requires:[
        'Jdeveloper.model.staticData.Clients',
        'Jdeveloper.util.Util'
    ],

    model:'Jdeveloper.model.staticData.Clients',

    /*fields:['id_clients','nom_client','adresse','telephone','courriel','localisation','activites','correspondant','fonction_correspondant'],

    proxy:{
        type:'ajax',
        url:'php/clients/list.php',

        reader:{
            type:'json',
            rootProperty:'data'
        },
        listeners:{
            exception:function(proxy,response,operation){
                Jdeveloper.util.Util.showErrorMsg(response.responseText);
            }
        }

    }*/

});