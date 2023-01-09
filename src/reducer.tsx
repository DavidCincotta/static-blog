export const initialState = {
  useLight:true
};

export interface ThemeProps{
	state:{useLight:boolean};
	dispatch:Function;
}
export const ThemeInitializer = {
	state:initialState,
	dispatch:reducer,
}

export default function reducer(state:{useLightTheme:boolean}, action:{type:string,value:boolean}) {
  switch (action.type) {
  	case "setTheme":
		return {...state, useLight: action.value}
	case "toggleTheme":
		return {...state, useLight: !state.useLight}
	case "setDark":
		return {...state, useLight: false}
	case "setLight":
		return {...state, useLight: true}
  /*
    case "setTheme":
      return { ...state, currentTheme: action.value };
    case "updateTheme":
      return {
        ...state,
        currentTheme: { ...theme[state.currentTheme.id], ...action.value }
      };
    case "toggleTheme": {
      const newThemeKey = state.currentTheme.id === "dark" ? "light" : "dark";
      return { ...state, currentTheme: theme[newThemeKey] };
    }
	*/
    default:
      throw new Error();
  }
}


