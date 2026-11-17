// Router for /api/hosts - only paths -> controller functions (no logic, no SQL).
//
// Step 4: GET /:hostId/listings -> all the places of one host

const express = require("express");
const router = express.Router();
const hostController = require("../controllers/hosts.controller.js");
router.get("/:hostId/listings",hostController.getHostListings);

module.exports = router;