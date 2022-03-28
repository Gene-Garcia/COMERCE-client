import routes from "../../../../../../shared/Route/routes";

// subroutes
import TrackAndSearchSubroute from "./screens/TrackAndSearch/route";
import WithMeSubroute from "./screens/WithMe/route";

export default {
  path: null,
  name: null,

  subroutes: {
    TRACK_AND_SEARCH: TrackAndSearchSubroute,
    WITH_ME: WithMeSubroute,
  },
};
