import { useState } from 'react';
import { supabase } from '@/lib/supabase';

interface Payload {
    // Define strict types matching Backend expectation
    name: string;
}

export const useFeature = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const execute = async (payload: Payload) => {
        setLoading(true);
        setError(null);

        try {
            const { data, error: apiError } = await supabase.functions.invoke('function-name', {
                body: payload
            });

            if (apiError) throw apiError;
            return data;

        } catch (err: any) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { execute, loading, error };
};
