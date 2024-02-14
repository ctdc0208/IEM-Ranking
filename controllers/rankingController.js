const Ranking = require("../models/IEMRanking")
const asyncHandler = require("express-async-handler")
const { body, validationResult } = require("express-validator");

exports.index = asyncHandler(async (req, res, next) => {
	const allRanking = await Promise.all([
		Ranking.find().exec(),
	]);

	const numberRanking = await Promise.all([
		Ranking.countDocuments({}).exec(),
	]);

	res.render("index", {
		title: "IEM Ranking",
		numberRanking: numberRanking,
		iemranking_list: allRanking,
	});
});

// Display list of all IEM-Ranking.
exports.iemranking_list = asyncHandler(async (req, res, next) => {

});

// Display detail page for a specific IEM-Ranking.
exports.iemranking_detail = asyncHandler(async (req, res, next) => {
	const [ ranking ] = await Promise.all([
		Ranking.findById(req.params.id).exec(),
	]);

	if (ranking === null) {
		// No results.
		const err = new Error("IEM not found");
		err.status = 404;
		return next(err);
	}

	res.render("iem_detail", {
		title: "IEM Detail",
		ranking: ranking,
	});
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

		const ranking = new Ranking({
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
				ranking: ranking,
				errors: errors.array(),
			});
			return;
		} else {
			// Data from form is valid.

			// Save author.
			await ranking.save();
			// Redirect to home.
			res.redirect("/");
		}
	}),
];

// Display IEM-Ranking. delete form on GET.
exports.iemranking_delete_get = asyncHandler(async (req, res, next) => {
	const [ranking] = await Promise.all([
		Ranking.findById(req.params.id).exec(),
	]);

	if (ranking === null) {
		// No results.
		res.redirect("/")
	}

	res.render("iem_delete", {
		title: "Delete IEM",
		ranking: ranking,
	});
});

// Handle IEM-Ranking. delete on POST.
exports.iemranking_delete_post = asyncHandler(async (req, res, next) => {
	const [ranking] = await Promise.all([
		Ranking.findById(req.params.id).exec(),
	]);

	if (ranking === null) {
		// No results.
		res.redirect("/")
	}

	await Ranking.findByIdAndDelete(req.body.rankingid);
	res.redirect("/")
});

// Display IEM-Ranking. update form on GET.
exports.iemranking_update_get = asyncHandler(async (req, res, next) => {
	const [ranking] = await Promise.all([
		Ranking.findById(req.params.id).exec(),
	]);

	if (ranking === null) {
		// No results.
		const err = new Error("IEM not found");
		err.status = 404;
		return next(err);
	}

	res.render("iemranking_form", {
		title: "Edit IEM: ",
		ranking: ranking,
	});
});

// Handle IEM-Ranking. update on POST.
exports.iemranking_update_post = [
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

		const ranking = new Ranking({
			model: req.body.model,
			rank: req.body.rank,
			value_rating: req.body.value_rating,
			price: req.body.price,
			signature: req.body.signature,
			comments: req.body.comments,
			tone_grade: req.body.tone_grade,
			technical_grade: req.body.technical_grade,
			setup: req.body.setup,
			_id: req.params.id,
		});

		if (!errors.isEmpty()) {
			// There are errors. Render form again with sanitized values/errors messages.
			res.render("iemranking_form", {
				title: "Edit IEM: ",
				ranking: ranking,
				errors: errors.array(),
			});
			return;
		} else {
			// Data from form is valid.

			// Save author.
			const updatedIEM = await Ranking.findByIdAndUpdate(req.params.id, ranking, {})
			// Redirect to IEM detail.
			res.redirect(updatedIEM.url);
		}
	}),
];