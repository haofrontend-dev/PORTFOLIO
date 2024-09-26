import type { Animation } from "~/types/animation.type";

export const useAnimation = () => {
    const { $gsap } = useNuxtApp();

    const fade = (target: string, from: { [key: string]: number }) => {
        $gsap.from(target, {
            ...from,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: target,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });
    };

    const animation: Animation = {
        fade,
    };

    return animation;
};
