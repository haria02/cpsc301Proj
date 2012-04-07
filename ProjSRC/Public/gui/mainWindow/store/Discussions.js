
Ext.define('GUI.store.Discussions', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    fields: ['_id', 'title', 'topic', 'body', 'comments', 'author', 'date_created', 'date_modified'],
    sorters: ['topic', 'title'],
    groupField: 'topic',

    proxy: {
        type: 'rest',
        url : '/discussion',
        model : 'GUI.model.Discussions',
        reader: {
            type: 'json',
            root: 'data',

            successProperty: 'success'
        }
    }
});