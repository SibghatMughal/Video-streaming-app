import React from 'react'

function ChooseCard({cardData}) {
  return (
    <>
           <div>
            {cardData.map((data,i)=>{
                return(
                    <>
                       <div className='choose-card' key={i} style={{flexDirection:`${i%2!=0?'row-reverse':'row'}`}}>
                <div className="left">
            <img src='https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png' alt="card image" />
        </div>
        <div className="right">
            <div className="title">
                {data?.title}
            </div>
            <div className="description">
                <p>{data?.description}</p>
        </div>
        </div>
        
        </div>
                    </>
                )
            })}
           </div>
        </>
  )
}

export default ChooseCard