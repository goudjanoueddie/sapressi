Ext.define('Jdeveloper.view.security.UserController',{
    extend:'Ext.app.ViewController',

    alias:'controller.user',

    requires:[
        'Jdeveloper.model.security.User',
        'Jdeveloper.util.Util',
        'Jdeveloper.view.security.UserForm'
    ],

    

    onAdd:function(button,e,options){
        
        this.createDialog(null);
        
    },

    onEdit:function(button,e,options){

        var me=this,
        records= me.getRecordsSelected();

        if(records[0]){
            console.log('record selected');
            console.log(records[0]);
            me.createDialog(records[0]);
        }
    },

    createDialog: function(record){

        var me = this,
            view = me.getView();

        me.dialog = view.add({
            xtype:'user-form',
            viewModel: {
                data: {
                    title: record ? 'Edit: '+ record.get('name'):'Ajouter Utilisateur',
                    currentUser: record || new Jdeveloper.model.security.User
                    
                }
            }
        });

        me.dialog.show();
    },

    getRecordsSelected:function(){
        var me=this;
        var grid=this.lookupReference('usersGrid');
        return grid.getSelection();
    },

    onDelete:function(button,e,options){
        var me = this,
        view = me.getView(),
        records = me.getRecordsSelected(), //#1
        store = me.getStore('users');      //#2
    if (store.getCount() >= 2 && records.length){ //#3
        Ext.Msg.show({
            title:'Suppression?', //#4
            msg: 'Etes vous certain de vouloir supprimer?',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (buttonId){
                if (buttonId == 'yes'){ //#5
                    store.remove(records); //#6
                    store.sync();          //#7
                }
            }
        });
    } else if (store.getCount() === 1) { //#8
        Ext.Msg.show({
            title:'Attention',
            msg: 'Vous ne pouvez pas supprimer tous les utilisateurs',
            buttons: Ext.Msg.OK,
            icon: Ext.Msg.WARNING
    });
    }

    },

    onSave:function(button,e,options){

        var me = this;
        form=me.lookupReference('form');
        if(form && form.isValid())
        {
            me.getView().mask('Enregistrement ... Patientez');

            form.submit({
                clientValidation:true,
                url:'php/user/save.php',
                scope:me,
                success:'onSaveSuccess',
                failure:'onSaveFailure'
            });

            me.getView().unmask();

        }
    },

    onSaveSuccess:function(form,action){
        var me = this;
        me.onCancel();
        //me.refresh();
        Jdeveloper.util.Util.showToast('Succes! Utilisateur enregistre.');
        //me.refresh();
    },

    onSaveFailure:function(form,action){
        Jdeveloper.util.Util.handleFormFailure(action)
    },

    onCancel:function(button,e,options){
        var me = this;
        me.dialog=Ext.destroy(me.dialog);
    },

    refresh:function(button,e,options){
        var me = this,
        store=me.getStore('users');
        store.load();
    },

    onFileFieldChange: function(fileField, value, options) {
        var me = this,
            file = fileField.fileInputEl.dom.files[0], //#1
            picture = this.lookupReference('userPicture'); //#2
        if (typeof FileReader !== 'undefined' && (/image/i).test(file.type)) { //#3
            var reader = new FileReader();       //#4
            reader.onload = function(e){         //#5
                picture.setSrc(e.target.result); //#6
            };
            reader.readAsDataURL(file);          //#7
        } else if (!(/image/i).test(file.type)){ //#8
            Ext.Msg.alert('Attention', 'Vous pouvez uplaodez que des fichiers images!');
            fileField.reset();                   //#9
        }

    }

});