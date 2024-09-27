import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

export default function Benefits() {
    const backgroundClasses = [
        "bg-benefit-card-1",
        "bg-benefit-card-2",
        "bg-benefit-card-3",
        "bg-benefit-card-4",
        "bg-benefit-card-5",
        "bg-benefit-card-6",
    ];

    return (
        <Section id="features">
            <div className="container relative z-2">
                <Heading
                    className="md:max-w-md lg:max-w-2xl text-center"
                    title="Chat Smarter, Not Harder with Brainwave"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center lg:grid-cols-3 gap-8 md:gap-12 lg:gap-6 xl:gap-15">
                    {benefits.map((item, index) => (
                        <div
                            className={`block h-full relative p-0.5 bg-no-repeat bg-[length:100%_100%] max-[559px]:max-w-[20rem] ${backgroundClasses[index]}`}
                            key={item.id}
                        >
                            <div className="relative z-2 flex flex-col h-full md:min-h-[18rem] lg:min-h-[22rem] xl:p-[2.4rem] p-[1.5rem] pointer-events-none">
                                <h5 className="h5 mb-5">{item.title}</h5>
                                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                                <div className="flex items-center mt-auto">
                                    <img
                                        src={item.iconUrl}
                                        width={48}
                                        height={48}
                                        alt={item.title}
                                    />
                                    <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                                        Explore more
                                    </p>
                                    <Arrow />
                                </div>
                            </div>
                            {item.light && <GradientLight />}
                            <div
                                className="absolute inset-0.5 bg-n-8"
                                style={{ clipPath: "url(#benefits)" }}
                            >
                                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                                    {item.imageUrl && (
                                        <img
                                            src={item.imageUrl}
                                            width={380}
                                            height={362}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                            </div>
                            <ClipPath />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
