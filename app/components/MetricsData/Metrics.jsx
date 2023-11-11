"use client"

import CountUp from "react-countup";
import { metricsCounter } from "./MetricsData";

export default function Metrics()
{
    return (
        <section className="hidden lg:block max-w-7xl mx-auto py-20">
            <div className="justify-between md:flex">
                {metricsCounter.map( ( { id, startAt, endAt, description } ) => (
                    <div key={id} className="py-5 text-2xl text-left lg:text-center mx-3">

                        <span className="mr-2">+</span>

                        <CountUp
                            start={startAt}
                            end={endAt}
                            duration={1.3}
                            enableScrollSpy
                            className="text-wirex-dark-green font-[600] text-2xl lg:text-4xl"
                        />

                        <span className="text-wirex-black font-[600] ml-2">{description}</span>
                    </div>
                ) )}
            </div>
        </section>
    )
}
