import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
// import card1Img from "../assets/benefits/card-1.svg";
// import card2Img from "../assets/benefits/card-2.svg";
// import card3Img from "../assets/benefits/card-3.svg";
// import card4Img from "../assets/benefits/card-4.svg";
// import card5Img from "../assets/benefits/card-5.svg";
// import card6Img from "../assets/benefits/card-6.svg";

export default function Benefits() {
    // const images = [card1Img, card2Img, card3Img, card4Img, card5Img, card6Img]

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
                            className="block h-full relative p-0.5 bg-no-repeat bg-[length:100%_100%] max-[559px]:max-w-[20rem]"
                            style={{ backgroundImage: `url(/assets/benefits/card-${index + 1}.svg)` }}
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
