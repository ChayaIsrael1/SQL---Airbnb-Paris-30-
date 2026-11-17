// Controller for /api/hosts
//
// Step 4: getHostListings(req, res)
//   - hostId is not a number -> 400, no places found -> 404
//   - try/catch -> 500 { error }

const hostsDal = require("../dal/hosts.dal.js");

async function getHostListings(req, res) {
  try {
    const hostId = Number(req.params.hostId);

    if (!req.params.hostId || Number.isNaN(hostId)) {
      return res.status(400).json({ error: "hostId is not a number" });
    }

    const hosts = await hostsDal.getListingsByHost(hostId);

    if (!hosts || hosts.length === 0) {
      return res.status(404).json({ error: "No priced listings found for this host" });
    }

    return res.status(200).json(hosts);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {getHostListings};
