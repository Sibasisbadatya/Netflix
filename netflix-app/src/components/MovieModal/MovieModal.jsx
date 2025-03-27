import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import './MovieModal.css'
import themeContext from "../../contextAPI/contexts/themeContext";
import Logo from '../../assets/Netflix.png'
const MovieModal = ({ show, handleClose, movie }) => {
    if (!movie) return null;
    const { isDark } = useContext(themeContext);
    return (
        <Modal className="modal-div" show={show} onHide={handleClose}>
            <Modal.Header className="modal-header" closeButton>
            </Modal.Header>
            <Modal.Body className="text-center">
                <img
                    className="modal-img"
                    src={movie.Poster !== "N/A" ? movie.Poster : Logo}
                    alt={movie.Title}
                    style={{ width: "100%" }}
                />
            </Modal.Body>
            <Modal.Footer className="modal-footer">
                <Button variant="secondary" style={{ backgroundColor: '#e50914',color:'white' }} onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MovieModal;
