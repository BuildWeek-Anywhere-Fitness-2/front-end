import React, { useState, useEffect, useContext } from 'react';
import { Card, Input } from 'reactstrap';
import ClassesCard from "./ClassesCard";
import { ClassContext } from '../context/classContext';
import axios from "axios";
import { axiosWithAuth } from '../../utils/axiosWithAuth';


const Classes = (props) => {

  const { session, addClass }  = useContext(ClassContext);

    const [classList, setClassList] = useState(session);
    console.log(session);
    useEffect(() =>{
    setClassList(session);
  }, [])


    const [searchResults, setSearchResults] = useState([]);

    const [search, setSearch] = useState({
    searchTerm: "",
    duration: "",
    type: "",
    intensity: "",
    });
    //Controlled Inputs

    const changeHandler = (e) => {
        setSearch({...search, [e.target.name]: e.target.value})
    }



      useEffect(() => {
        // setClassList(session);
         const resultSearch = classList.filter(classObj =>
                             classObj.name.toLowerCase().includes(search.searchTerm.toLowerCase())
                                        );
        console.log(resultSearch);
         const resultDuration = resultSearch.filter(classObj =>
                                              classObj.duration.includes(search.duration)
                                              );

         const resultType = resultDuration.filter(classObj =>
                                                 classObj.type.toLowerCase().includes(search.type.toLowerCase())
                                                 );
         const resultIntensity = resultType.filter(classObj =>
                                                 classObj.intensity.toLowerCase().includes(search.intensity.toLowerCase())
                                                 );
         setSearchResults(resultIntensity);
      },[search])

  return (
    <div className="card-container">
        <Card className="classes">
            <h1> Search Classes </h1>
            <div className="class-search-card">
                <Input className="class-search-bar" type="search" name="searchTerm" id="searchTerm" placeholder="Search" onChange={changeHandler}/>
                <Input className="class-search-drops" type="select" name="duration" id="duration" onChange={changeHandler}>
                  <option value="">Duration</option>
                  <option value="10 mins">10 mins</option>
                  <option value="20 mins">20 mins</option>
                  <option value="30 mins">30 mins</option>
            </Input>
            <Input className="class-search-drops" type="select" name="type" id="type" onChange={changeHandler}>
                  <option value="">Type</option>
                  <option value="Yoga">Yoga</option>
                  <option value="Pilates">Pilates</option>
            </Input>
            <Input className="class-search-drops" type="select" name="intensity" id="intensity" onChange={changeHandler}>
                  <option value="">Intensity</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advances">Advanced</option>
            </Input>

            </div>
            <div className="class-cards-container">
                <h6>{(searchResults.length===0 ) ? `Sorry, can't find anything!` : ''} </h6>
                {searchResults.map(singleClass => (
                        <ClassesCard singleClass={singleClass} />
                    ))}
            </div>
        </Card>
    </div>
  );
}

export default Classes;
