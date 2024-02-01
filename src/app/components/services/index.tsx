import { useInView } from 'react-intersection-observer';


export default function Services() {

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });

    return (
        <div className={`flex h-screenflex h-screen ${inView ? 'ok' : 'no'}`} ref={ref}>
            Services {`Header inside viewport ${inView}.`}
        </div>
    )
}