Ext.define('GUI.controller.Memos', {
    extend: Ext.app.Controller,
    views: [
        'admin.memomanagement.Memoeditor'
    ],
    models: [
        'Memo'
    ],
    stores: [
        'Memos'
    ],
    init: function(){
        this.control({
            'form toolbar button[action=postmemo]': {
                click: this.create_post_memo
            }
        })
    },

    create_post_memo: function(){
        /*
            to validate Memo body and Memo title
         */
<<<<<<< HEAD
        if(Ext.getCmp('memotopic').getValue().trim().length == 0
           || Ext.getCmp('memobodyedit').getValue().trim().length == 0){
=======
		 var topicValid = this.validate_memotopic(Ext.getCmp('memotopic').getValue().trim())
        var bodyValid = this.validate_memobody(Ext.getCmp('memobodyedit').getValue().trim())
		
		if( !topicValid || !bodyValid ){
>>>>>>> JAFB-master

           // Ext.MessageBox.alert('Error', "Memo must have title and body !!!");
			if( !topicValid )
				Ext.MessageBox.alert('Error', "Memo topic is invalid");
				
			else if( !bodyValid )
				Ext.MessageBox.alert('Error', "Memo body is invalid");

        } else {
            var date = new Date();
            var newMemoRec = Ext.create('GUI.model.Memo', {
                title: Ext.getCmp('memotopic').getValue(),
                content: Ext.getCmp('memobodyedit').getValue(),
                date_created: date,
                date_modified: date,
                author: useremail
            });
            var memoStore = this.getStore('Memos');
            memoStore.add(newMemoRec);
            console.log(newMemoRec);
            memoStore.save();

            newMemoRec.commit(); // commit the new record into local store object.

            Ext.getCmp('memotopic').setValue('');
            Ext.getCmp('memobodyedit').setValue('');
        }
<<<<<<< HEAD
    }
=======
    },
	
	//validates topic of memo, returns true or false
	validate_memotopic: function(memotopic){
		if(  memotopic.length < 3 || memotopic.length > 100 )
			return false;
	
		return true;
	}, 
	
	//validates body of memo, returns true or false
	validate_memobody: function(memobody) {
		if(  memobody.length < 3 )
			return false;
	
		return true;
	}
	

>>>>>>> JAFB-master
})