Ext.define('Jdeveloper.view.login.CapsLockTooltip',{
    extend:'Ext.tip.QuickTip',
    xtype:'capslocktooltip',
    target:'password',
    anchor:'top',
    anchorOffset:0,
    width:300,
    dismissDelay:0,
    autoHide:false,

    title:'<div class="fa fa-exclamation-triangle">Touche Majuscule active</div>',

    html: '<div>Avoir la touche majuscule active peut entrainer ' +
            'un mot de passe incorrecte</div><br/>' +
            '<div>Assurez vous de bien rentrer vos informations ' 
            


});