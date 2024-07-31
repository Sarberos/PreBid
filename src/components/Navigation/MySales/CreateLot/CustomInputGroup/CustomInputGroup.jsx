import {
    Input,
    InputGroup,
  } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import { useState } from "react";
import s from "./CustomInputGroup.module.css";


export const CustomInputGroupWidthButton = ({setLotConfig,lotConfig,searchByVin}) => {
    const [currentVin, setCurrentVin]=useState(lotConfig.vin)
  
    return (
      <div className={s.input_group_wrapper}>
        <InputGroup >
          <Input
            onChange={(value) => {
              setLotConfig(prevState=>({...prevState,vin: value}))
              setCurrentVin(value)
            }}
            
            value={currentVin}
          />
        </InputGroup>
        <button
          onClick={() => searchByVin(currentVin)}
          className={s.vin_search_btn}
        >
          <SearchIcon height="20px" width="20px" color="black" />
        </button>
      </div>
    );
  };