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

    validators: {
        name: [
            { type: 'presence', message:'Ce champ est obligatoire'},
            { type: 'length', min: 3, max: 100, bothMessage :'Minimum 3 caractères'}
        ],
        userName: [
            { type: 'exclusion', list: ['Admin', 'Operator'],message:'Le nom d\'utilisateur ne peut pas être Admin ou Operator' },
            { type: 'format', matcher: /(^[a-z]+)/,message:'Doit commencer par une lettre obigatoirement'},
            { type: 'presence', message: 'Ce champ est obligatoire'},
            { type: 'length', min: 3, max: 25,bothMessage :'Doit etre compris entre 3 et 25 caracteres'}
        ],
        email: [
            { type: 'presence', message: 'Ce champ est obligatoire'},
            { type: 'length', min: 5, max: 100,bothMessage :'Doit contenir au minimum 5 caractères'},
            { type: 'email' ,message:'Doit etre du type nom@nomDuServer.domain'}
        ],
        groups_id: [
            { type: 'presence', message:'Ce champ est obligatoire'}
        ]
    },

    hasOne: [
        {
            model: 'Group',         //#1
            name: 'group',          //#2
            foreignKey:'Group_id', //#3
            associationKey: 'group'
        }
    ]
});