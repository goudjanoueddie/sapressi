Ext.define('Jdeveloper.store.Menu',{
    extend:'Ext.data.Store',

    requires:[
        'Jdeveloper.util.Util'
    ],

    model:'Jdeveloper.model.menu.Accordion',

    proxy:{
        type:'ajax',
        url:'php/menu/list.php',

        reader:{
            type:'json',
            rootProperty:'data'
        },
        listeners:{
            exception:function(proxy,response,operation){
                Jdeveloper.util.Util.showErrorMsg(response.responseText);
            }
        }

    }

});