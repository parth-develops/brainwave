import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

export default function PricingList() {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[1rem]">
            {pricing.map(item => (
                <div key={item.id} className="flex flex-col max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto sm:even:py-14 sm:odd:py-8 sm:odd:my-4 py-5 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3">
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 mb-5 sm:mb-10 text-n-1/50">{item.description}</p>
                    {item.price && (
                        <div className="flex items-center h-[5.5rem] mb-6">
                            <>
                                <div className="h3">$</div>
                                <div className="text-[4rem] lg:text-[5.5rem] leading-none font-bold">{item.price}</div>
                            </>
                        </div>
                    )}
                    <div className="mt-auto">
                        <Button className={`w-full mb-6`} href={item.price ? "/pricing" : "mailto:info@xyz.com"} white={!!item.price} >
                            {item.price ? "Get Started" : "Contact us"}
                        </Button>
                        <ul>
                            {item.features.map((feature, index) => (
                                <li key={index} className="flex items-start py-5 border-t border-n-6">
                                    <img src={check} width={24} height={24} alt="check" />
                                    <p className="body-2 ml-4">{feature}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}
