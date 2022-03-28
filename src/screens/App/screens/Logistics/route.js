import routes from "../../../../shared/Route/routes";

// subroute
import TrackSubroute from "./screens/Track/route";

export default {
  path: null,
  name: null,

  subroutes: {
    TRACK: TrackSubroute,
  },
};
