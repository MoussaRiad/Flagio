import React, {createContext, useState } from "react";

 export const ThemeColors = {
  light: "light",
  dark: "dark"
};

  const ThemeColorContext = createContext({
  theme: ThemeColors.light,
  changeTheme: (color) => {},
});

export function ThemeContextProvider(props) {
  const [color, setColor] = useState(ThemeColors.light);

  return (
    <ThemeColorContext.Provider
      value={{ theme: color, changeTheme: setColor }}
    >
      {props.children}
    </ThemeColorContext.Provider>
  );
}

export default ThemeColorContext