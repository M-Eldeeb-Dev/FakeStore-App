import { ClipLoader } from "react-spinners";
import "./index.scss";

function LoadingSpinner({ size = 60, color = "#6366f1" }) {
  return (
    <div className="loading-spinner-container">
      <ClipLoader
        color={color}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default LoadingSpinner;
