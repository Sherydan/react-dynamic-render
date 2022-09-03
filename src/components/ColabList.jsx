import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const ColabList = ({ colabs, filter }) => {
    return (
        <div className="container mt-2">
            <ListGroup>
                {console.log(colabs)}
                {colabs.map((colab) => (
                    <ListGroup.Item key={colab.id}>
                        <h3>{colab.nombre}</h3>
                        <p>{colab.correo}</p>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default ColabList;
