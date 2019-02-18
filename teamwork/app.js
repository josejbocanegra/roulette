const teamWorkSession = require('node-teamwork');
const teamWork = new teamWorkSession({ url: 'https://uniandesedu.teamwork.com', token: 'twp_scYsPM0DU3iCKgwrC1WJdREc3wkL'});

/*
teamWork.listProjects().then(response=>{
     for (let projects in response){
        var project = response[projects].projects;
        for(let prj in project){
            console.log(`Name: ${project[prj].name}; ID: ${project[prj].id}`);    
        } 
        
}});*/


teamWork.getProjectTasks({projectId : '494242'}).then(response=>{
    for (let tasks in response.payload){
        console.log(response.payload[tasks]);    
    }
});