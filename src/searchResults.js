import React from "react";

const Results = ({data}) => {
   
    
    
       
    return (
        <div>
            <div className="row">
                {data.map(data =>  
                <div className="col-md-3">
                    <div className="card" style={{"width": "18rem"}}>
                    <img className="card-img-top" src={data.recipe.image} />
                    <div className="card-body">
                    <center>
                        <h5 className="card__ title">{data.recipe.label}</h5>
                        <h4 className="card__title">Type:{data.recipe.mealType}</h4>
                     <button onClick={() => window.open("{data.recipe.url}")} className="card__btn">View recipe </button>
                        </center>
                    </div>
                    </div>
                </div>
                )}
            </div>
            
        </div>
    )
}

export default Results
