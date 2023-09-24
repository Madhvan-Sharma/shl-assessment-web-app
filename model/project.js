const mongoose = require('mongoose');


const projectSchema = new mongoose.Schema({
    title: String,
    technologies: [String],
    technical_skillset:{
        frontend: [String],   
        backend: [String],    
        databases: [String],  
        infrastructure: [String], 
    }
}, {
    timestamps: true
});


const Project = mongoose.model('Project', projectSchema);

module.exports = Project;