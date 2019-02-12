const teamWorkSession = require('node-teamwork');
const teamWork = new teamWorkSession({ url: 'https://uniandesedu.teamwork.com', token: 'twp_scYsPM0DU3iCKgwrC1WJdREc3wkL'});
/*
teamWork.listProjects().then(response=>{
    var id=[];
    for (let rsp in response){
        var projects = response[rsp].projects;
        for(let prj in projects){
            console.log(`Name: ${projects[prj].name}; ID: ${projects[prj].id}`);    
        } 
        
}});
*/

teamWork.getProjectTasks({projectId : '494242'}).then(response=>{
    for (let tasks in response){
        var task = response[tasks]['todo-items'];
        for(let tk in task){
            console.log(task[tk]); 
            console.log(task[tk].completed);  
            console.log(task[tk].timeIsLogged);  
            console.log(task[tk]['responsible-party-names']);
        }
}});




//console.log(teamWork.listProjects());

//return google.login(data.username, data.password).then(token => { return token } )