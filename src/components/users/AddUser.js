import React from 'react';

function AddUser() {
    return (
        <div className="container sm">
            <div className="form-wrap card">
                <h2>Add User</h2>

                <form>
                    <div className="form-element">
                        <label>First Name</label>
                        <input type="text" autoComplete="off" className="invalid" />
                        <p className="error-msg">Error message</p>
                    </div>

                    <div className="form-element">
                        <label>Last Name</label>
                        <input type="text" autoComplete="off" />
                    </div>

                    <div className="form-element">
                        <label>Email</label>
                        <input type="email" autoComplete="off" />
                    </div>

                    <div className="form-element">
                        <label>Age</label>
                        <input type="text" autoComplete="off" />
                    </div>

                    <div className="form-element">
                        <label>Password</label>
                        <input type="password" autoComplete="off" />
                    </div>

                    <div className="form-element">
                        <label>Confirm Password</label>
                        <input type="password" autoComplete="off" />
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

export default AddUser;
