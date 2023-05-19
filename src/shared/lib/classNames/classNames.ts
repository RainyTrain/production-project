type Mods = Record<string, boolean | string>;

export const classNames = (cls: string, mods: Mods = {}, additional: string[] = []): string => {
  const classes = [
    cls,
    ...Object.keys(mods).filter((item) => mods[item]),
    ...additional.filter(Boolean),
  ];
  return classes.join(' ');
};
 