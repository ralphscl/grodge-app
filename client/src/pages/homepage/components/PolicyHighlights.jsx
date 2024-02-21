import PolicyCard from "../../../components/card/PolicyCard";
import ThreeColumn from "../../../components/container/ThreeColumn";

const PolicyHighlights = () => {
  return (
    <>
      <ThreeColumn component={<PolicyCard />} dataObj={[0,1,2]}/>
    </>
  );
}

export default PolicyHighlights;