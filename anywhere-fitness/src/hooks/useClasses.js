import {useContext} from 'react';
import {ClassesContext} from 'context';

export const useClasses = () => {
  const {classes} = useContext(ClassesContext);

  return classes;
}


export const useDispatch = () => {
  const { dispatch } = useContext(ClassesContext);

  return dispatch;
}



