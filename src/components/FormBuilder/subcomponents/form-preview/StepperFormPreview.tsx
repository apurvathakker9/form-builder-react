import React, { FC, useState } from "react";
import RenderItem from "./RenderItem";
import { FormLayoutComponentsType } from "../../../../types/FormTemplateTypes";

const previewWindowStyle = {
  backgroundColor: 'white', 
  height: '81vh',
  overflowY:'scroll',
  border: '1px solid rgba(0,0,0,0.1)',
  borderRadius: '9px',
  boxShadow: '0 9px 90px #efefef',
  marginLeft: 'auto',
  marginRight: 'auto'
}

interface StepperFormPreviewProps{
  formLayoutComponents: FormLayoutComponentsType[];
  screenType: string
}

const StepperFormPreview: FC<StepperFormPreviewProps> = (props)=> {
  const [componentIndex, setComponentIndex] = useState(0);
  const { formLayoutComponents, screenType } = props;

  const component = formLayoutComponents[componentIndex];

  const nextPrevIndex = (val: number)=>{
    setComponentIndex((prev)=>prev + val);
  }

  const isMobile = screenType === 'mobile';

  return (
    <>
      {formLayoutComponents.length > 0 ? (
        <>
          <div className="m-t-30 p-30">
            <div style={{...previewWindowStyle as any,width: isMobile ? '400px':'initial'}} className="p-20">
              <div className="main-form">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                  style={{ minWidth: "100%" }}
                >
                  <div className="text-center border-bottom p-b-10">
                    Step {componentIndex + 1}
                  </div>

                  <div className="my-4">
                    <h4>{component.container.heading}</h4>
                    <p>{component.container.subHeading}</p>
                  </div>

                  {component.children.map((child, ind) => (
                    <div key={child.id} className="my-4">
                      <h5>{child.labelName + (child.required ? " *" : "")}</h5>
                      {child.description !== "" ? (
                        <>
                          <div className="mt-1">
                            <p>{child.description}</p>
                          </div>
                        </>
                      ) : null}
                      <RenderItem key={child.id} item={child} />
                      {/* {renderItem(child)} */}
                    </div>
                  ))}

                  {componentIndex !== 0 && (
                    <input
                      type="button"
                      className="btn btn-light btn-shadow m-t-20 m-l-0"
                      value="Back"
                      onClick={() => {
                        nextPrevIndex(-1);
                      }}
                    />
                  )}
                  {componentIndex < formLayoutComponents.length - 1 && (
                    <input
                      type="button"
                      className="btn btn-light btn-shadow m-t-20 m-l-0"
                      value="Next"
                      onClick={() => {
                        nextPrevIndex(1);
                      }}
                    />
                  )}
                  {componentIndex + 1 === formLayoutComponents.length && (
                    <input
                      type="submit"
                      className="btn btn-primary btn-shadow m-t-20 m-r-10"
                      value="Submit"
                    />
                  )}
                </form>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="m-t-30">
            <p>You need to add Containers and Controls to see output here.</p>
          </div>
        </>
      )}
    </>
  );
}

export default StepperFormPreview;
