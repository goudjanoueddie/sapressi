Ext.define('Jdeveloper.view.security.UsersGrid',{
    extend:'Ext.grid.Panel',
    alias:'widget.users-grid',

    bind:'{users}',
    reference:'usersGrid',
    multiSelect:true,
    columns:[
        {
            width:150,
            dataIndex:'userName',
            text:'Login'
        },

        {
            width:200,
            dataIndex:'name',
            flex:1,
            text:'Nom'
        },

        {
            width:250,
            dataIndex:'email',
            text:'Email'
        },

        {
            width:150,
            dataIndex:'Group_id',
            text:'Group'
        }
    ]

});