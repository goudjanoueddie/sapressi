Ext.define('Jdeveloper.model.menu.Accordion',{
    extend:'Ext.data.Model',

    requires:[
        'Jdeveloper.model.menu.TreeNode'
    ],

    fields:[
        {name:'id',type:'int'},
        {name:'text'},
        {name:'iconCls'}
    ],

    hasMany:{
        model:'Jdeveloper.model.menu.TreeNode',
        foreignKey:'parent_id',
        name:'items'

    }
});