import React from 'react';

function TileCard(props){

    return(
        <>

            {props.title ?
                    <article className='tile-card-text'>
                        <h2>{props.title}</h2>
                        <p>{props.content}</p>
                        <a href={props.path}>Read More</a>
                    </article>

                :
                <>
                    <section className='tile-card-pic'>
                        <img  className='tile-img' src={props.imgUrl} alt='foto'/>
                    </section>
                </>


            }
        </>
    )
}
export default TileCard