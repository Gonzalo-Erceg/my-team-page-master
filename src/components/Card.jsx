import style from "./card.module.css"



export default function Card({job, name, img}){
 
    
    return(
       
            <div className={style.card} >
            <div>
                <img className={style.image} src={img}/>
                <span className={style.name}>{name}</span>
            </div>
            <span className={style.job}>{job}</span>
        </div>
      
    )
}