const sizes = {
  medium: "750px",
  large: "990px",
  widescreen: "1400px"
};

export const devices = {
  small: `(max-width: ${sizes.medium})`,
  medium: `(min-width: ${sizes.medium}) and (max-width: ${sizes.large})`,
  mediumDown: `(max-width: ${sizes.large})`,
  mediumUp: `(min-width: ${sizes.medium})`,
  large: `(min-width: ${sizes.large}) and (max-width: ${sizes.widescreen})`,
  largeDown: `(max-width: ${sizes.widescreen})`,
  largeUp: `(min-width: ${sizes.large})`,
  widescreen: `(min-width: ${sizes.widescreen})`
};
