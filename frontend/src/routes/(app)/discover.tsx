import { createFileRoute } from '@tanstack/react-router';
import InnerCard from '../-components/-innerCard';
import VideoGrid from '../-components/-videogrid/-videogrid';

export const Route = createFileRoute('/(app)/discover')({
  component: Discover,
});

function Discover() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <InnerCard>
          <VideoGrid />
        </InnerCard>
      </div>
    </>
  );
}
