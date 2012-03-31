/*
 * File: gui/view/ui/mainpanel/MainPanel.js
 * Date: Fri Mar 23 2012 14:43:03 GMT-0600 (Mountain Daylight Time)
 *
 * This file was generated by Ext Designer version 1.2.2.
 * http://www.sencha.com/products/designer/
 */

Ext.define('GUI.view.mainpanel.MainPanel', {
    extend: 'Ext.tab.Panel',
	alias: 'widget.mainpanel',

    minheight: 300,

    activeTab: 0,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
				{
					xtype: 'panel',
					title: 'Home'
				},
                {
                    xtype: 'panel',
                    title: 'Discussions',
                    items: [
                        {
                            xtype: 'discussionspanel',
                            height: '100%'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    title: 'Memos'
                },
                {
                    xtype: 'panel',
                    title: 'Documents'
                },
                {
                    xtype: 'panel',
                    title: 'Policies'
                },
                {
                    xtype: 'panel',
                    title: 'Media'
                },
                {
                    xtype: 'panel',
                    title: 'Calendar'
                },
                {
                    xtype: 'panel',
                    title: 'Profile'
                },
                {
                    xtype: 'panel',
                    title: 'Admin'
                }
            ]
        });

        me.callParent(arguments);
    }
});