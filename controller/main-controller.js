const { localsName } = require('ejs');
const projectService = require('../service/project-service');

module.exports.getProjects = async function(req, res){

    try {
        let data = await projectService.getAllProjects();
        return res.render('index', {
            projects: data,
            heading: "All Projects"
        });

    } catch (err) {
        console.log('ERROR: ', err);
        return;
    }

}

