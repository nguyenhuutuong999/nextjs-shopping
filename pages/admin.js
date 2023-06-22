import Layout from "../components/layout/Layout";

const Admin = () => {
  return (
    <div>Admin
      
    </div>
  );
};

Admin.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Admin;
