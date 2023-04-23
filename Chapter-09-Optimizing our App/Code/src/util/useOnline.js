import { useEffect, useState } from "react";

export const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  const handleOnline = () => setIsOnline(true);
  const handleOffline = () => setIsOnline(false);

  // We want our event listeners to call only once when page loads so using useEffect
  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    // unmounting is must for event listeners to be cleared
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};
