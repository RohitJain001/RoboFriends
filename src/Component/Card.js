import React from 'react';

const Card = (props) =>{
return (
<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 fl w-17 l-30'>
    <img alt={'robot'} src={`https://robohash.org/${props.id}?200*200`} />
    <div>
<h2>Name: {props.name}</h2>
<p>Username: {props.username}</p>
<p>Email: {props.email}</p>
    </div>
</div>
);
}

export default Card;