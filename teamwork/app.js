const teamWorkSession = require('node-teamwork');
const teamWork = new teamWorkSession({ url: 'https://uniandesedu.teamwork.com', token: 'twp_scYsPM0DU3iCKgwrC1WJdREc3wkL'});


/*Lista de proyectos */
/*
teamWork.listProjects().then(response=>{
    for (let projects in response){
        var project = response[projects].projects;
        for(let prj in project){
            console.log(`Name: ${project[prj].name}; ID: ${project[prj].id}`);    
        }
    }
});
*/

/* Lista de tareas en un proyecto particular */

/*
teamWork.getProjectTasks({projectId : '494242'}).then(response=>{
    for (let tasks in response){
        var task = response[tasks]['todo-items'];
        for(let tk in task){
            //console.log(task[tk]); 
            console.log(task[tk].completed);  
            console.log(task[tk].timeIsLogged);  
            console.log(task[tk]['responsible-party-names']);
        }
}});
*/

/* Lista de tareas en un proyecto particular */

teamWork.getProjectTasks({projectId : '494242'}).then(response=>{
    for (let tasks in response.payload){
        console.log(response.payload[tasks]);    
    }
});