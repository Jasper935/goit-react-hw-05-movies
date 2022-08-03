import { PropTypes } from "prop-types";
export const CastsItem = ({ name, img }) => {
  const IMG = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      <p>{name ? name : 'No info'}</p>
      <img
        src={
          img
            ? IMG + img
            : 'https://s1.hostingkartinok.com/uploads/images/2022/07/40ceaea2e22257d2a139ca5a0c0b8ba9.jpg'
        }
        alt={name}
      />
    </>
  );
};

CastsItem.propTypes={
  name: PropTypes.string,
  img: PropTypes.string,
}