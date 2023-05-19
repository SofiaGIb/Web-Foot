import React from 'react'

import { aplhabeticalSort } from '../../Redux/actions';

function AplhabeticalSort(event){
        e.preventDefault();                
        dispatch(aplhabeticalSort(event.target.value))
        setOrder(`Order ${event.target.value}`);
    

  return (
    <div>
      
    </div>
  )
}

export default AplhabeticaSort
