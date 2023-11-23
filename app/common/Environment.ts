export const initEnvironment = (commonStore) => {
  window.addEventListener("resize", () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    commonStore.setBaseInfo({
      ...commonStore.baseInfo,

      width,
      height,
    });
  });
};
