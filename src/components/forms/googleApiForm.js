import React, { useState } from "react";
import { Button, Form, Container, Header } from "semantic-ui-react";
import axios from "axios";

function App() {
  const [email, setEmail] = useState("");
  const [submitedForm, setSubmitedForm] = useState(false);
  const [submitedRequest, setSubmitedRequest] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const objt = { email };
    setSubmitedForm(true);

    axios
      .post(
        "https://sheet.best/api/sheets/5d86439a-0df1-4fe2-9ca0-0d0f3a529655",
        objt
      )
      .then((response) => {
        console.log(response);
        setSubmitedRequest(true);
      });
  };

  return (
    <Container fluid className="container">
      {submitedRequest ? (
        <>
          <Header as="h2">Gracias!</Header>
          <label>
            Su información ha sido recibida. Le contactaremos lo mas pronto
            posible.
          </label>
        </>
      ) : (
        <Form className="form">
          <Form.Field>
            <label>Email</label>
            <input
              placeholder="Enter your Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Field>

          <Button
            color="violet"
            type="submit"
            disabled={submitedForm}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Form>
      )}
    </Container>
  );
}

export default App;
