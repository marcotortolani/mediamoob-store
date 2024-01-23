import { flagsAPI } from '../utils/functions';

const lang = { es: 'ES', en: 'GB', us: 'US', pt: 'PT' };

export default function FlagBadge({ lang }) {
  const flag = flagsAPI(lang);

  return (
    <div className=' absolute top-1 right-1 sm:top-2 sm:right-2 w-6 h-4 sm:w-8 sm:h-6 p-1 bg-white flex items-center justify-center rounded-md '>
      {flag ? (
        <img src={flag} alt={`Flag Badge ${lang}`} />
      ) : (
        <span className=' text-xs md:text-base font-poppinsBold uppercase'>{lang}</span>
      )}
    </div>
  );
}
