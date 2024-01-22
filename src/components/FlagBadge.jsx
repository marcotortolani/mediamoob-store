import { flagsAPI } from '../utils/functions';

const lang = { es: 'ES', en: 'GB', us: 'US', pt: 'PT' };

export default function FlagBadge({ lang }) {
  return (
    <div className=' absolute top-2 right-2 w-8 h-6 p-1 bg-white flex items-center justify-center rounded-md '>
      <img src={flagsAPI(lang)} alt={`Flag Badge ${lang}`} />
    </div>
  );
}
