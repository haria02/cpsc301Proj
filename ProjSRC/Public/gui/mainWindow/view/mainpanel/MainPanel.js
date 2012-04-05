/*
 * File: gui/view/ui/mainpanel/MainPanel.js
 * Date: Fri Mar 23 2012 14:43:03 GMT-0600 (Mountain Daylight Time)
 *
 * This file was generated by Ext Designer version 1.2.2.
 * http://www.sencha.com/products/designer/
 */
 
var panels = [
	{
		xtype: 'panel',
		title: 'Home'
	},{
		xtype: 'panel',
        title: 'Discussions',
		items: [
			{
				xtype: 'discussionspanel',
				height: '100%'
			}
		]
	},{
		xtype: 'panel',
		title: 'Memos',
        layout: {
            type: 'column'
        },
        items: [
            {
                xtype: 'memoviewpanel',
                height: '100%'

            },
            {
                xtype: 'memoviewlist',
                height: '100%'
            }
        ]
	},{
		xtype: 'panel',
		title: 'Documents'
	},{
		xtype: 'panel',
		title: 'Policies'
	},{
		xtype: 'panel',
		title: 'Media'
	},{
		xtype: 'panel',
		title: 'Calendar'
	},{
		xtype: 'panel',
		title: 'Profile'
	}
];

Ext.define('GUI.view.mainpanel.MainPanel', {
    extend: 'Ext.tab.Panel',
	alias: 'widget.mainpanel',

    minheight: 300,

    activeTab: 0,

    initComponent: function() {
        var me = this;

		if(admin==true){
			Ext.applyIf(me, {
				items: [
					panels   
					,{
						xtype: 'panel',
						title: 'Admin',
                        layout:
                        {
                            type: 'accordion'
                        },
                        items:[
                            {
                                xtype: 'userlist'
                            },
                            {
                                xtype: 'memoeditor'
                            }


                        ]
					}
				]
			});
		}else{
			Ext.applyIf(me, {
				items: [panels]
			});
		}
		
        me.callParent(arguments);
    }
});