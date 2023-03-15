import { useGetVideosQuery } from "../../fetures/api/apiSlice";
import Error from "../ui/Error";
import VideoLoader from "../ui/loaders/VideoLoader";
import Video from "./Video";

export default function Videos() {
    const { data: videos, isLoading, isError, error } = useGetVideosQuery();

    //decide what to render
    let content = null;
    if (isLoading) content = <><VideoLoader /> <VideoLoader /><VideoLoader /><VideoLoader /></>;
    if (!isLoading && isError) content = <Error message='there was an error' />;
    if (!isLoading && !isError && videos?.length === 0) {
        <Error message='there was no video' />;
    }
    if (!isLoading && !isError && videos?.length > 0) {
        content = videos.map(video => <Video key={video.id} video={video} />)
    }

    return (
        <>
            {content}
        </>
    );
}
