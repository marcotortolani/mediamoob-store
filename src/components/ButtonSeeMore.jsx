export default function ButtonSeeMore({
  handleClick,
  text = 'Ver todos',
  color = 'bg-moobSky',
}) {
  return (
    <button
      className={`${color}  px-2 py-1 text-xs text-white lowercase rounded-full  
      md:px-3 lg:px-5 md:text-base lg:text-lg`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
