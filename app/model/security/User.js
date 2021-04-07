Ext.define('Jdeveloper.model.security.User',{
    extend:'Jdeveloper.model.security.Base',

    entityName: 'User',

    fields: [
        {name:'name'},
        {name:'userName'},
        {name:'email'},
        {name:'picture'},
        {name:'groups_id',type:'int'},
        { name:'groupName', type:'string', persist:false,
            convert:function(v, rec){
                var data = rec.data;
                if (data.group && data.group.name){
                    return data.group.name;
                }
                return data.groups_id;
            }
        }
    ],
});