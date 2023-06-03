import { combineReducers } from "@reduxjs/toolkit";
import formBuildeeEntity from "./entities/formBuilderEntity";

export default combineReducers({
  formBuilder: formBuildeeEntity
});