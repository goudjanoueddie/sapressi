Ext.define('Jdeveloper.util.Util',{

    statics:{

       

        decodeJSON : function (text) {

            var result=Ext.JSON.decode(text,true);

            if(!result){

                result={};
                result.success=false;
                result.msg=text;

            }
        
            return result;
        
        },

        showErrorMsg:function(text){

            Ext.Msg.show({
                title:'Error!',
                msg:text,
                icon:Ext.Msg.ERROR,
                buttons:Ext.Msg.OK
        });

        },
        isLetter:function (text) {
            return(text.toLowerCase()!=text.toUpperCase());
        },

        showToast: function(text) {
            var w = Ext.create('Ext.window.Toast', {
                html: text,
                closable: false,
                align: 't',
                slideInDuration: 400,
                minWidth: 400
            });
            w.show();
        },
        handleFormFailure:function (action) {
            var me = this,
                result =
                    Jdeveloper.util.Util.decodeJSON(action.response.responseText);
            switch (action.failureType) {
                case Ext.form.action.Action.CLIENT_INVALID:
                    me.showErrorMsg('Form fields may not be submitted with invalid values'); //#1
                    break;
                case Ext.form.action.Action.CONNECT_FAILURE:
                    me.showErrorMsg(action.response.responseText);
                    break;
                case Ext.form.action.Action.SERVER_INVALID:
                    me.showErrorMsg(result.msg);
            }
        },

        required: '<span style="color:red;font-weight:bold" data-qtip="Required"> *</span>',
    }


});