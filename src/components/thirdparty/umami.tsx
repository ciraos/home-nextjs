"use client";
import { useEffect } from "react";

export default function Umami() {

    useEffect(() => {
        const script = document.createElement("script");
        script.defer = true;
        script.src = "hhttps://umami.ciraos.top/script.js";
        script.setAttribute("data-website-id", "88508faa-6283-4ced-9e83-cb8b72be27e8");
        document.body.appendChild(script);
        return () => { document.body.removeChild(script); }
    }, [])

    return (
        <></>
    )
}
