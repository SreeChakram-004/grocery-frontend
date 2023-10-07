import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../slices/dataSlice";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableHead, TablePagination, TextField } from "@mui/material";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const DataTable = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);

  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("productName");
  const [sortDirection, setSortDirection] = useState("asc");

  useEffect(() => {
    // Fetch data on component mount
    dispatch(fetchData({
      page: page + 1, // Page starts from 1
      limit: pageSize,
      sortBy: sortColumn,
      sortDirection,
      search: searchTerm,
    }));
  }, [dispatch, page, pageSize, searchTerm, sortColumn, sortDirection]);
  
  const dataArray = data.products ? data.products : [];

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection((prevSortDirection) =>
        prevSortDirection === "asc" ? "desc" : "asc"
      );
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handlePageSizeChange = (event) => {
    setPageSize(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    // If the search term is empty, fetch all data
    if (searchTerm === "") {
      const queryParams = {
        page: page + 1,
        limit: pageSize,
        sortBy: sortColumn,
        sortDirection,
        search: null, // Pass null for no search term
      };
      dispatch(fetchData(queryParams));
    } else {
      setPage(0); // Reset page to 0 when a new search term is entered
    }
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        onChange={handleSearch}
        value={searchTerm}
        style={{ marginBottom: "16px" }}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell onClick={() => handleSort("productName")}>
                ProductName{" "}
                {sortColumn === "productName" &&
                  (sortDirection === "asc" ? (
                    <ArrowUpward />
                  ) : (
                    <ArrowDownward />
                  ))}
              </StyledTableCell>

              <StyledTableCell onClick={() => handleSort("productPrice")}>
                ProductPrice{" "}
                {sortColumn === "productPrice" &&
                  (sortDirection === "asc" ? (
                    <ArrowUpward />
                  ) : (
                    <ArrowDownward />
                  ))}
              </StyledTableCell>
              <StyledTableCell onClick={() => handleSort("discount")}>
                Discount{" "}
                {sortColumn === "discount" &&
                  (sortDirection === "asc" ? (
                    <ArrowUpward />
                  ) : (
                    <ArrowDownward />
                  ))}
              </StyledTableCell>
              <StyledTableCell onClick={() => handleSort("ourPrice")}>
                StorePrice{" "}
                {sortColumn === "ourPrice" &&
                  (sortDirection === "asc" ? (
                    <ArrowUpward />
                  ) : (
                    <ArrowDownward />
                  ))}
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {dataArray.map((row, index) => (
            <StyledTableRow key={index}>
                <StyledTableCell>{row.productName}</StyledTableCell>
                <StyledTableCell>{row.productPrice}</StyledTableCell>
                <StyledTableCell>{row.discount}</StyledTableCell>
                <StyledTableCell>{row.ourPrice}</StyledTableCell>
            </StyledTableRow>
        ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={dataArray.length}
        page={page}
        onPageChange={handlePageChange}
        rowsPerPage={pageSize}
        onRowsPerPageChange={handlePageSizeChange}
        rowsPerPageOptions={[5, 10, 20]}
      />
    </div>
  );
};

export default DataTable;
