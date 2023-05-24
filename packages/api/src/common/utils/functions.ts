/**
 * normalizeString
 * @description - replace special characters from a string
 * @use - normalizeString('Fábula Niño');
 * @function
 * @param {string} str - string to parse
 * @return {string} string parsed (e.g. Fabula Nino)
 */
export const normalizeString = (str: string) => {
  // VARIABLES
  const from = 'ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç';
  const to = 'AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc';
  const mapping: Record<string, string> = {};
  for (let i = 0; i < from.length; i++) {
    mapping[from.charAt(i)] = to.charAt(i);
  }
  const ret = [];
  for (let i = 0; i < str.length; i++) {
    const c = str.charAt(i);
    if (mapping.hasOwnProperty(str.charAt(i))) {
      ret.push(mapping[c]);
    } else {
      ret.push(c);
    }
  }
  return ret.join('');
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const objToParams = (queryParams: { [key: string]: any }) => {
  const url = new URL('');
  Object.entries(queryParams).forEach(([key, value]) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    url.searchParams.append(key, value);
  });
  return url.toString();
};
