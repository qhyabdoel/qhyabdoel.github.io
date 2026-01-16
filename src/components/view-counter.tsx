"use client";

import { useEffect, useState } from "react";

export const ViewCounter = () => {
    const [views, setViews] = useState<number | null>(null);

    useEffect(() => {
        const fetchViews = async () => {
            try {
                const response = await fetch(
                    "https://api.counterapi.dev/v1/qhyabdoel/qhyabdoel.github.io/up"
                );
                const data = await response.json();
                setViews(data.count);
            } catch (error) {
                console.error("Error fetching view count:", error);
            }
        };

        fetchViews();
    }, []);

    if (views === null) return null;

    return (
        <div className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Page Views: {views}
        </div>
    );
};
