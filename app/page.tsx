import Countdown from "@/components/counter";

export default function Home() {
    return (
        <section className="flex flex-col space-y-4 items-center justify-center">
            <h4 className="text-4xl md:text-8xl">Launching in</h4>
            <Countdown />
        </section>
    );
}
