import React from 'react'
import style from "./pagina.module.css"


function Paginado({recipesPage,allRecipes,paged}) {
  const pages =[];
  for(let i =1; i<=Math.ceil(allRecipes/recipesPage);i++){
    pages.push(i)
  }
  return (
    <div>
      {pages.length <=1?
      <></>:
       <nav className={style.pagination}>
        <ul className={style.pages}>
          {pages?.map(p=>(
            <li className={style.page} key={p}>

              <button className={style.pageBtn} onClick={()=>paged(p)} style={{width:"30px"}}>{p}</button>
            </li>
          ))}

        </ul>
      </nav>
}
    </div>
  )
}

export default Paginado
