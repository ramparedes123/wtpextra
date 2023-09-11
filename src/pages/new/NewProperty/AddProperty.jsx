import * as React from "react";
import { Button, Container } from "react-bootstrap";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";

function AddProperty() {
  const [show, setShow] = useState(false);

  const [data, setData] = useState([]);

  const handleClose = () => {
    setShow(false);

    setData([
      ...data,
      ...[
        {
          id: data.length > 0 ? data.length : 0,
          propertyType: propertyType,
          propertyName: propertyName,
          localLanguage: localLanguage,
          brand: brand,
          serviceLanguage: serviceLanguage,
          propertyLocation: propertyLocation,
          address: address,
          latLong: latLong,
          timeZone: timeZone,
          propertyDesc: propertyDesc,
          openingDate: openingDate,
          renovationDate: renovationDate,
          rooms: rooms,
          floors: floors,
          propertyContact: propertyContact,
          email: email,
          photos: photos,
        },
      ],
    ]);
    localStorage.setItem("property", JSON.stringify(data));
    console.log(data);
  };

  const handleShow = () => setShow(true);

  const [propertyType, setPropertyType] = useState("");
  const [propertyName, setPropertyName] = useState("");
  const [localLanguage, setLocalLanguage] = useState("");
  const [brand, setBrand] = useState("");
  const [serviceLanguage, setServiceLanguage] = useState("");
  const [propertyLocation, setPropertyLocation] = useState("");
  const [address, setaddress] = useState("");
  const [latLong, setLatLong] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [propertyDesc, setPropertyDesc] = useState("");
  const [openingDate, setOpeningDate] = useState("");
  const [renovationDate, setRenovationDate] = useState("");
  const [rooms, setRooms] = useState("");
  const [floors, setFloors] = useState("");
  const [propertyContact, setPropertyContact] = useState(null);
  const [email, setEmail] = useState("");
  const [photos, setPhotos] = useState("https://placehold.co/400");

  return (
    <>
      <Button variant="warning" onClick={handleShow} className="w-10">
        Add Property
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Basic Property Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="syne">
            <form>
              <div class="row mb-3">
                <label class="col-sm-3 col-form-label">Property Type</label>
                <div class="col-sm-9">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setPropertyType(e.target.value)}
                  >
                    <option selected>Apartment</option>
                    <option value="Hotel">Hotel</option>
                    <option value="Condominium">Condominium</option>
                    <option value="Trench House">Trench House</option>
                  </select>
                </div>
              </div>

              <div class="row mb-3">
                <label for="inputText" class="col-sm-3 col-form-label">
                  Property Name:
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    onKeyUp={(e) => setPropertyName(e.target.value)}
                  />
                </div>
              </div>

              <div class="row mb-3">
                <label for="inputText" class="col-sm-3 col-form-label">
                  Local Language:
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    onKeyUp={(e) => setLocalLanguage(e.target.value)}
                  />
                </div>
              </div>
              <div class="row mb-3">
                <label for="inputText" class="col-sm-3 col-form-label">
                  Brand:
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    onKeyUp={(e) => setBrand(e.target.value)}
                  />
                </div>
              </div>
              <div class="row mb-3">
                <label for="inputText" class="col-sm-3 col-form-label">
                  Service Language:
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    onKeyUp={(e) => setServiceLanguage(e.target.value)}
                  />
                </div>
              </div>

              <div className="d-flex">
                <h4>Location</h4>
              </div>

              <div class="row mb-3">
                <label for="inputEmail" class="col-sm-3 col-form-label">
                  Property Location:
                </label>
                <div class="col-sm-9">
                  <input
                    type="email"
                    class="form-control"
                    onKeyUp={(e) => setPropertyLocation(e.target.value)}
                  />
                </div>
              </div>
              <div class="row mb-3">
                <label for="inputText" class="col-sm-3 col-form-label">
                  Address in English:
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    onKeyUp={(e) => setaddress(e.target.value)}
                  />
                </div>
              </div>

              <div class="row mb-3">
                <label for="inputText" class="col-sm-3 col-form-label">
                  Latitude & Longitude:
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    onKeyUp={(e) => setLatLong(e.target.value)}
                  />
                </div>
              </div>

              <div class="row mb-3">
                <label class="col-sm-3 col-form-label">Local Time zone</label>
                <div class="col-sm-9">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setTimeZone(e.target.value)}
                  >
                    <option selected>UTC+8</option>
                    <option value="EST">EST</option>
                    <option value="GMT">GMT</option>
                    <option value="UTC">UTC</option>
                  </select>
                </div>
              </div>

              <div className="d-flex">
                <h4>Property Details</h4>
              </div>

              <div class="row mb-3">
                <label for="inputPassword" class="col-sm-3 col-form-label">
                  Property Description:
                </label>
                <div class="col-sm-9">
                  <textarea
                    class="form-control"
                    style={{ height: "100px" }}
                    onKeyUp={(e) => setPropertyDesc(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <div class="row mb-3">
                <label for="inputDate" class="col-sm-3 col-form-label">
                  Opening Date:
                </label>
                <div class="col-sm-9">
                  <input type="date" class="form-control" />
                </div>
              </div>
              <div class="row mb-3">
                <label for="inputDate" class="col-sm-3 col-form-label">
                  Last Renovation Date:
                </label>
                <div class="col-sm-9">
                  <input type="date" class="form-control" />
                </div>
              </div>

              <div class="row mb-3">
                <label class="col-sm-3 col-form-label">Rooms & Floor</label>
                <div class="col-sm-5">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Number of Rooms"
                    onKeyUp={(e) => setRooms(e.target.value)}
                  />
                </div>
                <div class="col-sm-4">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Number of Floors"
                    onKeyUp={(e) => setFloors(e.target.value)}
                  />
                </div>
              </div>

              {/* <div class="row mb-3">
                    <legend class="col-form-label col-sm-2 pt-0">Checkboxes</legend>
                    <div class="col-sm-10">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck1" />
                        <label class="form-check-label" for="gridCheck1">
                          Example checkbox
                        </label>
                      </div>

                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck2" checked />
                        <label class="form-check-label" for="gridCheck2">
                          Example checkbox 2
                        </label>
                      </div>
                    </div>
                  </div> */}

              {/* <div class="row mb-3">
                    <label class="col-sm-2 col-form-label">Disabled</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" value="Read only / Disabled" disabled />
                    </div>
                  </div> */}

              <div className="d-flex">
                <h4>Contact</h4>
                <hr />
              </div>

              <div class="row mb-3">
                <label for="inputText" class="col-sm-3 col-form-label">
                  Property Contact Number:
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    onKeyUp={(e) => setPropertyContact(e.target.value)}
                  />
                </div>
              </div>
              <div class="row mb-3">
                <label for="inputEmail" class="col-sm-3 col-form-label">
                  Email Address:
                </label>
                <div class="col-sm-9">
                  <input
                    type="email"
                    class="form-control"
                    onKeyUp={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div class="row mb-3">
                <label for="inputNumber" class="col-sm-2 col-form-label">
                  File Upload
                </label>
                <div class="col-sm-10">
                  <input
                    class="form-control"
                    type="file"
                    id="formFile"
                    onChange={(e) => setPropertyName(e.target.files[0])}
                  />
                </div>
              </div>
            </form>
          </Container>
        </Modal.Body>

        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
                Close
              </Button> */}
          <Button
            variant="primary"
            style={{ backgroundColor: "#FC8F3A", border: "none" }}
            onClick={() => {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener("mouseenter", Swal.stopTimer);
                  toast.addEventListener("mouseleave", Swal.resumeTimer);
                },
              });

              handleClose();
            }}
            className="w-25"
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProperty;
