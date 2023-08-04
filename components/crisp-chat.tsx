"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("163867fa-8bdf-4ed5-a980-33199059984f");
    }, [])
}