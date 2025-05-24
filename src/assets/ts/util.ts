export const getVisibleSensorAnimation = (
  isVisible: boolean,
  animation: string
) => ({
  animation: isVisible ? animation : "",
  opacity: !isVisible ? 0 : 1,
});

export const flipPercentage = (value: string) =>
  value?.includes("%") ? `%${value.slice(0, value.length - 1)}` : value;

export const getDelayedIndexBasedAnimationTime = (
  windowWidth: number,
  index: number,
  indexDelay = 0.25,
  additionaldelay = 0
) => (windowWidth < 1024 ? 0 : index * indexDelay + additionaldelay);

export const setAdditionalClasses = (
  classnames: string[],
  conditions: boolean[]
) => {
  let finalClasses = " ";
  for (let i = 0; i < classnames.length; i++) {
    if (conditions[i]) finalClasses += `${classnames[i]} `;
  }
  return finalClasses;
};

export const getRightContent = (rtl: boolean, contentList: any[]) =>
  rtl ? contentList[1] : contentList[0];

// Download Center

export function capitalize(name: string) {
  return name?.charAt(0).toUpperCase() + name?.slice(1);
}

export function formatNumber(value: number) {
  return value.toLocaleString("en", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 3,
  });
}

