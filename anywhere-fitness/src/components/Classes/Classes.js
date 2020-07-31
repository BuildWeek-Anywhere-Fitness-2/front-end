import React, { useEffect } from 'react';
import ClassCard from "./ClassesCard";
import { getClasses } from 'actions';
import {useClasses, useDispatch} from 'hooks';


const Classes = () => {
  const classes = useClasses();
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getClasses());
  },[])

  console.log('CLASSES', classes);

  return (
    classes.map((cls, i) => <ClassCard key={i} {...{cls}} />)
  )
}

export default Classes;
