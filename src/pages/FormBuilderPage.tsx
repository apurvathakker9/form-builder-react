import React, { FunctionComponent, useEffect } from "react";
import FormBuilder from "../components/FormBuilder/FormBuilder";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useParams } from "react-router-dom";
import { getSingleTemplate, setSelectedTemplateNull } from "../redux/entities/formBuildeeEntity";

interface FormBuilderPageProps {}

const FormBuilderPage: FunctionComponent<FormBuilderPageProps> = () => {

  const template = useAppSelector((state)=>state.entities.formBuilder.selectedTemplate);
  const dispatch = useAppDispatch();
  const { formId }= useParams();

  useEffect(()=>{
    dispatch(getSingleTemplate(formId as string));

    return ()=>{
      // Setting template to null when unmounting.
      dispatch(setSelectedTemplateNull());
    }
  },[]);

  const defaultForm = {
    id: '0',
    formName: '',
    createdAt: 0,
    creator: '',
    formLayoutComponents: [],
    lastPublishedAt: 0,
    publishHistory: [],
    publishStatus: 'draft',
    updatedAt: 0
  };

  return (
    <>
      {template ? (
        <FormBuilder template={template ? template : defaultForm} />
      ) : null}
    </>
  );
};

export default FormBuilderPage;
