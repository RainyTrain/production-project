import {
  ImgHTMLAttributes,
  ReactElement,
  useLayoutEffect,
  useState,
} from "react";

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  fallback?: ReactElement;
  errorFallback?: ReactElement;
}

export const AppImage = (props: AppImageProps) => {
  const {
    className,
    src,
    alt = "image",
    fallback,
    errorFallback,
    ...otherProps
  } = props;

  const [isLoading, setIsLloading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useLayoutEffect(() => {
    const img = new Image();
    img.src = src ?? "";
    img.onload = () => setIsLloading(false);
    img.onerror = () => setHasError(true);
  }, [src]);

  if (isLoading && fallback) {
    return fallback;
  }

  if (errorFallback && hasError) {
    return errorFallback;
  }

  return <img src={src} className={className} {...otherProps} alt={alt} />;
};
