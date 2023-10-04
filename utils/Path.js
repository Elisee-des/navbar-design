import { parse } from "react-native-redash";
export const getPathXCenter = (currentPath) => {
  const parsedData = parse(currentPath);
  if (parsedData && parsedData.curves) {
    const curves = parsedData.curves;
    const startPoint = curves[0].to;
    const endPoint = curves[curves.length - 1].to;
    const centerX = (startPoint.x + endPoint.x) / 2;
    return centerX;
  }
  // Gérer le cas où parse(currentPath) ou parse(currentPath).curves est undefined/null
  return 0; // Ou une valeur par défaut appropriée
};

export const getPathXCenterByIndex = (tabPaths, index) => {
  const pathData = tabPaths[index];
  if (pathData && pathData.curves) {
    const curves = pathData.curves;
    const startPoint = curves[0].to;
    const endPoint = curves[curves.length - 1].to;
    const centerX = (startPoint.x + endPoint.x) / 2;
    return centerX;
  }
  // Gérer le cas où tabPaths[index] ou tabPaths[index].curves est undefined/null
  return 0; // Ou une valeur par défaut appropriée
};
