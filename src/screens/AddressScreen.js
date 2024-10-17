import React, { useEffect } from 'react';
import {  Link,  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listAddresses } from '../actions/addressActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { ADDRESS_DETAILS_RESET } from '../constants/addressConstants';
import {useNavigate } from 'react-router-dom';

export default function AddressListScreen() {
    const navigate = useNavigate();
  const addressesList = useSelector((state) => state.addressesList);
  const { loading, error, addressList } = addressesList;

  console(addressList)
  const userDelete = useSelector((state) => state.userDelete);
  const {
    success: successDelete,
  } = userDelete;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listAddresses());
    dispatch({
      type: ADDRESS_DETAILS_RESET,
    });
  }, [dispatch, successDelete]);
  const deleteHandler = () => {
   
  };

  return (
    <div className="address">
      <h1 className="addressH1">Your Addresses</h1>
      <Link to="/" >Add Address</Link>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
        <table className="table">
            <tbody>
              {addressList.map((address) => (
                <tr key={address._id}>
                  <td>{address.name}</td>
                  <td>{address.phone}</td>
                  <td>{address.pincode}</td>
                  <td>{address.addressLine}</td>
                  <td>{address.landmark}</td>
                  <td>{address.city}</td>
                  <td>{address.state}</td>
                  <td>{address.addressType}</td>
                  <td>
                    <button
                      type="button"
                      className="small"
                      onClick={() =>
                        navigate(`/address/${address._id}/edit`)
                      }
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="small"
                      onClick={() => deleteHandler(address)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </>
      )}
    </div>
  );
}