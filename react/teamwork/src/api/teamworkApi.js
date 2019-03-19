const axios = require("axios");

var company = "https://uniandesedu.teamwork.com";
var key = "twp_scYsPM0DU3iCKgwrC1WJdREc3wkL";

var base64 = new Buffer(key + ":xxx").toString("base64");

var Api = {

	getProjects(){
		return axios({
		    method: "get",
		    url: company + "/projects.json",
		    headers: {
		        "Authorization": "BASIC " + base64,
		        "Content-Type": "application/json"
		    }
			  
		})
	},

	getTaskList(project){
		return axios({
		    method: "get",
		    url: company + `/projects/${project}/tasklists.json`,
		    headers: {
		        "Authorization": "BASIC " + base64,
		        "Content-Type": "application/json"
		    }
			  
		})
	},

	getTasksByProject(project){
		return axios({
		    method: "get",
		    url: company + `/projects/${project}/tasks.json`,
		    headers: {
		        "Authorization": "BASIC " + base64,
		        "Content-Type": "application/json"
		    },
		    params: {
		    	includeCompletedTasks: true
		    }
			  
		})
	}

}

module.exports = Api;
