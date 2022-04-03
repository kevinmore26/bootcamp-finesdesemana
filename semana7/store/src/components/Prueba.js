import { Form, Button, DropdownButton, Dropdown } from "react-bootstrap";

export default function Prueba() {
  return (
    <div className="container">
      <div className="col-4 mt-4">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
        </Form>
      </div>
      <div className="" style={{display:'flex'}}>
        <div>
          <Button
            variant="primary"
            type="submit"
            style={{
              margin: "0 auto",
              backgroundColor: "blue",
              marginLeft:'50px'
            }}
          >
            Submit
          </Button>
        </div>
        <div>
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </div>
  );
}
