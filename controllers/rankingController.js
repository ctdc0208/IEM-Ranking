const Ranking = require("../models/IEMRanking")
const asyncHandler = require("express-async-handler")
const { body, validationResult } = require("express-validator");

exports.index = asyncHandler(async (req, res, next) => {
	const [
		rank,
		value_rating,
		model,
		price,
		signature,
		comments,
		tone_grade,
		technical_grade,
		setup,
	] = await Promise.all([
		Ranking.countDocuments({}).exec(),
	]);

	res.render("index", {
		title: "IEM Ranking",
		rank: rank,
		value_rating: value_rating,
		model: model,
		price: price,
		signature: signature,
		comments: comments,
		tone_grade: tone_grade,
		technical_grade: technical_grade,
		setup: setup,
	})
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
	res.render("iemranking_form", { title: "Add IEM Ranking" });
});

// Handle IEM-Ranking. create on POST.
exports.iemranking_create_post = [
	body("model")
		.trim()
		.isLength({ min: 1 })
		.escape()
		.withMessage("IEM Model"),
	body("rank")
		.trim()
		.isLength({ min: 1 })
		.escape()
		.withMessage("IEM Rank"),
	body("value_rating")
		.trim()
		.isLength({ min: 1 })
		.escape()
		.withMessage("Value Rating"),
	body("price")
		.trim()
		.isLength({ min: 1 })
		.escape()
		.withMessage("Price"),
	body("signature")
		.trim()
		.isLength({ min: 1 })
		.escape()
		.withMessage("Sound Signature"),
	body("comments")
		.trim()
		.isLength({ min: 1 })
		.escape()
		.withMessage("Comments"),
	body("tone_grade")
		.trim()
		.isLength({ min: 1 })
		.escape()
		.withMessage("tone_grade"),
	body("technical_grade")
		.trim()
		.isLength({ min: 1 })
		.escape()
		.withMessage("technical_grade"),
	body("setup")
		.trim()
		.isLength({ min: 1 })
		.escape()
		.withMessage("Sound Setup"),

	// Process request after validation and sanitization.
	asyncHandler(async (req, res, next) => {
		// Extract the validation errors from a request.
		const errors = validationResult(req);

		const iemranking = new Ranking({
			model: req.body.model,
			rank: req.body.rank,
			value_rating: req.body.value_rating,
			price: req.body.price,
			signature: req.body.signature,
			comments: req.body.comments,
			tone_grade: req.body.tone_grade,
			technical_grade: req.body.technical_grade,
			setup: req.body.setup,
		});

		if (!errors.isEmpty()) {
			// There are errors. Render form again with sanitized values/errors messages.
			res.render("iemranking_form", {
				title: "Add IEM Rank",
				iemranking: iemranking,
				errors: errors.array(),
			});
			return;
		} else {
			// Data from form is valid.

			// Save author.
			await iemranking.save();
			// Redirect to home.
			res.redirect("/");
		}
	}),
];

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