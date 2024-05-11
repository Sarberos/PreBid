import s from './VisualeVariation.module.css'
import ListActive from './ListActive/ListActive'
import TilesActive from './TilesActive/TilesActive';
import { useState } from 'react';

function VisualeVariation() {
    const [visStyle, changeVisStyle]=useState(false)
    
    return (
      <div className={s.car_list_variation_block}>
        {visStyle ? <ListActive/> :<TilesActive />}
      </div>
    );
  }
  
  export default VisualeVariation;