Ext.define('Jdeveloper.model.Base',{
    extend:'Ext.data.Model',

    requires:[
        'Jdeveloper.util.Util',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Jdeveloper.ux.data.writer.AssociatedWriter'
    ],


    schema:{
        namespace:'Jdeveloper.model',
       // namespace:'Jdeveloper.model',
        urlPrefix:'php',
        proxy:{
            type:'ajax',

            api:{

                read:'{prefix}/{entityName:lowercase}/list.php',
                create:'{prefix}/{entityName:lowercase}/create.php',
                update:'{prefix}/{entityName:lowercase}/update.php',
                destroy:'{prefix}/{entityName:lowercase}/destroy.php'

            },
            reader:{
                type:'json',
                rootProperty:'data'
            },
            writer:{
                type:'associatedjson',
                writeAllFields:true,
                encode:true,
                rootProperty:'data',
                allowSingle:false

            },

            listeners:{
                exception:function(proxy,response,operation){
                    Jdeveloper.util.Util.showErrorMsg(response.responseText);
                }

        }

    }
  }
});