import React, { FunctionComponent } from "react";
import FormBuilder from "../components/FormBuilder/FormBuilder";

interface FormBuilderPageProps {}

const FormBuilderPage: FunctionComponent<FormBuilderPageProps> = () => {

  const templateDetails = {
    id: '123',
    formName: 'Test Form',
    createdAt: 1234,
    creator: 'Apurva',
    // formLayoutComponents: [{
    //   container: {
    //     id: '176',
    //     controlName: "step-container",
    //     displayText: "Workflow Step",
    //     itemType: "container",
    //     icon: "fa fa-building",
    //     heading: "Container Heading",
    //     subHeading: "Container SubHeading",
    //   },
    //   children: []
    // }],
    formLayoutComponents: [],
    lastPublishedAt: 1234,
    publishHistory: [],
    publishStatus: 'draft',
    updatedAt: 18876
  };

  return (
    <>
      <FormBuilder template={templateDetails} />
    </>
  );
};

export default FormBuilderPage;
