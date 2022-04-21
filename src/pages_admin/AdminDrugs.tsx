// @ts-nocheck
import React, { Component, useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import './DrugsPage.css';
import Button from '@mui/material/Button';
import { useQuery } from 'react-query'
import { InputAdornment, Input, Card, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Brief from '../contracts'
import ListItem from '../components/basic_list/list_item';
import AddBtn from '../components/basic_list/add_btn';

const myDrugs = [
];

function BriefCard(props) {
    const navigate = useNavigate();
    console.log(props.item.name)
    return (
        <div className="bigCard">
            <div className="drugCard" onClick={() => {
                props.handleClick(props.item.id);
                if (props.item.id != -1) {
                    if (props.isDrugPage) {
                       console.log("/admin/drugs/"+props.item.id);
                        navigate("/admin/drugs/"+props.item.id);
                    }
                }
            }} >
                <p className={props.isBold ? "boldName notOverFl" : "notOverFl"}>{props.item.name}</p>
            </div>
            <hr />
        </div>
    )
}

/* class Drugs extends Component<IProps, IState> {
*     constructor(props: IProps) {
*         super(props);
*         this.state = {
*             drugs: [],
*             input: "",
*         }
*         this.handleSearch = this.handleSearch.bind(this);
*         this.handleDrugClick = this.handleDrugClick.bind(this);
*     }
*
*     componentDidMount() {
*         this.handleSearch("");
*     }
*
*     handleDrugClick(id) {
*         console.log("id" + id + "was clicked");
*         if (id == -1) {
*             this.setState({
*                 input: "",
*             })
*             this.handleSearch("");
*         }
*         else {
*             this.props.handleClick(id);
*         }
*     }
*
*
*     render() {
*     }
* } */

interface IProps {
    isDrugPage?: boolean;
    type?: 'drugs' | 'acting_substances'
}

interface IState {
    drugs?: Brief[]; //id, name
}


const AdminDrugList = (props: IProps) => {
    const navigate = useNavigate();
    const { type = 'drugs' } = props;
    const [search, setSearch] = useState("");
    const [realSearch, setRealSearch] = useState("");
    const [updateFlag, setUpdFl] = useState(false);
    const { data: drugs, isLoading, isError
    } = useQuery(['brief', realSearch, type,props.flag, updateFlag], () => axios.get<Brief[]>(`http://localhost:8080/api/${type}/brief?search=${realSearch}`).then(v => v.data));

    const handleSearch = (value) => {
        setRealSearch(value)
    }
    const deleteItem = (id) => {
      axios.delete(`http://localhost:8080/api/drugs/`+id).then(function (response) {
   console.log(response);
   setUpdFl(!updateFlag)
 })
 .catch(function (error) {
   console.log(error);
 });
      console.log("id"+id+"was deleted");
//TODO
    }
    const addNew = () => {
       setUpdFl(!updateFlag);
       navigate(`/admin/drugs/-1`);
    }
    console.log(drugs)
    return (<div className={props.isDrugPage ? "wrapper" : "wrapperSL"}>
        <TextField className="drugInput"
            onKeyPress={(e) => {
                if (e.key === 'Enter') {
                    handleSearch(e.target.value);
                }
            }}
            id="input-with-icon-adornment"
            value={search}
            onChange={(e) =>
                setSearch(e.target.value)
            }
            label="поиск по названию" variant="standard"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }} />
        <AddBtn value={"добавить лекарство" } handleClick={addNew}/>
        {isLoading ? "Loading..." :
            isError ? "Error" :
                drugs.length > 0 ? (drugs.map((item) => (
                    <ListItem key={item.id} item={item} canDeleteItem={true}
                    deleteItem={() => deleteItem(item.id)}
                        handleClick={() => {
                            props.handleClick(item.id);
                            if (item.id != -1) {
                                   console.log("/admin/drugs/"+item.id);
                                    navigate("/admin/drugs/"+item.id);
                            }
                        }} />
                )
                )
                ) : "Ничего не нашлось. Сбросить фильтрацию?"
        }
    </div>)
}

export default AdminDrugList;
