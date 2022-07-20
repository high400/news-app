import Head from "next/head";
import styles from "../styles/EOM.module.css";
import { Toolbar } from "../components/toolbar";
import Background from "../components/background";

export const Developer = ({ employee }) => {
  console.log(employee);
  return (
    <>
      <div className="page-container">
        <Background />
        <div className={styles.main}>
          <h1>A web developer in 7 years 😌😌😌😌</h1>

          <div className={styles.employeeOfTheMonth}>
            <h3>{employee.name}</h3>
            
            <img src={employee.image} />
            <h6>{employee.description}</h6>
          </div>
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

export default Developer;
