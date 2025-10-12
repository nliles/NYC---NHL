export const saveToStorage = (landmarks: string[]) => {
  try {
    localStorage.setItem("visitedLandmarks", JSON.stringify(landmarks));
  } catch (error) {
    console.warn("Failed to save visited landmarks to localStorage:", error);
  }
};

export const getLocalStorage = () => {
  try {
    const storedLandmarks = localStorage.getItem("visitedLandmarks");
    return storedLandmarks ? JSON.parse(storedLandmarks) : [];
  } catch (error) {
    console.warn("Failed to load visited landmarks from localStorage:", error);
  }
};
