Ext.define('Jdeveloper.view.login.LoginController',{
        extend:'Ext.app.ViewController',
        alias:'controller.login',

        requires:[

                'Jdeveloper.view.login.CapsLockTooltip',
                'Jdeveloper.util.Util'

        ],

        onTextFieldSpecialKey:function(field,e,options){

                if(e.getKey() === e.ENTER){
                        this.doLogin();
                }
        },

        onTextFieldKeyPress:function(field,e,options){

                var charCode = e.getCharCode(),
                me = this;
                if((e.shiftKey && charCode >= 97 && charCode <= 122) || //#2
                          (!e.shiftKey && charCode >= 65 && charCode <= 90)){
                                 if(me.capslockTooltip === undefined){ //#3

                                        me.capslockTooltip = Ext.widget('capslocktooltip'); //#4

                                }
                me.capslockTooltip.show(); //#5

                } else {

                if(me.capslockTooltip !== undefined){ //#6

                me.capslockTooltip.hide(); //#7
                
                }
                }

        },

        onButtonClickAnnuler:function(button,e,options){
                
                
                this.lookupReference('form').reset();

        },

        onButtonClickConnexion:function(button,e,options){

                var me=this;
                if(me.lookupReference('form').isValid()){
                        me.doLogin();
                }
        },


        doLogin:function(){
                
                var me=this,
                form = me.lookupReference('form');

                this.getView().mask('Authentification ... Patientez s\'il vousp lait');
                form.submit({
                        
                        clientValidation:true,
                        url:'php/security/login.php',
                        scope:me,
                        success:'onLoginSuccess',
                        failure:'onLoginFailure'
                });
        },

        onLoginFailure:function(form,action){
                           
                this.getView().unmask();

                var result = Jdeveloper.util.Util.decodeJSON(action.response.responseText);

                switch(action.failureType){                

                        case Ext.form.action.Action.CLIENT_INVALID:                         
                        Jdeveloper.util.Util.showErrorMsg('Le formulaire ne peut etre soumis avec des donnees invalides');
                        break;
                        case Ext.form.action.Action.CONNECT_FAILURE:
                                Jdeveloper.util.Util.showErrorMsg(action.response.responseText);    
                        break;
                        case Ext.form.action.Action.SERVER_INVALID:
                                //console.log(action);
                                Jdeveloper.util.Util.showErrorMsg(result.msg);
                }
        },

        onLoginSuccess:function(form,action){

                this.getView().unmask();

                this.getView().close();
                Ext.create('Jdeveloper.view.main.Main');
        }


        

});

