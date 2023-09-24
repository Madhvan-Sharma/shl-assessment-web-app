const Project = require('../model/project');
const searchHandler = require('fuse.js');

const fuseOptions = {
	// isCaseSensitive: false,
	includeScore: true,
	shouldSort: true,
	// includeMatches: false,
	// findAllMatches: false,
	// minMatchCharLength: 1,
	// location: 0,
	threshold: process.env.SEARCH_QUERY_THRESHOLD,
	// distance: 100,
	// useExtendedSearch: false,
	// ignoreLocation: false,
	// ignoreFieldNorm: false,
	// fieldNormWeight: 1,
	keys: [
		"title",
		"technologies",
        "technical_skillset.frontend",
        "technical_skillset.backend",
        "technical_skillset.databases",
        "technical_skillset.infrastructure"
	]
};





module.exports.fetchSearchResults = async function(searchQuery){
    try {
        const allData = await Project.find({});
        const search = new searchHandler(allData, fuseOptions);        
        let results = await search.search(searchQuery);
		
		let finalResult = [];
		for(let result of results){
			finalResult.push(allData[result.refIndex]);
		}

        return finalResult;

    } catch (error) {
        console.log('ERROR IN FETCHING PROJECTS: ', error);
        return;
    }
}
