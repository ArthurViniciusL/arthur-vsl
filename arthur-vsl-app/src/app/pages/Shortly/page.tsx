"use client";

import { HeaderContext } from "@/app/Context/HeaderContext";
import AppAssets from "@/app/modules/app.modules";
import { useContext, useEffect } from "react";


export default function Shortly() {

    const { setPageTitle } = useContext(HeaderContext)

    useEffect(() => {
        setPageTitle("Em breve...")
    })
    return (
        <main style={{
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <section >
                <video style={{ borderRadius: "20px" }} controls={false} autoPlay loop muted>
                    <source src={AppAssets.videoShortly} />
                </video>
            </section>
        </main>
    )
}