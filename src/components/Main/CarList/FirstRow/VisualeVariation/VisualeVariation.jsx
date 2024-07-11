import s from './VisualeVariation.module.css'
import ListActive from './ListActive/ListActive'
import TilesActive from './TilesActive/TilesActive';

function VisualeVariation(props) {
    return (
      <div  className={s.car_list_variation_block}>
        {props.visStyle ? 
        <ListActive visStyle={props.visStyle} changeVisStyle={props.changeVisStyle} /> 
        :<TilesActive visStyle={props.visStyle} changeVisStyle={props.changeVisStyle} />}
      </div>
    );
  }
  
  export default VisualeVariation;