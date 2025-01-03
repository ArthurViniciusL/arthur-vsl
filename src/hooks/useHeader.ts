'use client';

import { HeaderContext } from "@/context/HeaderContext";
import { useContext } from "react";

export function useHeader() {
    return useContext(HeaderContext);
}