type BrandLogoProps = {
  alt?: string;
  className?: string;
  variant?: "light" | "dark";
};

const logoSources = {
  light: {
    svg: "/branding/ye77i-tech-logo-light.svg",
    png: "/branding/ye77i-tech-logo-light.png",
  },
  dark: {
    svg: "/branding/ye77i-tech-logo-dark.svg",
    png: "/branding/ye77i-tech-logo-dark.png",
  },
} as const;

export function BrandLogo({
  alt = "YE77I TECH logo",
  className = "h-auto w-[146px] sm:w-[160px]",
  variant = "light",
}: BrandLogoProps) {
  const source = logoSources[variant];

  return (
    <picture>
      <source srcSet={source.svg} type="image/svg+xml" />
      <img src={source.png} alt={alt} width={1200} height={700} className={className} />
    </picture>
  );
}
