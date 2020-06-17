import React from 'react';
import './Rests.scss';
// import imgSearch from '../../assets/icon/search.svg';


import axios from 'axios';
// import { Link } from 'react-router-dom';
import Rest from '../Rest/Rest';

const API_URL = 'http://localhost:8080';

class Rests extends React.Component {

    state = {
        restsData: [],
        search:null
      }
    
      searchSpace=(e)=>{
        let keyword = e.target.value;
        this.setState({search:keyword})
      }

    componentDidMount() {
        axios
        .get(`${API_URL}/restaurants`)
        .then(response => {
          console.log(response.data[0].name)
          this.setState({
            restsData: response.data,
          });
        })
        .catch(err => {
          console.log(err)
        })
    }    


    render () {
        return(
            <div className="rests">
                
                <input type="text" placeholder="SEARCH" onChange={(e)=>this.searchSpace(e)} className="rests-search"/>
             
                <div className="rests-list">{
                this.state.restsData.filter((dataArray) =>{
                  if(this.state.search == null)
                    return dataArray
                  else if(dataArray.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
                  dataArray.catag.toLowerCase().includes(this.state.search.toLowerCase())){
                    return dataArray
                  }
                }).map((dataArray, index)=>
                <Rest 
                key={index}
                menuData={dataArray}
                />
                )}  
                </div>
            </div>
        )
    }

  }

export default Rests;