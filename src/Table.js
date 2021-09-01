import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Loading from "./Loading";
// Action Creators
import { getAllDates } from "./state/data/dataActions";

function Table() {
  // init redux
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  const { loading, dates } = data;

  console.log(dates);

  useEffect(() => {
    dispatch(getAllDates());

    return () => console.log("clean me");
  }, [dispatch]);
  return (
    <TableStyles>
      <div className="headers">
        <h3 className="grid-item">2019</h3>
        <h3 className="grid-item">2020</h3>
        <h3 className="grid-item">2021</h3>
      </div>
      <div className="rows">
        {loading ? (
          <Loading />
        ) : (
          dates?.map(({ id, date, ISODate }) => {
            return (
              <div className="dates grid-item" key={id}>
                <p>{date}</p>
                {ISODate && <p>{ISODate}</p>}
              </div>
            );
          })
        )}
      </div>
    </TableStyles>
  );
}

const TableStyles = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0 auto;

  .grid-item {
    margin: 5px auto;
    padding: 10px;
  }
`;

export default Table;
