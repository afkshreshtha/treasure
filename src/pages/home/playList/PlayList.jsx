import Carousel from "../../../components/playlistCarousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
import "./style.scss"

const PlayList = () => {

    const { data, loading } = useFetch('/modules?language=hindi,english');

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Popular PlayList</span>
            </ContentWrapper>
            <Carousel data={data?.data.playlists} loading={loading} />
        </div>
    );
};

export default PlayList;