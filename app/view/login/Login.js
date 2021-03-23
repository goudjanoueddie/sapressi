Ext.define('Jdeveloper.view.login.Login',{

    extend:'Ext.window.Window',

    xtype:'login-dialog',

    requires:[
        'Jdeveloper.view.login.LoginController',
        'Jdeveloper.view.locale.Translation'
    ],

    controller:'login',


    autoShow:true,
    height:170,
    width:360,
    layout:{
        type:'fit'
    },

    iconCls:'fa fa-key fa-lg',
    //title:translations.login,
    title:"login",
    closeAction:'hide',
    closable:false,
    draggable:false,
    resizable:false, 

    items:[

        {

            xtype:'form',
            reference:'form',
            bodyPadding:15,
            defaults:{

                xtype:'textfield',
                anchor:'100%',
                labelWidth:60,
                allowBlank:false,
                
                minLength:3,
                msgTarget:'under',

                listeners:{
                    specialKey:'onTextFieldSpecialKey'
                }
                

            },

            items:[

                {
                    name:'user',
                    //fieldLabel:translations.user,
                    fieldLabel:"utilisateur",
                    vtype:'alphanum',
                    maxLength:25
                },
                {
                    inputType:'password',
                    name:'password',
                    //fieldLabel:translations.password,
                    fieldLabel:"Mot de Passe",
                    id: 'password',
                    maxLength:15,


                    enableKeyEvents:true,

                    listeners:{
                        keypress:'onTextFieldKeyPress'
                    }
                }

            ],

            dockedItems:[
                
                {
                    xtype:'toolbar',
                    dock:'bottom',
                    items:[

                        {
                            xtype:'translation'
                        },
                        {
                            xtype:'tbfill'
                        },
                        {
                            xtype:'button',
                            iconCls:'fa fa-times fa-lg',
                            //text:translations.cancel,
                            text:"cancel",
                            listeners:{click:'onButtonClickAnnuler'}
                        },
                        {
                            xtype:'button',
                            formBind:true,
                            iconCls:'fa fa-sign-in fa-lg',
                            //text:translations.submit,
                            text:"Connexion",
                            listeners:{click:'onButtonClickConnexion'}
                        }
                        
                    ]

                }


            ]



        }
    ]



});