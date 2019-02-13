const teamWorkSession = require('node-teamwork');
const teamWork = new teamWorkSession({ url: 'https://uniandesedu.teamwork.com', token: 'twp_scYsPM0DU3iCKgwrC1WJdREc3wkL'});

teamWork.listProjects().then(response=>{
    var id=[];
    for (let rsp in response){
        var projects = response[rsp].projects;
        for(let prj in projects){

            let id = projects[prj].id; 
            let name = projects[prj].name;
            teamWork.getProjectPeople({projectId:id}).then(response=>{
                console.log("Proyecto name: " + name);
                for (let people in response.payload){
                    let person = response.payload[people];
                    for (let per of person){
                        console.log(per.id);
                        console.log(per['user-name']);
                    }
                }
            });
            //console.log(`Name: ${projects[prj].name}; ID: ${projects[prj].id}`);    
        } 
        
}});


/*teamWork.getProjectTasks({projectId : '494242'}).then(response=>{
    for (let tasks in response){
        var task = response[tasks]['todo-items'];
        for(let tk in task){
            console.log(task[tk]); 
            console.log(task[tk].completed);  
            console.log(task[tk].timeIsLogged);  
            console.log(task[tk]['responsible-party-names']);
        }
}});*/




//console.log(teamWork.listProjects());

//return google.login(data.username, data.password).then(token => { return token } )