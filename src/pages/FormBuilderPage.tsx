import React, { FunctionComponent, useEffect } from "react";
import FormBuilder from "../components/FormBuilder/FormBuilder";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useNavigate, useParams } from "react-router-dom";
import {
  getSingleTemplate,
  setSelectedTemplateNull,
} from "../redux/entities/formBuilderEntity";
import useModalStrip from "../global-hooks/useModalStrip";

interface FormBuilderPageProps {}

const FormBuilderPage: FunctionComponent<FormBuilderPageProps> = () => {
  const template = useAppSelector(
    (state) => state.entities.formBuilder.selectedTemplate
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { showModalStrip } = useModalStrip();
  const { formId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const template = await dispatch(
          getSingleTemplate(formId as string)
        ).unwrap();
        console.log(template);
        if(!template){
          throw new Error('Not found');
        }
      } catch (ex) {
        showModalStrip("danger", "The form id is not correct", 5000);
        navigate("/");
      }
    })();

    return () => {
      // Setting template to null when unmounting.
      dispatch(setSelectedTemplateNull());
    };
  }, []);

  const defaultForm = {
    id: "0",
    formName: "",
    createdAt: 0,
    creator: "",
    formLayoutComponents: [],
    lastPublishedAt: 0,
    publishHistory: [],
    publishStatus: "draft",
    updatedAt: 0,
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
