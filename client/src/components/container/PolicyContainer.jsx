import PolicyCard from "../card/PolicyCard";
import ThreeColumn from "./ThreeColumn";

const PolicyContainer = () => {
  return (
    <>
      <ThreeColumn component={<PolicyCard />} array={[0,1,2]}/>
    </>
  );
}

export default PolicyContainer;