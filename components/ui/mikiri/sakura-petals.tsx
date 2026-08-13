"use client"

import { useEffect, useState } from "react"

interface Petal {
    id: number
    left: number
    delay: number
    duration: number
    size: number
    variant: 1 | 2
    layer: "front" | "mid" | "back"
}

export function SakuraPetals() {
    const [petals, setPetals] = useState<Petal[]>([])
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        const generated: Petal[] = Array.from({ length: 18 }, (_, i) => {

            const layerRand = Math.random()

            let layer: Petal["layer"] = "mid"
            if (layerRand > 0.7) layer = "front"
            else if (layerRand < 0.3) layer = "back"

            return {
                id: i,
                layer,

                left: 5 + Math.random() * 90,
                delay: Math.random() * 20,
                size:
                    layer === "front"
                        ? 16 + Math.random() * 12
                        : layer === "mid"
                            ? 8 + Math.random() * 6
                            : 4 + Math.random() * 3,
                duration:
                    layer === "front"
                        ? 25 + Math.random() * 20
                        : layer === "mid"
                            ? 18 + Math.random() * 15
                            : 12 + Math.random() * 10,

                variant: (Math.random() > 0.5 ? 1 : 2) as 1 | 2,

            }
        })


        setPetals(generated)
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none" aria-hidden="true" >
            {petals.map((petal) => (
                <div
                    key={petal.id}
                    className={`absolute opacity-0 ${petal.layer === "front"
                        ? "blur-0"
                        : petal.layer === "mid"
                            ? "blur-[0.4px]"
                            : "blur-[1px]"
                        }`}
                    style={{
                        left: `${petal.left}%`,
                        top: `${-petal.size - Math.random() * 200}px`,
                        width: `${petal.size}px`,
                        height: `${petal.size}px`,
                        animation: `petal-drift${petal.variant === 2 ? "-2" : ""} ${petal.duration}s linear ${petal.delay}s infinite`,
                        willChange: "transform",
                    }}
                >
                    <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        className="w-full h-full"
                    >
                        <path
                            d="M10 2C10 2 14 6 14 10C14 14 10 18 10 18C10 18 6 14 6 10C6 6 10 2 10 2Z"
                            fill="#F9A8D4"
                            fillOpacity={0.7}
                            style={{ filter: "drop-shadow(0 0 2px rgba(249,168,212,0.4))" }}
                        />
                    </svg>
                </div>
            ))}
        </div>
    )
}