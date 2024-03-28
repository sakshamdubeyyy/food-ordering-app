import React, { useEffect, useState } from 'react'

export default function useOnlineStatus() {
    const [status, setStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("online", () => {
            setStatus(true);
        });
        window.addEventListener("offline", () => {
            setStatus(false);
        })
    }, []);
    
    return status;
}
