import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import {
  getAllOrders,
  clearErrors,
  deleteOrder,
} from "../../actions/OrderAction";
import { DELETE_ORDER_RESET } from "../../constans/OrderConstans";
import { ToastContainer, toast } from "react-toastify";

const AllOrder = ({ history }) => {
  const dispatch = useDispatch();

  const { error, orders } = useSelector((state) => state.AllOrders);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deleteOrder
  );
  const { user } = useSelector((state) => state.user);

  const deleteOrderHandler = (id) => {
    dispatch(deleteOrder(id));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      toast.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      toast.success("Order Deleted Successfully");
      history.push("/admin/orders");
      dispatch({ type: DELETE_ORDER_RESET });
    }

    dispatch(getAllOrders());
  }, [dispatch, error, deleteError, history, isDeleted]);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 50, flex: 0.5 },
    { field: "email", headerName: "Email", minWidth: 50, flex: 0.5 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 50,
      flex: 0.4,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "paid",
      headerName: "Payment",
      maxWidth: 50,
      flex: 0.4,
      cellClassName: (params) => {
        return params.getValue(params.id, "paid") === "Payment Verified"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Qty",
      type: "number",
      maxWidth: 50,
      flex: 0.3,
    },

    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      minWidth: 70,
      flex: 0.4,
    },

    {
      field: "actions",
      flex: 0.4,
      headerName: "Actions",
      minWidth: 50,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/admin/order/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() =>
                deleteOrderHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  orders &&
    orders.forEach((item) => {
      rows.push({
        id: item._id,
        email: user.email,
        itemsQty: item.orderItems.length,
        amount: item.totalPrice,
        status: item.orderStatus,
        paid: item.paidStatus,
      });
    });

  return (
    <Fragment>
      <MetaData title={`ALL ORDERS - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL ORDERS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={7}
            disableSelectionOnClick
            className="productListTable"
            // autoHeight
          />
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Fragment>
  );
};

export default AllOrder;
