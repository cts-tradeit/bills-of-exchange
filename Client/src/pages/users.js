import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { getUsers } from "../api/index";
import Container from "@mui/material/Container";
import User from "../components/user";
import { makeStyles } from "@mui/styles";

const PAGE_LIMIT = 5;

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "10px",
  },
  pagination: {
    marginTop: "10px",
  },
}));

export default function Home() {
  const [users, setUsers] = useState([]);
  const [visibleUsers, setVisibleUsers] = useState([]);
  const [page, setPage] = React.useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    let userList = getUsers();
    setUsers(userList.data);
  }, [users]);

  useEffect(() => {
    let newVisibleUsers = users.slice(page, page + PAGE_LIMIT);
    setVisibleUsers(newVisibleUsers);
  }, [page, users]);

  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="sm">
      {visibleUsers.map((user) => (
        <User name={user.Name} id={user.Id} />
      ))}
      <Pagination
      className={classes.pagination}
        count={Math.ceil(users.length / PAGE_LIMIT)}
        onChange={handlePageChange}
      />
    </Container>
  );
}
