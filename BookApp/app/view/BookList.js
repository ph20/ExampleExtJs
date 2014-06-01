/**
 * Created by sash on 04.05.14.
 */
Ext.define('BookApp.view.BookList' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.booklist',

    title: 'Библиотека',
	store: 'BookStore',
    dockedItems: [{
			xtype: 'pagingtoolbar',
			store: 'BookStore',
			dock: 'bottom',
			displayInfo: true,
			beforePageText: 'Страница',
			afterPageText: 'из {0}',
			displayMsg: 'Записи {0} - {1} из {2}'
		}],

    initComponent: function() {
        this.columns = [
            {header: 'Название',  dataIndex: 'name',  flex: 1},
			{header: 'Автор',  dataIndex: 'author',  flex: 1},
            {header: 'Год', dataIndex: 'year', flex: 1}
        ];

        this.callParent(arguments);
    }
});
