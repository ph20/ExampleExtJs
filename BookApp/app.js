/**
 * Created by sash on 04.05.14.
 */
Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'BookApp',
    appFolder: 'app',
	controllers: ['Books'],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'booklist'
            }
        });
    }
});
