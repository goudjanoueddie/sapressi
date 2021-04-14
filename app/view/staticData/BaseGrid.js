Ext.define('Jdeveloper.view.staticData.BaseGrid',{
    //extend:'Ext.ux.LiveSearchGridPanel',
    extend: 'Ext.grid.Panel',
   
    xtype:'staticdatagrid',

    requires:[
        'Ext.button.Button',
        'Ext.grid.column.Date',
        'Ext.grid.column.Widget',
        'Ext.grid.filters.Filters',
        'Ext.grid.plugin.CellEditing',
        'Ext.toolbar.Separator',
        'Jdeveloper.util.Glyphs'
    ],

    columnLines:true,
    viewConfig:{
        stripeRows:true
    },

    initComponent:function(){
        var me = this;
        /*me.selModel={
            selType:'cellmodel'
        };*/

        me.plugins = [
            {
                ptype:'cellediting',
                clicksToEdit:2,
                pluginId:'cellplugin'
            },

            {
                ptype:'gridfilters'
            }
        ];

        //docked Items
        me.dockedItems=[
            {
                xtype:'toolbar',
                dock:'top',
                itemId:'topToolbar',
                items:[
                    {
                        xtype:'button',
                        itemId:'add',
                        text:'Ajouter',
                        glyph:Jdeveloper.util.Glyphs.getGlyph('add')
                    },

                    {
                        xtype:'tbseparator'
                    },

                    {
                        xtype:'button',
                        itemId:'save',
                        text:'Enregistrer',
                        glyph:Jdeveloper.util.Glyphs.getGlyph('saveAll')
                    },

                    {
                        xtype:'button',
                        itemId:'cancel',
                        text:'Annuler',
                        glyph:Jdeveloper.util.Glyphs.getGlyph('cancel')
                    },

                    {
                        xtype:'tbseparator'
                    },

                    {
                        xtype:'button',
                        itemId:'clearfilters',
                        text:'Clear Filters',
                        glyph:Jdeveloper.util.Glyphs.getGlyph('clearFilter')

                    }
                ]
            }
        ];

        me.columns=Ext.Array.merge(
            me.columns,
            [
               
                {
                    xtype:'widgetcolumn',
                    width:45,
                    sortable:false,
                    menuDisabled:true,
                    itemId:'delete',

                    widget:{

                        xtype:'button',
                        glyph:Jdeveloper.util.Glyphs.getGlyph('destroy'),
                        tooltip:'Delete',
                        scope:me,

                        handler:function(btn){
                            var record = btn.getWidgetRecord();
                            var fieldName = record.store.model.prototype.fields[2].getName();
                            var messageVal  ='Etes vous sur de vouloir supprimer <p>' + record.get(fieldName) + '?'

                            Ext.Msg.confirm({
                                title:'Attention',
                                iconCls: 'fa fa-trash',
                                height: 200,
                                width: 400,
                                msg: messageVal,
                                fn: del,
                                buttons: Ext.Msg.YESNO,
                                scope: me
                            });

                            function del (choice) {
                                if (choice === 'yes'){
                                    Ext.GlobalEvents.fireEvent('widgetclickdelete',me, btn);
                                }
                            }
                        }
                    }

                }
            ]

        );

        me.validateRow = function(record,rowIndex){
            var me = this,
            view = me.getView(),
            errors=record.validate();

            if(errors.isValid()){
                return true;
            }

            var columnIndexes = me.getColumnIndexes();
            Ext.each(columnIndexes,function(columnIndex,col){

                var cellErrors,cell,messages;
                cellErrors=errors.getByField(columnIndex);

                if (!Ext.isEmpty(cellErrors)) {
                    cell = view.getCellByPosition({
                        row: rowIndex, column: col
                    });
                    messages = [];
                    Ext.each(cellErrors, function (cellError) { //#6
                        messages.push(cellError.message);
                    });
                    cell.addCls('x-form-error-msg x-form-invalid-icon x-form-invalid-icon-default'); //#7

                    cell.set({ //#8
                        'data-errorqtip': Ext.String.format('<ul><li class="last">{0}</li></ul>',
                    messages.join('<br/>'))
                });
                }

            });

            return false;
        };

        me.getColumnIndexes = function() {
            var me = this,
                columnIndexes = [];
            Ext.Array.each(me.columns, function (column) { //#9
                if (Ext.isDefined(column.getEditor())) {   //#10
                    columnIndexes.push(column.dataIndex);  //#11
                } else {
                    columnIndexes.push(undefined);
                }
            });
            return columnIndexes; //#12
        };

        me.validate = function(){
            var me = this,
                isValid = true,
                view = me.getView(),
                error,
                record;
            Ext.each(view.getNodes(), function (row, col) { //#13
                record = view.getRecord(row);
                isValid = (me.validateRow(record, col) && isValid); //#14
            });
            error = isValid ? undefined : { //#15
                title: "Enregistrement invalide",
                message: "Merci d'apporter des corrections"
            };
            return error; //#16
        };

        me.callParent(arguments);
    }

});