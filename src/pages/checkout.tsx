import dynamic from "next/dynamic";

const PageComponent = dynamic(() => import("../components/Checkout"), {
  ssr: false,
});

const Checkout = () => {
  return (
    <>
      <PageComponent />
    </>
  );
};

export default Checkout;
