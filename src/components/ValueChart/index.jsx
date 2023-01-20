export const ValueChart = ({ borderRadius }) => {
  const valueBorderRadius = `border-radius: ${
    borderRadius.topLeft != 0
      ? borderRadius.topLeft + "px"
      : borderRadius.topLeft
  } ${
    borderRadius.topRight != 0
      ? borderRadius.topRight + "px"
      : borderRadius.topRight
  } ${
    borderRadius.bottomRight != 0
      ? borderRadius.bottomRight + "px"
      : borderRadius.bottomRight
  } ${
    borderRadius.bottomLeft != 0
      ? borderRadius.bottomLeft + "px"
      : borderRadius.bottomLeft
  };`;

  const clipboardValue = () => {
    navigator.clipboard.writeText(valueBorderRadius);
  };

  return (
    <>
      <div className="my-5 flex h-[51px] min-w-[286px] justify-between whitespace-nowrap rounded-md bg-chartColor p-3 text-center font-Ubuntu-Mono text-white">
        {valueBorderRadius}
        <img
          className="ml-3 cursor-pointer"
          src="/copy-icon.svg"
          alt="copy icon"
          onClick={clipboardValue}
        />
      </div>
    </>
  );
};
