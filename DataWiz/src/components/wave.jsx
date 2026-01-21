const Wave = () => {
    return (
        <div className="w-full overflow-hidden">
            <svg
                className="absolute top-0 left-0 w-full h-40 md:h-56 pointer-events-none"
                viewBox="0 0 1440 320"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <style>{`

        @keyframes waveAnim {
          0% {
            d: path("M0,224L80,197.3C160,171,320,117,480,101.3C640,85,800,107,960,106.7C1120,107,1280,85,1360,74.7L1440,64L1440,0L0,0Z");
          }
          50% {
            d: path("M0,200L80,220C160,240,320,180,480,150C640,120,800,130,960,140C1120,150,1280,120,1360,100L1440,90L1440,0L0,0Z");
          }
          100% {
            d: path("M0,224L80,197.3C160,171,320,117,480,101.3C640,85,800,107,960,106.7C1120,107,1280,85,1360,74.7L1440,64L1440,0L0,0Z");
          }
        }
      `}</style>

                <path
                    className="wave-path fill-[#000b76]"
                    d="M0,224L80,197.3C160,171,320,117,480,101.3C640,85,800,107,960,106.7C1120,107,1280,85,1360,74.7L1440,64L1440,0L0,0Z"
                />
            </svg>
        </div>
    );
};

export default Wave;
