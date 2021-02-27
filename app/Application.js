/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('Jdeveloper.Application', { //1
    extend: 'Ext.app.Application',
    
    name: 'Jdeveloper', //2

   views:[ //3
        'login.Login'
        
    ],

  /*   controllers:[ //4
        'Root'
    ],

    stores: [ //5
        
    ],
    */
    
    launch: function () {

        Ext.tip.QuickTipManager.init();

        var me=this;
        me.splashscreen.fadeOut({

            duration:4000,
            remove:true
        });

        //Fade out the icon and message

        me.splashscreen.next().fadeOut({
            duration:4000,
            remove:true,
            listeners:{
                afteranimate:function(el, startTime, eOpts){
                    
                    //console.log('launch');
                    Ext.widget('login-dialog');
                    //Ext.widget('app-main');
                    //Ext.create('Jdeveloper.view.main.Main');
                    
                }
            }
        })
        

    },

    init: function(){

        var me = this; 
        me.splashscreen = Ext.getBody().mask( 'Loading application', 'splashscreen');
        me.splashscreen.addCls('splashscreen');

        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0],{

            cls:'x-splash-icon'

        });

        /*var task=new Ext.util.DelayedTask(function(){

            Ext.getBody.unmask();
        });


        task.delay(3000);*/

        
    }
});
