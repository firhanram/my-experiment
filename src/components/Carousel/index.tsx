import { CSSProperties, HTMLProps, useEffect, useRef, useState } from "react";
import clsx from "../../utils/clsx";

const CarouselItem = ({
  className,
  children,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className={clsx(
        "flex-shrink-0 h-[200px] bg-slate-300 flex items-center justify-center text-slate-900 rounded-md font-bold text-2xl snap-center w-[var(--width)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const Carousel = () => {
  const [widthItem, setWidthItem] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (container) {
      const cw = container.clientWidth;

      setWidthItem(cw);
    }
  }, []);

  return (
    <div className="py-[70px] px-20">
      <div className="max-w-screen-md mx-auto">
        <div className="grid grid-cols-2">
          <div className="relative">
            <div
              className="flex flex-nowrap gap-2 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              ref={ref}
            >
              {Array.from({ length: 3 }).map((_, index) => {
                return (
                  <CarouselItem
                    key={index}
                    style={
                      {
                        "--width": `${widthItem}px`,
                      } as CSSProperties
                    }
                  >
                    {index + 1}
                  </CarouselItem>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
