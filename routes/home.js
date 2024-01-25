const express = require("express");
const router = express.Router();

const iem_ranking_controller = require("../controllers/rankingController")

// GET catalog home page.
router.get("/", iem_ranking_controller.index);


router.get("/create", iem_ranking_controller.iemranking_create_get);

router.post("/create", iem_ranking_controller.iemranking_create_post);

router.get("/author/:id/delete", iem_ranking_controller.iemranking_delete_get);

router.post("/author/:id/delete", iem_ranking_controller.iemranking_delete_post);

router.get("/author/:id/update", iem_ranking_controller.iemranking_update_get);

router.post("/author/:id/update", iem_ranking_controller.iemranking_update_post);

router.get("/author/:id", iem_ranking_controller.iemranking_detail);

router.get("/authors", iem_ranking_controller.iemranking_list);

module.exports = router;