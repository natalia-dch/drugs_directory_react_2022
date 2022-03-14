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

const myDrugs = [
];

function BriefCard(props) {
    const navigate = useNavigate();
    return (
        <div className="bigCard">
            <div className="drugCard" onClick={() => {
                props.handleClick(props.item.id);
                if (props.item.id != -1) {
                    if (props.isDrugPage) {
                        navigate("/drug");
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


const DrugsPure = (props: IProps) => {
    const { type = 'drugs' } = props;
    const [search, setSearch] = useState("");
    const [realSearch, setRealSearch] = useState("");

    const { data: drugs, isLoading, isError
    } = useQuery(['brief', realSearch, type], () => axios.get<Brief[]>(`http://localhost:8080/api/${type}/brief?search=${realSearch}`).then(v => v.data));

    const handleSearch = (value) => {
        setRealSearch(value)
    }

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
        {isLoading ? "Loading..." :
            isError ? "Error" :
                drugs.length > 0 ? (drugs.map((item) => (
                    <BriefCard key={item.id} isBold={props.sItem === item.id}
                        item={item}
                        isDrugPage={props.isDrugPage}
                        handleClick={() => props.handleClick(item.id)} />
                )
                )
                ) : "Ничего не нашлось. Сбросить фильтрацию?"
        }
    </div>)
}

export default DrugsPure;
