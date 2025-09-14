const Spinner = ({ isWhite = false, width = 50, height = 50 }) => {
  return (
    <div className={`spinner ${isWhite ? "white" : ""}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        className="lds-rolling"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000"
        stroke={isWhite ? "#fff" : "#000"}
      >
        <circle
          cx="50"
          cy="50"
          r="20"
          strokeWidth="8"
          stroke="#000"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="31.415, 31.415"
          transform="rotate(72.5766 50 50)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            calcMode="linear"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1s"
            begin="0s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
};

export default Spinner;
