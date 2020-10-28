import React from 'react';
import Select from 'react-select';

const users = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

function AddHome() {
    return (
        <div className="container sm">
            <div className="form-wrap card">
                <h2>Add Home</h2>

                <form>
                    <div className="form-element">
                        <label>User Id</label>
                        <Select
                            options={users}
                            className="react-select-container"
                            classNamePrefix="react-select"
                            placeholder=""
                        />
                        <p className="error-msg">Error message</p>
                    </div>

                    <div className="form-element">
                        <label>Title</label>
                        <input type="text" autoComplete="off" />
                    </div>

                    <div className="form-element">
                        <label>Location</label>
                        <input type="text" autoComplete="off" />
                    </div>

                    <div className="form-element">
                        <label>
                            Land (m<sup>2</sup>)
                        </label>
                        <input type="text" autoComplete="off" />
                    </div>

                    <div className="form-element">
                        <label>
                            Place (m<sup>2</sup>)
                        </label>
                        <input type="text" autoComplete="off" />
                    </div>

                    <div className="form-element">
                        <label>No. of Bedrooms</label>
                        <input type="text" autoComplete="off" />
                    </div>
                </form>

                <div className="form-actions">
                    <button className="btn outline">Cancel</button>
                    <button className="btn primary">Add</button>
                </div>
            </div>
        </div>
    );
}

export default AddHome;
