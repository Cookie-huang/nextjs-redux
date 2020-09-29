import React from "react";
import { useSelector } from "react-redux";
import { wrapper } from "../store/store";
import Link from "next/link";
import { Button } from "antd";

export const getStaticProps = wrapper.getStaticProps(({ store, preview }) => {
  store.dispatch({ type: "ADD", count: 1 });
});

const Count = () => {
  const { count, name } = useSelector(state => state);

  return (
    <>
      <h1>count:{count}</h1>
      <h1>name:{name}</h1>
      <Link href="/">
        <Button type="primary">back</Button>
      </Link>
    </>
  );
};

export default Count;
