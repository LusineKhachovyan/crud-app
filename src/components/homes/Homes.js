import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import Loader from '../shared/Loader';
import ConfirmationModal from '../shared/ConfirmationModal';
import { getHomes, clearHomes, removeHome } from '../../redux/homes/homeActions';

function Homes() {
    const dispatch = useDispatch();
    const homes = useSelector((state) => state.homes.homes);
    const loading = useSelector((state) => state.homes.loading);
    const error = useSelector((state) => state.homes.error);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentHomeId, setCurrentHomeId] = useState();

    useEffect(() => {
        dispatch(getHomes());

        return () => {
            dispatch(clearHomes());
            setCurrentHomeId();
        };
    }, [dispatch]);

    const openModal = (homeId) => {
        setModalIsOpen(true);
        setCurrentHomeId(homeId);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const deleteHome = () => {
        setModalIsOpen(false);
        dispatch(removeHome(currentHomeId));
    };

    const homesList =
        homes &&
        homes.map((home) => (
            <tr key={home.id}>
                <td>{home.userId}</td>
                <td>{home.title}</td>
                <td>{home.location}</td>
                <td>{home.land}</td>
                <td>{home.place}</td>
                <td>{home.bedrooms}</td>
                <td>
                    <div className="actions">
                        <button type="button" className="icon-btn edit-btn">
                            <FontAwesomeIcon icon={faPen} />
                        </button>
                        <button
                            type="button"
                            className="icon-btn delete-btn"
                            onClick={() => openModal(home.id)}
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </td>
            </tr>
        ));

    return (
        <div className="container">
            <div className="table-header">
                <h1>Homes</h1>
                <Link to="/homes/add" className="btn primary sm with-icon">
                    <FontAwesomeIcon icon={faPlus} />
                    <span>Add Home</span>
                </Link>
            </div>

            {loading ? (
                <Loader />
            ) : error ? (
                <p className="error">Something went wrong</p>
            ) : (
                homes && (
                    <div className="table-content card">
                        <table>
                            <thead>
                                <tr>
                                    <th width="18%">User Id</th>
                                    <th width="18%">Title</th>
                                    <th width="19%">Location</th>
                                    <th width="10%">
                                        Land (m<sup>2</sup>)
                                    </th>
                                    <th width="10%">
                                        Place (m<sup>2</sup>)
                                    </th>
                                    <th width="15%">No. of Bedrooms</th>
                                    <th width="10%" className="center">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {homes.length > 0 ? (
                                    homesList
                                ) : (
                                    <tr>
                                        <td colSpan="7">
                                            <p className="no-data">Nothing was found</p>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )
            )}

            {modalIsOpen && (
                <ConfirmationModal
                    isOpen={modalIsOpen}
                    onClose={closeModal}
                    onConfirm={deleteHome}
                    title="Delete Home"
                    bodyText="Are you sure you want to delete this home?"
                ></ConfirmationModal>
            )}
        </div>
    );
}

export default Homes;
