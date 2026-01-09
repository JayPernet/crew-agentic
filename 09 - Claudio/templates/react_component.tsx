import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
// import { useFeature } from '@/hooks/useFeature';

interface ComponentProps {
    className?: string;
    // Add specific props
}

export const Component = ({ className }: ComponentProps) => {
    const [isLoading, setIsLoading] = useState(false);
    // const { mutate } = useFeature();

    const handleAction = async () => {
        setIsLoading(true);
        try {
            // await mutate();
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={cn('flex flex-col gap-4', className)}>
            <h2 className="text-xl font-semibold">Title</h2>
            <Button
                onClick={handleAction}
                disabled={isLoading}
                className="w-full md:w-auto"
            >
                {isLoading ? 'Loading...' : 'Action'}
            </Button>
        </div>
    );
};
