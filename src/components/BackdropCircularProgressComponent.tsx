import React, {FunctionComponent} from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import { useAppSelector } from '../redux/hooks';

interface BackdropCircularProgressComponentProps {
  
}
 
const BackdropCircularProgressComponent: FunctionComponent<BackdropCircularProgressComponentProps> = (prop) => {

  const isCircularProgressOpen = useAppSelector((state)=>state.uielements.progress.isCircularProgressOpen);

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isCircularProgressOpen}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}
 
export default BackdropCircularProgressComponent;