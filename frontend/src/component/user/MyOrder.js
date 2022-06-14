import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./myOrders.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, myOrders } from "../../actions/OrderAction";
import { Link } from "react-router-dom";
import MetaData from "../../more/Metadata";
import LaunchIcon from "@material-ui/icons/Launch";
import Loading from "../../more/Loader";
import BottomTab from "../../more/BottomTab";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Home/Header";
import Footer from "../footer/Footer";
import MyOrderDetails from "./MyOrderDetails";

const MyOrder = () => {
  const dispatch = useDispatch();

  const { loading, error, orders } = useSelector((state) => state.myOrder);

  const { user } = useSelector((state) => state.user);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 50, flex: 0.5 },
    { field: "time", headerName: "Ordered On", maxWidth: 50, flex: 0.5 },

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
      maxWidth: 70,
      flex: 0.4,
    },

    {
      field: "actions",
      flex: 0.4,
      headerName: "View Order",
      minWidth: 50,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Link to={`/order/${params.getValue(params.id, "id")}`}>
            <LaunchIcon />
          </Link>
        );
      },
    },
  ];
  const rows = [];

  orders &&
    orders.forEach((item, index) => {
      rows.push({
        itemsQty: item.orderItems.length === 0 ? 1 : item.orderItems.length,
        id: item._id,
        time: item.createdAt,
        status: item.orderStatus,
        paid: item.paidStatus,
        amount: item.totalPrice,
      });
    });

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    dispatch(myOrders());
  }, [dispatch, error]);

  return (
    <Fragment>
      <MetaData title={`${user.name} - Orders`} />

      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <div className="myOrdersPage">
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={8}
              disableSelectionOnClick
              className="myOrdersTable"
              // autoHeight
            />
          </div>
          <Footer />
        </>
      )}
      <BottomTab />
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

export default MyOrder;
