import { filmAdminReducer } from "./filmAdminReducer";
import { filmReducer } from "./filmReducer";
import filmsFilterReducer from "./filmsFilterReducer";
import { filmsReducer } from "./filmsReducer";
import { searchReaducer } from "./searchReducer";
import { userReducer } from "./userReducer";

const { combineReducers } = require("redux");
const { filmsAdminReducer } = require("./filmsAdminReducer");

const rootReducer = combineReducers({
  filmsAdmin: filmsAdminReducer,
  filmAdmin: filmAdminReducer,
  films: filmsReducer,
  filmsFilter: filmsFilterReducer,
  film: filmReducer,
  search: searchReaducer,
  user: userReducer,
});

export default rootReducer;
