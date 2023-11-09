const toSlug = (val = '') => val.normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '').replace(/ /g, '-').toLowerCase();

export const extractSegment = (slug, separator = '.', at = 0) => {
  const splitted = slug?.split(separator);
  if (at >= 0) {
    return splitted[ at ];
  }
  return splitted[ splitted.length - (-at) ];
};

export const revertSlug = (slug = '') => decodeURIComponent(slug)

export default toSlug;
