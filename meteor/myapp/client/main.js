import './main.html';
import Profiles from "../collections";

Template.profile.created = () => {
    console.log("Created the profile template");
}

Template.profile.rendered = () => {
    console.log("Rendered the profile template");
}

Template.profile.destroyed = () => {
    console.log("Destroyed the profile template");
}


Template.profile.helpers({
    exampleHelper: () => {
        return "string returned by exampleHelper";
    },

    /*other helpers*/

    contextData: () => {
        return {
            text1: "texto1",
            text2: {
                textosub1: "sub 1",
                textosub2: "sub 2"
            }
        }
    },

    tasks: () => {
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
                tarea: "tarea 4", estado: "aplazada"
            }
        ]
    },

    profileList: () => {
        return [
            {
                name: "Juan Rodríguez", age: 25
            },
            {
                name: "María Gómez", age: 30
            },
            {
                name: "Esteban Martínez", age: 15
            },
            {
                name: "Luisa Sánchez", age: 19
            }
        ]
    },

    passingData: (myString1, myString2) => {
        console.log(`These are the strings ${myString1} ${myString2}`);
    },

    randomHelper: () => {
        return Session.get("randomNumber");
    },

    profilesCollection: () => {
        return Profiles.find({});
    }
});

Template.formulario.events({
    'submit form': (event) => {
        event.preventDefault();


        const target = event.target;
        const name = target.name.value;
        const date = target.date.value;

        console.log("date: ", date);

        // Insert a task into the collection
        Profiles.insert({
            name,
            age: 78
        });

        // Clear form
        target.name.value = '';
    }
});