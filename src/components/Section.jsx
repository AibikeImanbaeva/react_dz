import React from 'react';

const Section = (props) => {
    return (
        <div className='content'>
            <div className="container">

                {props.users.map((e) => {
                    return (
                        <ul className='sect' key={e.id}>
                            <li>
                                {e.name};
                            </li>
                            <li>
                                {e.lastName};
                            </li>
                            <li>
                                {e.age};
                            </li>
                            <li>
                                {e.id};
                            </li>
                        </ul>
                    )
                })}
            </div>
        </div>
    );
};

export default Section;