import routes from "../../../../shared/Route/routes";

// subroute
import TrackSubroute from "./screens/Track/route";
import ShipmentSubroute from "./screens/Shipment/route";

export default {
  path: null,
  name: null,

  subroutes: {
    TRACK: TrackSubroute,
    SHIPMENT: ShipmentSubroute,
  },
};
