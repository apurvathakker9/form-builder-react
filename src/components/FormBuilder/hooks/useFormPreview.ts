import React, { useState } from 'react'

const useFormPreview = ()=>{

  const [showPreview, setShowPreview] = useState<boolean>(false);

  const openPreviewDrawer = ()=>{
    setShowPreview(true);
  }

  const closePreviewDrawer = ()=>{
    setShowPreview(false);
  }

  return {
    showPreview,
    openPreviewDrawer,
    closePreviewDrawer
  }
};

export default useFormPreview;