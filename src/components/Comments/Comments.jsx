import React from 'react';

const Comments = ({blogComment}) => {
    const {email,name,body} = blogComment;
    return (
        <div>
            <div className="card w-full bg-gray-600 text-white">
                <div className="card-body">
                    <h2 className="card-title text-2xl mb-2">Name : {name}</h2>
                    <h2 className="card-title text-xl mb-2">Body : {body}</h2>
                    <h2 className="card-title text-xl mb-2">Email : {email}</h2>
                    <p></p>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Comments;