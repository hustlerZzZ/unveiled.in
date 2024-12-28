import Countdown from "@/components/counter";

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center">
            <h4 className="text-8xl">Launching in</h4>
            <Countdown />
        </section>
    );
}
