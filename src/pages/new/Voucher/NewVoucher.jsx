import * as React from "react";
import { Button, Container } from "react-bootstrap";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import { Switch } from "@mui/material";

function AddVoucher() {
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
        Add Voucher
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Voucher Basic Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="syne">
            <form>
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
                <label class="col-sm-3 col-form-label">Select Rate Plan</label>
                <div class="col-sm-9">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setPropertyType(e.target.value)}
                  >
                    <option selected>Refundable</option>
                    <option value="Hotel">Non-Refundables</option>
                  </select>
                </div>
              </div>

              <div class="row mb-3">
                <label for="inputText" class="col-sm-3 col-form-label">
                  Voucher Name ( Internal ):
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
                  Voucher Name ( Customers ):
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    onKeyUp={(e) => setPropertyName(e.target.value)}
                  />
                </div>
              </div>

              <div className="d-flex">
                <h4>Voucher Information</h4>
              </div>

              <div class="row mb-3">
                <label for="inputEmail" class="col-sm-3 col-form-label">
                  Rooms:
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
                <label class="col-sm-3 col-form-label">Currency:</label>
                <div class="col-sm-9">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setPropertyType(e.target.value)}
                  >
                    <option selected>PHP (Philippine Peso)</option>
                    <option value="Hotel">USD ( United States Dollar )</option>
                    <option value="Hotel">EUR ( EURO )</option>
                    <option value="Hotel">CHF ( Swiss Franc )</option>
                    <option value="Hotel">GBP ( British Pound )</option>
                  </select>
                </div>
              </div>

              <div class="row mb-3">
                <label for="inputText" class="col-sm-3 col-form-label">
                  Selling Price:
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
                <label for="inputText" class="col-sm-3 col-form-label">
                  Nights:
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
                <label for="inputText" class="col-sm-3 col-form-label">
                  Original Price:
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
                <label for="inputText" class="col-sm-3 col-form-label">
                  Commission Rate:
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
                <label class="col-sm-3 col-form-label">Payment Method:</label>
                <div class="col-sm-9">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setPropertyType(e.target.value)}
                  >
                    <option selected>CASH</option>
                    <option value="Hotel">CARD</option>
                    <option value="Hotel">GCASH</option>
                    <option value="Hotel">NarwhalPay</option>
                    <option value="Hotel">Giraffee</option>
                  </select>
                </div>
              </div>

              <div className="d-flex">
                <h4>Booking Policy</h4>
              </div>

              <div class="row mb-3">
                <label for="inputPassword" class="col-sm-3 col-form-label">
                  Cancel Before Booking (cancel anytime on/off):
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
                <label for="inputPassword" class="col-sm-3 col-form-label">
                  Cancel After Booking (free Cancellation (limited time)):
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
                <label for="inputText" class="col-sm-3 col-form-label">
                  Cancel Before Booking (cancel anytime on/off)
                </label>
                <div class="col-sm-2">
                  <Switch />
                </div>
                <label for="inputText" class="col-sm-3 col-form-label">
                  Cancel After Booking (free Cancellation (limited time)):
                </label>
                <div class="col-sm-2">
                  <Switch />
                </div>
              </div>

              <div class="row mb-2">
                <legend class="col-form-label col-sm-2 pt-0">
                  Include Voucher policy info
                </legend>
                <div class="col-sm-10">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="gridCheck1"
                    />
                    <label class="form-check-label" for="gridCheck1">
                      I wholeheartedly agree with the inclusion of voucher
                      policy information. By clicking the "Agree" button below,
                      I acknowledge that I have reviewed and accepted the terms
                      and conditions outlined in the voucher policy.
                    </label>
                  </div>
                </div>
              </div>

              {/* <div class="row mb-3">
                <label class="col-sm-2 col-form-label">Disabled</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    value="Read only / Disabled"
                    disabled
                  />
                </div>
              </div> */}
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
                title: "New Voucher has been Created",
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

export default AddVoucher;
