Ext.define('Jdeveloper.view.security.UserModel',{
    extend:'Ext.app.ViewModel',

    alias:'viewmodel.user',

    requires:[

        'Jdeveloper.model.security.User',
        'Jdeveloper.model.security.Group'
        
        
    ],

    /*stores:{
        users:{
            model:'Jdeveloper.model.security.User',
            session:true,
            autoLoad:true
        },
        groups:{
            model:'Jdeveloper.model.security.Group',
            session:true,
            autoLoad:true
        }
    }*/

    stores:{

        users:{
            model:'Jdeveloper.model.security.User',
            fields:['name','userName','email','picture','Group_id'],

            proxy:{
                type:'ajax',
                url:'php/user/list.php',
        
                reader:{
                    type:'json',
                    rootProperty:'data'
                },
               
                //autoLoad:true
            },

           
            autoLoad:true
        },

        groups:{
            model:'Jdeveloper.model.security.Group' , 
        
        proxy:{
            type:'ajax',
            url:'php/group/list.php',
    
            reader:{
                type:'json',
                rootProperty:'data'
            },
           
            //autoLoad:true
        },
        
        autoLoad:true
    
    }
    

    }
    

});