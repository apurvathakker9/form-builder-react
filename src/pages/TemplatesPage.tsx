import React, { FunctionComponent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getAllTemplates } from "../redux/entities/formBuilderEntity";
import { useNavigate } from "react-router-dom";
import NewFormDialogComponent from "../components/FormTemplates/NewFormDialogComponent";
import FormLayoutComponent from "../components/FormTemplates/FormLayoutComponent";

interface TemplatesPageProps {}

const TemplatesPage: FunctionComponent<TemplatesPageProps> = () => {
  const templates = useAppSelector(
    (state) => state.entities.formBuilder.allTemplates
  );
  const dispatch = useAppDispatch();

  const [openDialog, setOpenDialog] = useState<boolean>(false);

  useEffect(() => {
    if (templates.length === 0) {
      dispatch(getAllTemplates());
    }
  }, []);

  const newFormLayout = {
    border: "1px dashed",
    width: "150px",
    height: "150px",
    fontSize: "2.7rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    borderRadius: "9px",
  };

  return (
    <>
      <div className="d-flex mt-5 flex-column align-items-center justify-content-center">
        <h3>All Form Templates</h3>
        <div className="form-templates row mt-3">
          <FormLayoutComponent
            createdFormLayout={false}
            setOpenDialog={setOpenDialog}
          />
          {templates.map((template) => (
            <FormLayoutComponent
              key={template.id}
              template={template}
              createdFormLayout={true}
            />
          ))}
        </div>
      </div>
      <NewFormDialogComponent
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
      />
    </>
  );
};

export default TemplatesPage;
