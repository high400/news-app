import Head from "next/head";
import styles from "../styles/EOM.module.css";
import { Toolbar } from "../components/toolbar";

export const EOM = ({ employee }) => {
  console.log(employee);
  return (
    <>
      <div className="page-container">
        <div>
          <h1>Employee of the month</h1>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch(
    "https://my-json-server.typicode.com/high400/news-app/employeeOfTheMonth"
  );
  const employee = await apiResponse.json();

  return {
    props: {
      employee,
    },
  };
};

export default EOM;
