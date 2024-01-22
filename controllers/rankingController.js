const Ranking = require("../models/IEMRanking")
const asyncHandler = require("express-async-handler")

exports.index = asyncHandler(async (req, res, next) => {
	res.send("NOT IMPLEMENTED: Site Home Page");
});

// Display list of all IEM-Ranking.
exports.iemranking_list = asyncHandler(async (req, res, next) => {
	res.send("NOT IMPLEMENTED: IEMRanking list");
});

// Display detail page for a specific IEM-Ranking.
exports.iemranking_detail = asyncHandler(async (req, res, next) => {
	res.send(`NOT IMPLEMENTED: IEMRanking detail: ${req.params.id}`);
});

// Display IEM-Ranking. create form on GET.
exports.iemranking_create_get = asyncHandler(async (req, res, next) => {
	res.send("NOT IMPLEMENTED: IEMRanking create GET");
});

// Handle IEM-Ranking. create on POST.
exports.iemranking_create_post = asyncHandler(async (req, res, next) => {
	res.send("NOT IMPLEMENTED: IEMRanking create POST");
});

// Display IEM-Ranking. delete form on GET.
exports.iemranking_delete_get = asyncHandler(async (req, res, next) => {
	res.send("NOT IMPLEMENTED: IEMRanking delete GET");
});

// Handle IEM-Ranking. delete on POST.
exports.iemranking_delete_post = asyncHandler(async (req, res, next) => {
	res.send("NOT IMPLEMENTED: IEMRanking delete POST");
});

// Display IEM-Ranking. update form on GET.
exports.iemranking_update_get = asyncHandler(async (req, res, next) => {
	res.send("NOT IMPLEMENTED: IEMRanking update GET");
});

// Handle IEM-Ranking. update on POST.
exports.iemranking_update_post = asyncHandler(async (req, res, next) => {
	res.send("NOT IMPLEMENTED: IEMRanking update POST");
});