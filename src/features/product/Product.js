import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAllProducts, addProduct, clearSuccess } from "./product.slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TablePagination from "@mui/material/TablePagination";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Modal,
  Form,
  Spinner,
} from "react-bootstrap";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { ConfirmationModal } from "../../components/Modal/ConfirmationModal";

export function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showDeleteProductModal, setShowDeleteProductModal] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    description: "",
  });

  const dispatch = useDispatch();
  const { data = [], isLoading, isError, isSuccess, error } = useSelector(
    (state) => state.product || {}
  );

  const handleCloseAddProductModal = () => setShowAddProductModal(false);
  const handleShowAddProductModal = () => setShowAddProductModal(true);

  const onChangeInput = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleProduct = (e) => {
    e.preventDefault();
    const { name, description } = product;

    if (!name.trim() || !description.trim()) {
      toast.error("Please fill in all fields!", { theme: "colored" });
      return;
    }

    dispatch(addProduct({ name, description }))
      .unwrap()
      .then(() => {
        toast.success("Product added successfully!", { theme: "colored" });
        setProduct({ name: "", description: "" });
      })
      .catch(() => {
        toast.error("Failed to add product!", { theme: "colored" });
      })
      .finally(() => {
        handleCloseAddProductModal();
        dispatch(clearSuccess());
      });
  };

  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage + 1);
  };

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <Container fluid>
      <Sidebar />
      <ToastContainer />
      <Row className="m-5">
        <Col>
          <div className="d-flex pt-5 pb-2 justify-content-start">
            <h1 className="fw-bold text-uppercase">Products List</h1>
          </div>

          <div className="d-flex pb-2 justify-content-end">
            <Button
              variant="primary"
              className="primary-btn fw-bold"
              onClick={handleShowAddProductModal}
            >
              Add New Product
            </Button>
          </div>

          {isLoading ? (
            <div className="text-center py-5">
              <Spinner animation="border" />
            </div>
          ) : isError ? (
            <p className="text-danger fw-bold">Error: {error || "Failed to load products."}</p>
          ) : (
            <>
              <Table bordered hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.length > 0 ? (
                    currentItems.map((item, index) => (
                      <tr key={item.id || index}>
                        <td>{indexOfFirstItem + index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="text-center">
                        No products available.
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>

              <TablePagination
                component="div"
                count={data.length}
                page={currentPage - 1}
                onPageChange={handlePageChange}
                rowsPerPage={itemsPerPage}
                rowsPerPageOptions={[10]}
              />
            </>
          )}
        </Col>
      </Row>

      {/* Add Product Modal */}
      <Modal show={showAddProductModal} onHide={handleCloseAddProductModal}>
        <form onSubmit={handleProduct}>
          <Modal.Header closeButton>
            <Modal.Title>Add Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="productName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={product.name}
                onChange={onChangeInput}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="productDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={product.description}
                name="description"
                onChange={onChangeInput}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseAddProductModal}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </form>
      </Modal>

      {/* Delete Confirmation (future use) */}
      <ConfirmationModal
        show={showDeleteProductModal}
        onHide={() => setShowDeleteProductModal(false)}
        title="Delete Product"
        message="Are you sure you want to delete this product?"
        onConfirm={() => console.log("Delete confirmed")}
      />
    </Container>
  );
}
