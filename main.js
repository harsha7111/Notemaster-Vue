const app = new Vue ({
    el: '#app',
    data: {
        title: 'Notemaster',
        note: {
            title: '',
            text: ''
        },
        notes:[
            {
                title: 'Completed basic Vue course',
                text: 'Vue is amazing and easy to learn'
            }
        ]
    },
    methods: {
        addNote() {
            //this.notes.push(this.note);
            let {title, text} = this.note;
            this.notes.push({
                title,
                text,
                date: new Date(Date.now()).toLocaleString()
            })
        },
        removeNote(index) {
            this.notes.splice(index, 1);
        }
    }
})
