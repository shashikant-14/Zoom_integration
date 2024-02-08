import { useState, useEffect } from "react";
import axios from "axios";

export const useResource = (resourceUrl) => {
    const [resources, setResources] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
            const response = await axios.get(resourceUrl);
            setResources(response.data);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
        })();
    }, [resourceUrl]);

    return { resources, error, loading };
};