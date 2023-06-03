import { combineReducers } from "@reduxjs/toolkit";
import formBuildeeEntity from "./entities/formBuildeeEntity";

export default combineReducers({
  formBuilder: formBuildeeEntity
});