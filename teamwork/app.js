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

teamWork.getProjectTasks({projectId : '494242'}).then(tasks=>{
    for (let tk in tasks){
        var obj = tasks[tk][Object.keys(tasks[tk])[1]];
        for(let ob in obj){
            console.log(obj[ob].description);    
        }
        
        
}});




//console.log(teamWork.listProjects());

//return google.login(data.username, data.password).then(token => { return token } )