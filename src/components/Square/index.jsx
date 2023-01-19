export const Square = ({ borderRadius }) => {
  return (
    <>
      <div
        className="top-[72px] my-3 h-squareHeight w-squareWidth bg-squareColor"
        style={{
          borderRadius: `${borderRadius.topLeft}px ${borderRadius.topRight}px ${borderRadius.bottomRight}px ${borderRadius.bottomLeft}px`,
        }}
      ></div>
    </>
  );
};
