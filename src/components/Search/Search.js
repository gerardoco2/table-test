import React from 'react';
import classes from './Search.css';


const search = (props) => {
    return (
        <div className={classes.Search}>
            <div className="form-row">
                <div className="col-3 search-input">
                    <input className="border-0 input-field" placeholder="search by name" type="text"
                        value={props.word} onChange={(e) => { props.query(e.target.value) }} />
                </div>
            </div>
        </div>

    );

}

export default search;