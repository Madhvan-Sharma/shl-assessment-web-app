const searchService = require('../service/search-service');

module.exports.fetchSearchResults = async function(req, res){
    try {
        let searchQuery = req.query.q;
        let resultData = await searchService.fetchSearchResults(searchQuery);
        
        return res.render('index', {
            projects: resultData,
            heading: `Found ${resultData.length} matching "${searchQuery}"`
        });
        
    } catch (error) {
        console.log('ERROR: ', error);
        return res.status(500).json("Something bad occurred");
    }
}