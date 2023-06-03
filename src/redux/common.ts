export const saveToLocalStorage = (key: string, value:string)=>{
  window.localStorage.setItem(key,value);
}

export const getFromLocalStorage = (key: string)=>{
  return window.localStorage.getItem(key) as string;
}