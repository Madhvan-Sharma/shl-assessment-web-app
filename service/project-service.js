const Project = require('../model/project');

module.exports.getAllProjects = function(){
    try {
        return Project.find({});
    } catch (error) {
        console.log('ERROR IN FETCHING PROJECTS: ', error);
        return;
    }
}
