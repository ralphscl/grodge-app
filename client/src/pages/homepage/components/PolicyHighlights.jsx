import PolicyCard from "../../../components/card/PolicyCard";
import ThreeColumn from "../../../components/container/ThreeColumn";

const PolicyHighlights = ({ dataObj }) => {
  return (
    <>
      <ThreeColumn component={<PolicyCard />} dataObj={dataObj}/>
    </>
  );
}

export default PolicyHighlights;