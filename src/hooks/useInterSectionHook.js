import { useEffect, useRef, useState } from "react";

const useInterSectionHook = (onObserve) => {
	const [isIntersecting, setIsIntersecting] = useState(false);

	const elementRef = useRef();
	const observer = useRef(
		new IntersectionObserver((entries) => {
			const entry = entries[0];
			if (entry) {
				setIsIntersecting(entry.isIntersecting);
			}
		})
	);

	useEffect(() => {
		if (isIntersecting) onObserve();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isIntersecting]);

	useEffect(() => {
		const obs = observer.current;
		const elm = elementRef.current;
		if (obs && elm) {
			obs.observe(elm);
		}

		return () => {
			obs.disconnect();
		};
	});

	return [elementRef];
};

export default useInterSectionHook;
