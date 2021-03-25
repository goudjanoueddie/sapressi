

function loadLocale(){
    var lang = localStorage ? (localStorage.getItem('user-lang') || 'ci') : 'ci',
    file = Ext.util.Format.format("resources/locale/{0}.js", lang);
    //file = Ext.util.Format.format("locale/{0}.js", lang);
    //extJsFile = Ext.util.Format.format("ext/packages/ext-locale/build/ext-locale-{0}.js", lang);

    Ext.Loader.loadScript({url: file, onError: function(){
    alert('Error loading locale file. Please contact system administrator.');
    }});
     //Ext.Loader.loadScript({url:extJsFile});
    }

    loadLocale();

    

Ext.define('Jdeveloper.Application', { //1
    extend: 'Ext.app.Application',
    
    name: 'Jdeveloper', //2

   views:[ //3
        'login.Login'
        
    ],

     controllers:[ //4
        //'Root',
        'Menu'
    ],

   /* stores: [ //5
        
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
                   // Ext.create('Jdeveloper.view.main.Main');
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


        
    }
});
