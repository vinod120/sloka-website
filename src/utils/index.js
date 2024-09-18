const capitalizeFirstLetter = (string) => {
  if (!string || typeof string !== 'string') return "";
  return (
    string && string?.charAt(0).toUpperCase() + string?.slice(1).toLowerCase()
  );
};

const capitalizeEachWord = (string) => {
  if (!string || typeof string !== 'string') return "";
  return string && string?.replace(/\b\w/g, (char) => char.toUpperCase());
};
module.exports = { capitalizeFirstLetter, capitalizeEachWord };
