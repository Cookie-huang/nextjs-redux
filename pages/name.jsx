import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { wrapper } from "../store/store";
import Link from "next/link";
import { Button } from "antd";
import { changeNameAsync } from "../store/actionCreator";

export const getStaticProps = wrapper.getStaticProps(({ store, preview }) => {
  store.dispatch({ type: "CHANGE_NAME", name: "KKKKKKKKKKKKKK" });
});

const Name = () => {
  const dispatch = useDispatch();

  const { count, name } = useSelector(state => state);

  return (
    <>
      <h1>count:{count}</h1>
      <h1>name:{name}</h1>
      <Button
        type="danger"
        onClick={() =>
          dispatch({
            type: "CHANGE_NAME",
            name: "hhhhhhhhhhhhhh"
          })
        }
      >
        change name
      </Button>
      <Button type="danger" onClick={() => dispatch(changeNameAsync())}>
        async change name
      </Button>
      <Link href="/">
        <Button type="primary">back</Button>
      </Link>
    </>
  );
};

export default Name;
