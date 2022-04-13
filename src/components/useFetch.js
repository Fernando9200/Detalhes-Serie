import React, { useState, useEffect } from 'react'

export default function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const controller = new AbortController()

        fetch(url, { signal: controller.signal })
            .then(res => {
                if (res.ok){
                    return res.json()
                } else {
                    throw new Error(res.statusText)
                }
            })
            .then(data => {
                setData(data)
                setLoading(false)
                setError(false)
            })
            .catch(e => {
                setLoading(false)
                setError(e.message)
            })
        return () => {
            controller.abort()
        }
    }, [url])

    return [data, loading, error]
}