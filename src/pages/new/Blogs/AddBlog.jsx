import * as React from "react";
import { Button, Container } from "react-bootstrap";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageUploading from "react-images-uploading";
import "./AddBlog.scss";

function AddBlog() {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  //   header image upload
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const [convertedText, setConvertedText] = useState("");

  return (
    <>
      <Button variant="warning" onClick={handleShow} className="w-10">
        Add Blog
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>BLOG POST HERE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="syne">
            {/* Image upload */}
            <p className="">Header Image</p>
            <div className="App pb-2">
              <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
                acceptType={["jpg"]}
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  // write your building UI
                  <div className="upload__image-wrapper">
                    <button
                      style={isDragging ? { color: "red" } : null}
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      Upload / Drag Image here
                    </button>
                    &nbsp;
                    {/* <button onClick={onImageRemoveAll}>
                      Remove all images
                    </button> */}
                    {imageList.map((image, index) => (
                      <div key={index} className="image-item">
                        <img src={image.data_url} alt="" width="400" />
                        <div className="image-item__btn-wrapper">
                          {/* <button onClick={() => onImageUpdate(index)}>
                            Update
                          </button> */}
                          <button
                            className="remove"
                            onClick={() => onImageRemove(index)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ImageUploading>
            </div>
            <div class="row mb-3 py-2">
              <label for="inputText" class="col-sm-3 col-form-label">
                Blog Title
              </label>
              <div class="col-sm-12">
                <input
                  type="text"
                  class="form-control"
                  //   onKeyUp={(e) => setPropertyName(e.target.value)}
                />
              </div>
            </div>

            {/* Form */}
            <p>Blog Body</p>
            <ReactQuill
              theme="snow"
              value={convertedText}
              onChange={setConvertedText}
              style={{ minHeight: "150px" }}
            />

            {/* Multiple Uploads */}
            {/* Image upload */}
            <p className="">Blog Images</p>
            <div className="App pb-5">
              <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
                acceptType={["jpg"]}
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  // write your building UI
                  <div className="upload__image-wrapper">
                    <button
                      style={isDragging ? { color: "red" } : null}
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      Upload / Drag Image here
                    </button>
                    &nbsp;
                    {/* <button onClick={onImageRemoveAll}>
                      Remove all images
                    </button> */}
                    {imageList.map((image, index) => (
                      <div key={index} className="image-item">
                        <img src={image.data_url} alt="" width="100" />
                        <div className="image-item__btn-wrapper">
                          {/* <button onClick={() => onImageUpdate(index)}>
                            Update
                          </button> */}
                          <button
                            className="remove"
                            onClick={() => onImageRemove(index)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ImageUploading>
            </div>
          </Container>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            style={{ backgroundColor: "#FC8F3A", border: "none" }}
            onClick={() => {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "New Blog added",
                showConfirmButton: false,
                timer: 1000,
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

export default AddBlog;
