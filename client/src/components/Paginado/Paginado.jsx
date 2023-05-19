import React from 'react'
import style from "./pagina.module.css"


function Paginados({recipesPage,allRecipes,paged}) {
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
          {pages?.map(num=>(
            <li className={style.page} key={num}>

              <button className={style.pageBtn} onClick={()=>Paginados(num)} style={{width:"30px"}}>{num}</button>
            </li>
          ))}

        </ul>
      </nav>
}
    </div>
  )
}

export default Paginados
