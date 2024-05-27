import { Accordion, AccordionItem, AccordionItem as Item } from "@szhsin/react-accordion";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { BackgroundGradient } from "../component/ui/Background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */

export function Faq({ header, ...rest }) {
    <Item
        {...rest}
        header={({ state: { isEnter } }) => (
            <>
                {header}
                <img
                    className={`ml-auto transition-transform duration-200 ease-out chev-svg ${isEnter && "rotate-180"
                        }`}
                    src="/chevron-down.svg"
                    alt="Chevron"
                />
            </>
        )}
        className="border-b"
        buttonProps={{
            className: ({ isEnter }) =>
                `flex w-full p-4 text-left hover:bg-[#030637] ${isEnter && "bg-[#720455]"
                }`
        }}
        contentProps={{
            className: "transition-height duration-200 ease-out"
        }}
        panelProps={{ className: "p-4" }}
    />

return (
    <div>
        <BackgroundGradient className="rounded-sm m-auto py-12 px-4 shadow-xl max-w-5xl">
        <div className="container mx-auto">
            <Accordion transition transitionTimeout={200} className="max-w-5xl lg:px-0 px-4 m-auto " >
                <AccordionItem header="What is Lorem Ipsum?" initialEntered>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionItem>

                <AccordionItem header="Where does it come from?">
                    Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
                    erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionItem>

                <AccordionItem header="Why do we use it?">
                    Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.
                    Fusce vulputate purus sed tempus feugiat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionItem>
            </Accordion>
            </div>
        </BackgroundGradient>
    </div>
);
}

