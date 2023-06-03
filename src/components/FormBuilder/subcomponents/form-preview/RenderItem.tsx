import React, { FC } from 'react'
import { FormLayoutComponentChildrenType } from '../../../../types/FormTemplateTypes';
import { FormControlNames } from '../../../../utils/formBuilderUtils';
import { Checkbox, FormControl, FormControlLabel, FormGroup, MenuItem, Radio, RadioGroup, Select, Switch, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const dateFormat = 'yyyy, MMM dd';


interface RenderItemProps{
  item: FormLayoutComponentChildrenType
}

const RenderItem: FC<RenderItemProps> = (props)=> {
  const { item } = props;

  switch (item.controlName) {
    case FormControlNames.INPUTTEXTFIELD:
      return (
        <>
          <TextField
            type={item.dataType}
            fullWidth={true}
            placeholder={item.placeholder}
            variant="outlined"
          />
        </>
      );

    case FormControlNames.INPUTMULTILINE:
      return (
        <>
          <TextField
            type={item.dataType}
            fullWidth={true}
            multiline={true}
            minRows={item.rows}
            placeholder={item.placeholder}
            variant="outlined"
          />
        </>
      );
    case FormControlNames.CHECKBOX:
      return (
        <>
          <div className="m-t-20 p-l-0">
            <FormControlLabel
              control={
                <Checkbox
                />
              }
              style={{ marginLeft: "0px" }}
              label={item.placeholder}
            />
          </div>
        </>
      );

    case FormControlNames.RADIOGROUP:
      return (
        <>
          <FormControl>
            {/* <FormLabel>{item.labelName + (item.required?" *":"")}</FormLabel> */}
            <RadioGroup name={item.controlName + item.id} row>
              {item.items?.map((i) => (
                <FormControlLabel
                  value={i.value}
                  key={i.value}
                  control={<Radio />}
                  label={i.label}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </>
      );

    case FormControlNames.SELECTDROPDOWN:
      return (
        <>
          <FormControl style={{ minWidth: "100%" }}>
            {/* <InputLabel>{item.labelName + (item.required?" *":"")}</InputLabel> */}
            <Select
              // style={{minWidth: '100%'}}
              variant="outlined"
              value={item.items && item.items[0].value}
            >
              {item.items?.map((i, ind) => (
                <MenuItem key={i.value} value={i.value}>
                  {i.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </>
      );

    case FormControlNames.DATEFIELD:
      return (
        <>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              slotProps={{ textField: { fullWidth: true } }}
            />
          </LocalizationProvider>
        </>
      );

    case FormControlNames.TIMEFIELD:
      return (
        <>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <TimePicker
              slotProps={{ textField: { fullWidth: true } }}
            />
          </LocalizationProvider>
        </>
      );

    case FormControlNames.FILEUPLOAD:
      return (
        <>
          <input style={{ display: "none" }} id={item.controlName + item.id} type="file" />
          <label className="control-input-trigger-buttons" htmlFor={item.controlName + item.id}>
            <i className="fas fa-cloud-upload-alt"></i>
          </label>
        </>
      );

    case FormControlNames.IMAGEUPLOAD:
      return (
        <>
          <input style={{ display: "none" }} id={item.controlName + item.id} type="file" />
          <label className="control-input-trigger-buttons" htmlFor={item.controlName + item.id}>
            <i className="far fa-image"></i>
          </label>
        </>
      );

    case FormControlNames.SCANCODE:
      return (
        <>
          <input style={{ display: "none" }} id={item.controlName + item.id} type="file" />
          <label className="control-input-trigger-buttons" htmlFor={item.controlName + item.id}>
            <i className="fas fa-qrcode"></i>
          </label>
        </>
      );

    case FormControlNames.SCANCODE:
      return (
        <>
          <input style={{ display: "none" }} id={item.controlName + item.id} type="file" />
          <label className="control-input-trigger-buttons" htmlFor={item.controlName + item.id}>
            <i className="fas fa-qrcode"></i>
          </label>
        </>
      );

    case FormControlNames.SIGNATURE:
      return (
        <>
          <label
            className="control-input-trigger-buttons"
            style={{ width: "270px" }}
            htmlFor={item.controlName + item.id}
          >
            <span className="sign-label">Sign Here</span>
          </label>
        </>
      );

    case FormControlNames.TOGGLE:
      return (
        <>
          <Switch checked={true} />
        </>
      );

    case FormControlNames.CHECKLIST:
      return (
        <>
          <FormGroup>
            {item.items?.map((i, ind) => (
              <FormControlLabel
                key={i.value}
                control={<Checkbox />}
                label={i.label}
                style={{ marginLeft: "0px" }}
              />
            ))}
          </FormGroup>
        </>
      );
  }
  return <></>
}

export default RenderItem;