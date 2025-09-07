import React from 'react';

interface HeroProps {
  title: string;
  synopsis: string;
  bannerImage: string;
  accentColor: string;
}

const Hero: React.FC<HeroProps> = ({ title, synopsis, bannerImage, accentColor }) => {
  const gradientStyle = {
    background: `linear-gradient(to top, rgba(15, 23, 42, 1) 5%, rgba(15, 23, 42, 0.5) 100%), url(${bannerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center 20%',
  };

  const titleStyle = {
    textShadow: `0 0 15px var(--color-${accentColor})`,
  };

  return (
    <div
      className="relative rounded-lg overflow-hidden min-h-[400px] flex flex-col justify-end p-8 md:p-12 text-white shadow-2xl"
      style={gradientStyle}
    >
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4" style={titleStyle}>
          {title}
        </h1>
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
          {synopsis}
        </p>
      </div>
    </div>
  );
};

export default Hero;
