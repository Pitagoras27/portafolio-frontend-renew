export const pathSectionFriendly = (titleTopic) => titleTopic.replace(/,?\s+/g, '-').toLowerCase();

export const pathSection = (titleTopic = '') => {
  const capitalize = titleTopic.substring(0,1)?.toUpperCase();
  const format = titleTopic.replace(/-/g, ' ').slice(1);

  return capitalize + format;
}

export const contentSectionTopic = (data, section) => data.filter((item) => item.section === section);

export const contentSection = (data, id) => data.find((item) => item.id === Number(id));
