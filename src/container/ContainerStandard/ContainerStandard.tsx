import "./container.style";

type ContainerStandardProps = {
  children: React.ReactNode;
};

const ContainerStandard = ({ children }: ContainerStandardProps) => {
  return <ContainerStandard>{children}</ContainerStandard>;
};

export default ContainerStandard;
