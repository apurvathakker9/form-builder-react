import { useEffect, useState } from "react";
import {
  TemplateType,
  FormLayoutComponentsType,
  FormLayoutComponentChildrenType,
  FormLayoutComponentContainerType,
} from "../../../types/FormTemplateTypes";
import { FormItemTypes } from "../../../utils/formBuilderUtils";
import { generateID } from "../../../utils/common";


interface useFormBuilderProps{
  template: TemplateType
}

const useFormBuilder = (props: useFormBuilderProps) => {
  const [selectedTemplate, setSelectedTemplate] = useState<null | TemplateType>(props.template);
  const [formLayoutComponents, setFormLayoutComponents] = useState<
    FormLayoutComponentsType[]
  >(props.template.formLayoutComponents);
  const [selectedControl, setSelectedControl] = useState<
    | undefined
    | FormLayoutComponentContainerType
    | FormLayoutComponentChildrenType
  >(undefined);

  useEffect(()=>{
    console.log('Form components changed',formLayoutComponents);
  },[formLayoutComponents]);

  // Handles a Container or a Component added on the form builder
  const handleItemAdded = (item: FormLayoutComponentChildrenType | FormLayoutComponentContainerType, containerId?: string) => {
    if (item.itemType === FormItemTypes.CONTAINER) {
      const newState = formLayoutComponents.slice();
      newState.push({
        container: { ...item as FormLayoutComponentContainerType, id: generateID() },
        children: [],
      });
      setFormLayoutComponents(newState);
    } else if (item.itemType === FormItemTypes.CONTROL) {
      const newState = formLayoutComponents.slice();
      const formContainer = newState.filter((con, ind) => {
        return con.container.id === containerId;
      })[0];
      console.log(formContainer,newState);
      const obj = { ...item as FormLayoutComponentChildrenType, id: generateID(), containerId: containerId };

      // Create a deep copy of items.
      const childItem = item as FormLayoutComponentChildrenType
      if (childItem.items) {
        obj.items = JSON.parse(JSON.stringify(childItem.items));
      }
      formContainer.children.push(obj as FormLayoutComponentChildrenType);
      setFormLayoutComponents(newState);
    }
  };

  // Delete a container from the layout
  const deleteContainer = (containerId: string) => {
    if (confirm("Are you sure you want to delete container?")) {
      const newState = formLayoutComponents.filter(
        (comp) => comp.container.id !== containerId,
      );
      setFormLayoutComponents(newState);
      setSelectedControl((prev) =>
        prev &&
        (prev.id === containerId ||
          (prev as FormLayoutComponentChildrenType).containerId === containerId)
          ? undefined
          : prev
      );
    }
  };

  // Delete a control from the layout
  const deleteControl = (controlId: string, containerId: string) => {
    const newState = formLayoutComponents.slice();
    const formContainer = newState.filter((comp) => comp.container.id === containerId)[0];
    formContainer.children = formContainer.children.filter((cont) => cont.id !== controlId);
    setFormLayoutComponents(newState);
    setSelectedControl((prev) =>
      prev && prev.id === controlId ? undefined : prev
    );
  };

  // Selet a control on click
  const selectControl = (item: FormLayoutComponentChildrenType | FormLayoutComponentContainerType | undefined) => {
    setSelectedControl(item);
  };


  // Edit properties of the control from Sidebar
  const editControlProperties = (item: FormLayoutComponentChildrenType) => {
    const newState = formLayoutComponents.slice();
    const formContainer = newState.filter((comp) => comp.container.id === item.containerId)[0];
    formContainer.children.forEach((cont, ind) => {
      if (cont.id === item.id) {
        formContainer.children[ind] = item;
        return;
      }
    });
    setFormLayoutComponents(newState);
  };

  // Edit properties of the container
  const editContainerProperties = (item: FormLayoutComponentContainerType) => {
    const newState = formLayoutComponents.slice();
    const formContainer = newState.filter((comp) => comp.container.id === item.id)[0];
    formContainer.container.heading = item.heading;
    formContainer.container.subHeading = item.subHeading;
    setFormLayoutComponents(newState);
  };

  // Move a control from the sidebar based on the values on Drop Down
  const moveControlFromSide = (
    item: FormLayoutComponentChildrenType,
    {
      containerId,
      position,
    }: FormLayoutComponentChildrenType
  ) => {
    let componentsCopy: FormLayoutComponentsType[] = JSON.parse(
      JSON.stringify(formLayoutComponents)
    );

    const currentItemContainer = componentsCopy.filter((con, ind) => {
      return con.container.id === item.containerId;
    })[0];

    const moveItemToContainer = componentsCopy.filter((con, ind) => {
      return con.container.id === containerId;
    })[0];

    const itemIndex = currentItemContainer.children.findIndex(
      (con) => con.id === item.id
    );

    const deletedItem = currentItemContainer.children.splice(itemIndex, 1);
    deletedItem[0].containerId = containerId;

    if (position !== undefined) {
      moveItemToContainer.children.splice(position, 0, deletedItem[0]);
    } else {
      if (item.containerId !== containerId) {
        if(position){
          moveItemToContainer.children.splice(position, 0, deletedItem[0]);
        }
      } else {
        moveItemToContainer.children.splice(itemIndex, 0, deletedItem[0]);
      }
    }
    setSelectedControl(deletedItem[0]);
    setFormLayoutComponents(componentsCopy);
  };

  // Move control when dragged to a different position
  const moveControl = (
    item: FormLayoutComponentChildrenType,
    dragIndex: number,
    hoverIndex: number,
    containerId: string
  ) => {
    if (item === undefined) {
      return;
    }
    let componentsCopy: FormLayoutComponentsType[] = JSON.parse(JSON.stringify(formLayoutComponents));

    if (dragIndex !== undefined && item.id) {
      if (item.containerId === containerId) {
        const formContainer = componentsCopy.filter((con, ind) => {
          return con.container.id === containerId;
        })[0];
        const deletedItem = formContainer.children.splice(
          formContainer.children.findIndex((con) => con.id === item.id),
          1,
        );
        // Just to be sure that there is a item deleted
        if (deletedItem.length === 0) {
          return;
        }
        formContainer.children.splice(hoverIndex, 0, deletedItem[0]);
      }
      setFormLayoutComponents(componentsCopy);
    }
  };

  const publishForm = () => {};

  const saveForm = () => {};

  return {
    handleItemAdded,
    deleteContainer,
    deleteControl,
    selectControl,
    editContainerProperties,
    editControlProperties,
    moveControlFromSide,
    moveControl,
    publishForm,
    saveForm,
    selectedTemplate,
    formLayoutComponents,
    selectedControl,
  };
};

export default useFormBuilder;
