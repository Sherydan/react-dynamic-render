import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { nanoid } from "nanoid";
import { useState } from "react";

const ColabForm = ( {colab, setColab,} ) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || email === "") {
            alert("Please fill in all fields");
            return;
        }

        // add new colab only if has some value
        if  (name !== "" && email !== "") {
            setColab([
                ...colab,
                {
                    id: nanoid(),
                    nombre: name,
                    correo: email,
                },
            ]);
        }
        
        setName("");
        setEmail("");

    }

    return (
        <div className="container">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your Email" />
                </Form.Group>
                <div className="text-center">
                    <Button variant="primary" type="submit">
                        Add new
                    </Button>
                </div>
            </Form>
        </div>

    );

};

export default ColabForm;
