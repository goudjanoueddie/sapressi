Ext.define('Jdeveloper.controller.Menu',{
    extend:'Ext.app.Controller',


    stores:[
        'Menu'
    ],


    renderDynamicMenu:function(view,options){

        console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
        var dynamicMenus=[];
        view.body.mask('Loading Menus... Please wait...');

        this.getMenuStore().load(function(records,op,success){

            Ext.each(records, function(root){

                var menu = Ext.create('Jdeveloper.view.menu.Tree',{
                    //title: translations[root.get('text')],
                    title: root.get('text'),
                    iconCls: root.get('iconCls')
                });

                var treeNodeStore = root.items(),
                    nodes = [],
                    item;

                for (var i=0; i<treeNodeStore.getCount(); i++){
                    item = treeNodeStore.getAt(i);

                   nodes.push({
                        //text: translations[item.get('text')],
                        text: item.get('text'),
                        leaf: true,
                        glyph: item.get('iconCls'),
                        id: item.get('id'),
                        className: item.get('className')
                    });
                }

                menu.getRootNode().appendChild(nodes);

                dynamicMenus.push(menu);
            });

            view.add(dynamicMenus);
            view.body.unmask();
        });


    },


    onTreePanelItemClick:function(view,record,item,index,event,options){

    },

    init:function(application){

        this.control({
            "menutree":{
                itemclick:this.onTreePanelItemClick
            },
            "mainmenu":{
                render:this.renderDynamicMenu
            }

        });
    }

});