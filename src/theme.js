const burntOrange = "#CF5300";
const oliveGreen = "#75A325";
const oliveGreenDark = "#6B8f25";
const mossGreen = "#808F00";

export const primaryColor = burntOrange;
export const accentColor = oliveGreen;
export const accentColorDark = oliveGreenDark;

export const primaryTextLight = "#FFFFFF";
export const secondaryTextLight = opacity70(primaryTextLight);
export const disabledTextLight = opacity50(primaryTextLight);

export const primaryTextDark = opacity87("#000000");
export const secondaryTextDark = opacity54("#000000");
export const disabledTextDark = opacity38("#000000");

export const iconDark = opacity87("#000000");
export const iconDarkActive = opacity54("#000000");
export const iconDarkInactive = opacity38("#000000");

export const iconLightActive = "#FFFFFF";
export const iconLightInactive = opacity50("#FFFFFF");

export const grey50 = "#FAFAFA";
export const grey100 = "#F5F5F5";
export const grey200 = "#EEEEEE";
export const grey300 = "#E0E0E0";
export const grey400 = "#BDBDBD";
export const grey500 = "#9E9E9E";
export const grey600 = "#757575";
export const grey700 = "#616161";
export const grey800 = "#424242";
export const grey900 = "#212121";

export const bluegrey50 = "#ECEFF1";
export const bluegrey100 = "#CFD8DC";
export const bluegrey200 = "#B0BEC5";
export const bluegrey300 = "#90A4AE";
export const bluegrey400 = "#78909C";
export const bluegrey500 = "#607D8B";
export const bluegrey600 = "#546E7A";
export const bluegrey700 = "#455A64";
export const bluegrey800 = "#37474F";
export const bluegrey900 = "#263238";

export const clear = "#00000000";

export function opacity87(hexColor) {
  return hexColor + "DE";
}

export function opacity54(hexColor) {
  return hexColor + "8A";
}

export function opacity38(hexColor) {
  return hexColor + "61";
}

export function opacity70(hexColor) {
  return hexColor + "B2";
}

export function opacity50(hexColor) {
  return hexColor + "80";
}
