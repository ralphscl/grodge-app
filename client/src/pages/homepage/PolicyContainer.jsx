import PolicyCard from "../../components/card/PolicyCard";
import ThreeColumn from "../../components/container/ThreeColumn";

const PolicyContainer = () => {
  return (
    <>
      <ThreeColumn component={<PolicyCard />} array={[0,1,2]}/>
    </>
  );
}

export default PolicyContainer;