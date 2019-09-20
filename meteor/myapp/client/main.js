import './main.html';

Template.profile.helpers({
    exampleHelper: ()=>{
        return "string returned by exampleHelper";
    },

    contextData: ()=>{
        return {
            text1: "texto1",
            text2: {
                textosub1: "sub 1",
                textosub2: "sub 2"
            }
        }
    },

    tasks: ()=>{
        return [
            {
                tarea: "tarea 1", estado: "finalizada"
            },
            {
                tarea: "tarea 2", estado: "inciiada"
            },
            {
                tarea: "tarea 3", estado: "stand by"
            },
            {
                tarea: "tarea 4", estado:    "aplazada"
            }
        ]
    }
});

Template.profile.events({
    'click button': (e, i)=>{
        console.log("Button clicked");
    }
});