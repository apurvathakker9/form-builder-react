import React, {FC, useEffect, useState} from 'react'
import { FormLayoutCoponentChildrenItemsType } from '../../../types/FormTemplateTypes';
import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, TextField } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { generateID } from '../../../utils/common';

interface ManageItemsListComponentProps{
  items: FormLayoutCoponentChildrenItemsType[] | undefined;
  addItemInList: (item:FormLayoutCoponentChildrenItemsType)=>void;
  deleteItemFromList: (item: FormLayoutCoponentChildrenItemsType)=>void;
  editIteminList: (item: FormLayoutCoponentChildrenItemsType)=>void;
}

const ManageItemsListComponent: FC<ManageItemsListComponentProps> = (props)=> {

  // const [runningItemId, setRunningItemId] = useState(3);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [itemName, setItemName] = useState<string>('');
  const [editItemId, setEditItemId] = useState<string | undefined>(undefined)

  const { items, addItemInList, deleteItemFromList, editIteminList } = props;

  useEffect(() => {
    cancelEditing();
  }, [items])
  

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e)=>{
    const { name, value } = e.target;
    setItemName(value);
  }

  const changeToEditMode = (item: FormLayoutCoponentChildrenItemsType)=>{
    setItemName(item.label);
    setEditItemId(item.id);
    setEditMode(true);
  }

  const onSubmit: React.MouseEventHandler<HTMLInputElement> = (event)=>{
    if(itemName !== null && itemName !== ''){
      if(!editMode){
        addItemInList({
          id: generateID(),
          value: itemName.replace(" ","__-"),
          label: itemName
        });
      } else{
        editIteminList({
          id: editItemId as string,
          value: itemName.replace(" ","__-"),
          label: itemName
        })
      }
    }
  }

  const cancelEditing = ()=>{
    setEditMode(false);
    setItemName('');
    setEditItemId(undefined);
  }

  return ( <>
    <div>
      <TextField
        label='Item Name'
        name='newItem'
        value={itemName}
        onChange={handleChange}
        style={{minWidth: '100%'}}
      />
      <input 
        className="btn btn-light btn-shadow m-t-20 m-r-10"
        value={editMode ? "Edit Item" : "Add Item"}
        type='button'
        onClick={onSubmit}
      />
      {
        editMode && <input 
          className="btn btn-light btn-shadow m-t-20 m-r-10"
          value='Cancel'
          type='button'
          onClick={cancelEditing}
        />
      }
      <List component="nav">
        {items?.map((item,ind)=>{
          return <ListItem key={item.value}>
            <ListItemText primary={item.label} />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={()=>changeToEditMode(item)}>
                <Edit />
              </IconButton>
              <IconButton onClick={()=>deleteItemFromList(item)} edge="end">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>     
          </ListItem>
        })}
      </List>
    </div>
  </> );
}

export default ManageItemsListComponent;