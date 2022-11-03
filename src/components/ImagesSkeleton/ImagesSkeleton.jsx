import ContentLoader from 'react-content-loader';

const ImagesSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={1487}
      height={500}
      viewBox="0 0 1487 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="3" ry="3" width="365" height="244" />
      <rect x="373" y="0" rx="3" ry="3" width="365" height="244" />
      <rect x="746" y="0" rx="3" ry="3" width="365" height="244" />
      <rect x="1119" y="0" rx="3" ry="3" width="365" height="244" />
      <rect x="0" y="255" rx="3" ry="3" width="365" height="244" />
      <rect x="373" y="255" rx="3" ry="3" width="365" height="244" />
      <rect x="746" y="255" rx="3" ry="3" width="365" height="244" />
      <rect x="1119" y="255" rx="3" ry="3" width="365" height="244" />
    </ContentLoader>
  );
};

export default ImagesSkeleton;
