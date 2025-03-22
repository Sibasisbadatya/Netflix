import React, { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import { BsList } from "react-icons/bs";
import "./NavBar.css"
const OffCanvasMenu = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {
                (show == false) && (
                    <Button
                        style={{
                            position: "fixed",
                            top: "15px",
                            left: "15px",
                            zIndex: "1050",
                            border: "none",
                            background: "rgba(0, 0, 0, 0.8)",
                            padding: "8px 12px",
                            borderRadius: "5px",
                            color: "white",
                        }}
                        onClick={handleShow}
                    >
                        <BsList size={30} />
                    </Button>
                )
            }



            <Offcanvas
                show={show}
                onHide={handleClose}
                style={{
                    background: "rgba(0, 0, 0, 0.85)",
                    color: "white",
                }}
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Home</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="menu-list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/movies">Movies</a></li>
                        <li><a href="/favourites">Favourites</a></li>
                        <li><a href="/popular">New & Popular</a></li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default OffCanvasMenu;
