export function getEnglishFormat(dateString) {
  if (dateString.includes('/')) {
    const [day, month, year] = dateString.split('/');
    return `${month}/${day}/${year}`;
  } else if (dateString.includes('-')) {
    const [day, month, year] = dateString.split('-');
    return `${month}/${day}/${year}`;
  }

  return 'Format error';
}

export function getTimeStamp(dateString) {
  return new Date(dateString).getTime();
}

export function sortArrayByDate(array) {
  const arraySorted = array.slice();
  return arraySorted.sort((a, b) => {
    return (
      getTimeStamp(getEnglishFormat(b.dateCreated)) -
      getTimeStamp(getEnglishFormat(a.dateCreated))
    );
  });
}

export function flagsAPI(lang) {
  const langSubfix = { es: 'ES', en: 'GB', pt: 'BR' };
  const langAPI = langSubfix[lang];

  if (langAPI) {
    return `https://flagsapi.com/${langAPI}/flat/32.png`;
  } else {
    return false;
  }
}
