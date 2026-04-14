import MainLayout from "../components/layout/MainLayout";
import Card from "../components/elements/card";

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Users" value="1,200" />
        <Card title="Revenue" value="$8,400" />
        <Card title="Orders" value="320" />
      </div>
    </MainLayout>
  );
};

export default Dashboard;